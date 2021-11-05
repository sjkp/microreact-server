const mongoose = require("mongoose");

module.exports = mongoose.Schema({
  createdAt: { type: Date },
  name: { type: String },
  email: { type: String },
  image: { type: String },
  updatedAt: { type: Date },
});
