const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

module.exports = mongoose.Schema({
  createdAt: { type: Date },
  name: { type: String },
  owner: { type: ObjectId, ref: "User" },
  updatedAt: { type: Date },
});
