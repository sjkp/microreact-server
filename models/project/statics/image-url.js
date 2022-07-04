const UrlService = require("../../../services/url-service");

module.exports = function imageUrl(id) {
  return UrlService.absolute(`api/projects/image?project=${id}`);
};
