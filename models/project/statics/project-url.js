const Slugs = require("cgps-application-server/utils/slugs");

const UrlService = require("../../../services/url-service");

module.exports = function projectUrl(version, id, title) {
  const path = (
    (version > 1 && title && id.length === 22)
      ?
      Slugs.fromId(id, title)
      :
      id
  );
  return UrlService.absolute(`project/${path}`);
};
