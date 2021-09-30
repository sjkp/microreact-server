const { projectSchemaVersion } = require("./schema");

module.exports = function (next) {
  const date = new Date();

  if (!this.createdAt) {
    this.createdAt = date;
  }

  this.updatedAt = date;

  this.version = projectSchemaVersion;

  next();
};
