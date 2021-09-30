const url = require("../../services/proxy-service");

module.exports = function fileUrl(fileHash) {
  return url.absolute(`api/files/local?${fileHash}`);
};
