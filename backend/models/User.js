const mongoose = require("mongoose");
const moment = require("moment")

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a'),
  },
});

module.exports = mongoose.model("User", userSchema);
