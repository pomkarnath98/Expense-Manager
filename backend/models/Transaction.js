const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  user_id: {
    type: String,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: {
    type: String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
