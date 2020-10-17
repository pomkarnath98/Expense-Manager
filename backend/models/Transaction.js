const mongoose = require("mongoose");

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
  },
  timestamp: {
    type: Number,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
