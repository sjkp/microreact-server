/* eslint-disable import/newline-after-import */

const mongoose = require("mongoose");

const schema = require("./schema");

module.exports = mongoose.models.User || mongoose.model("User", schema);
