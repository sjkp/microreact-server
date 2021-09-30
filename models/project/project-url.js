const slugify = require("slugify");
const url = require("../../services/proxy-service");

module.exports = function projectUrl(version, id, title) {
  let path = id;
  if (version > 1 && title) {
    const slug = slugify(
      title,
      {
        lower: true,
        strict: true,
      },
    );
    path += `-${slug}`;
  }
  return url.absolute(`project/${path}`);
};
