const mongoose = require("mongoose");

const forgetpasswordschema = new mongoose.Schema({
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const forgetpasswordcollection = mongoose.model(
  "forgetpassword",
  forgetpasswordschema
);

module.exports = { forgetpasswordcollection };
