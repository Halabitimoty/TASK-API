const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const taskschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

taskschema.plugin(paginate);

const taskcollection = mongoose.model("task", taskschema);

module.exports = { taskcollection };
