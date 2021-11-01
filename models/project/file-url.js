const UrlService = require("../../services/url-service");

module.exports = function fileUrl(fileHash) {
  return UrlService.absolute(`api/files/local?${fileHash}`);
};
