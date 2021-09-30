const slugify = require("slugify");
const url = require("../../services/proxy-service");

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
  return url.absolute(`project/${path}`);
};
