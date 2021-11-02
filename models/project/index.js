/* eslint-disable import/newline-after-import */

const mongoose = require("mongoose");

const schema = require("./schema");

schema.pre("save", require("./pre-save"));

schema.statics.projectUrl = require("./project-url");

schema.methods.isAccessibleBy = require("./is-accessible-by");
schema.methods.hasOnwerAccess = require("./has-onwer-access");
schema.methods.saveJson = require("./save-json");
schema.methods.updateStats = require("./update-stats");
schema.methods.url = function url() {
  return schema.statics.projectUrl(this.version, this.id, this.json.meta.name);
};
schema.methods.getViews = require("./get-views");

module.exports = mongoose.models.Project || mongoose.model("Project", schema);
