const slugify = require("slugify");
const UrlService = require("../../services/url-service");

module.exports = function (id, name) {
  const title = name;
  let path = id;
  if (title) {
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
