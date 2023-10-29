const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    fullname: {
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
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profilepicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const usercollection = mongoose.model("user", userschema);

module.exports = { usercollection };
