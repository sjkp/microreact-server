/* eslint-disable import/newline-after-import */

const mongoose = require("mongoose");

const schema = require("./schema");

module.exports = mongoose.models.Folder || mongoose.model("Folder", schema);
