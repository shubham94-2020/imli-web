const mongoose = require("mongoose");
//code to make userschema having email and name

const programSchema = new mongoose.Schema({

  id: {
    type: int,
    require: [true, "please provide a title"],
  },
  title: {
    type: String,
    require: [true, "please provide a title"],
  },
  description: {
    type: String,
    require: [true, "please provide a description"],
  },
});

module.exports = mongoose.model("programs", programSchema);
