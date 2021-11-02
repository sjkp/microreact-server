const { projectSchemaVersion } = require("./schema");

const FileStorage = require("../../services/file-storage");

/**
 * Saves inline files in storage and converts them to URLs
 * @param {Array} files
 */
async function saveInlineFilesInStorage(projectJson) {
  for (const file of Object.values(projectJson.files || {})) {
    if (file.blob && typeof file.blob === "string") {
      const fileHash = await FileStorage.storeText(file.blob);
      file.blob = undefined;
      file.url = FileStorage.uri(fileHash);
      file.hash = fileHash;
    }
  }
}

module.exports = async function saveJson(projectJson, parentProjectId) {
  await saveInlineFilesInStorage(projectJson);

  this.json = projectJson;

  this.version = projectSchemaVersion;

  return this.save();
};
