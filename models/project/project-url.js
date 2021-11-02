const slugify = require("slugify");
const UrlService = require("../../services/url-service");

module.exports = function projectUrl(version, id, title) {
  let path = id;
  if (version > 1 && title && id.length === 22) {
    const slug = slugify(
      title,
      {
        lower: true,
        strict: true,
      },
    );
    path += `-${slug}`;
  }
  return UrlService.absolute(`project/${path}`);
};
