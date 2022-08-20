const mongoose = require("mongoose");
const pwdHash = require("password-hash");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  this.password = pwdHash.generate(this.password);
  next();
});

module.exports = mongoose.model("User", userSchema);
