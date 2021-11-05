const mongoose = require("mongoose");

const schema = require("./schema");

schema.pre("save", require("./pre-save"));

module.exports = mongoose.models.Folder || mongoose.model("Folder", schema);
