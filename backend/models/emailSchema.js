const mongoose = require("mongoose");
const validator = require("validator");



const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email address"],
    lowercase: true,
    validators: [validator.isEmail, "Please Provide a valid email"],
  },
 
});


module.exports = mongoose.model("emails", emailSchema);
