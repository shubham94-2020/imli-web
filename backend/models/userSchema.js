const mongoose = require("mongoose");
const validator = require("validator");
//code to make userschema having email and name

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email address"],
    lowercase: true,
    validators: [validator.isEmail, "Please Provide a valid email"],
  },
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    select: false,
  },
});

module.exports = mongoose.model("users", userSchema);
