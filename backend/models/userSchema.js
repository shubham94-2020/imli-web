const mongoose = require("mongoose");
const validator = require("validator");
// const bcrypt = require("bcrypt");
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
    required: [true, "Please provide a password"],
    select: false,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return candidatePassword === userPassword;
};
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; //10mins
  return resetToken;
};
module.exports = mongoose.model("users", userSchema);
