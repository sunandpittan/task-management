const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  category: { type: String },
  status: { type: String },
  username: { type: String },
});

const todo = mongoose.model("todo", toDoSchema);

module.exports = todo;
