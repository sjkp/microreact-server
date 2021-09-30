const { ApiError } = require("next/dist/next-server/server/api-utils");

const fs = require("fs");
const Stream = require("stream");
const path = require("path");
const tmp = require("tmp-promise");
const writeFile = require("writers-digest");
const pathExists = require("path-exists");

const config = require("../utils/server-runtime-config");
const ProxyService = require("./proxy-service");

const repoPath = path.resolve(config.repoPath);
const tmpPath = path.join(repoPath, "tmp");

const validHash = /^[a-f0-9]{40}$/;

function createTmpFile() {
  return tmp.file({ tmpdir: tmpPath }).then((data) => data.path);
}

async function checkFileSize(tmpFilePath, maxFileSizeInBytes) {
  const stats = await fs.promises.stat(tmpFilePath);
  if (stats.size > maxFileSizeInBytes) {
    throw new ApiError(413, "Payload Too Large");
  }
  return tmpFilePath;
}

function hashToPath(hash) {
  if (!validHash.test(hash)) {
    throw new Error("Invalid hash.");
  }
  return path.join(
    repoPath,
    hash.substr(0, 2),
    hash.substr(2),
  );
}

function finished(input) {
  return new Promise((resolve, reject) => {
    Stream.finished(
      input,
      (err) => {
        if (err) {
          reject(err);
        }
        else {
          resolve();
        }
      },
    );
  });
}

function saveContentToFile(content) {
  return (
    Promise.resolve()
      .then(createTmpFile)
      .then((tmpFilePath) => {
        return (
          fs.promises.writeFile(tmpFilePath, content, "utf-8")
            .then(() => tmpFilePath)
        );
      })
  );
}

function saveStreamToTmpFile(input) {
  return (
    Promise.resolve()
      .then(createTmpFile)
      .then((tmpFilePath) => {
        input.pipe(fs.createWriteStream(tmpFilePath));
        return (
          finished(input).then(() => tmpFilePath)
        );
      })
  );
}

function storeFile(tmpFilePath) {
  return new Promise((resolve, reject) => {
    writeFile(
      tmpFilePath,
      repoPath,
      (error, info) => {
        if (error) {
          reject(error);
        }
        else {
          resolve(info.digest);
        }
      },
    );
  });
}

function storeText(content) {
  return (
    Promise.resolve(content)
      .then(saveContentToFile)
      .then(storeFile)
  );
}

function storeStream(input, maxFileSizeInBytes) {
  return (
    Promise.resolve(input)
      .then(saveStreamToTmpFile)
      .then((tmpFilePath) => checkFileSize(tmpFilePath, maxFileSizeInBytes))
      .then(storeFile)
  );
}

function readText(fileHash) {
  return (
    Promise.resolve(hashToPath(fileHash))
      .then((filePath) => fs.promises.readFile(filePath, "utf-8"))
  );
}

function readStream(fileHash) {
  return (
    Promise.resolve(hashToPath(fileHash))
      .then((filePath) => fs.createReadStream(filePath))
  );
}

function fileUri(fileHash) {
  // return `microreact://${fileHash}`;
  return ProxyService.absolute(`api/files/raw?${fileHash}`);
}

function fileSize(fileHash) {
  return (
    Promise.resolve(hashToPath(fileHash))
      .then((filePath) => fs.promises.stat(filePath))
      .then((stats) => stats.size)
  );
}

function hasFile(hash) {
  return (
    Promise.resolve(hashToPath(hash))
      .then(pathExists)
  );
}

module.exports = {
  storeText,
  storeStream,
  readText,
  readStream,
  path: hashToPath,
  uri: fileUri,
  has: hasFile,
  size: fileSize,
};
