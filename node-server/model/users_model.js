const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_name: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, required: true },
  first_name: String,
  last_name: String,
  student_id: Number,
  age: Number,
  major: String,
  image_dir: String,
  joined_date: Date,
});

module.exports = mongoose.model("user_info", userSchema);
