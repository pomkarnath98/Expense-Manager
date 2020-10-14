const bcrypt = require("bcryptjs");
const moment = require("moment");
const {
  registerValidation,
  loginValidation,
  transactionValidation,
} = require("../validation");

const User = require("../models/User");
const Transaction = require("../models/Transaction");

const Register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already exists in the database");
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.send("User Registered Successfully!");
  } catch (err) {
    res.status(400).send(err);
  }
};

const Login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("User doesn't exist!");
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password!");

  const response = {
    user_id: user._id,
    message: "Logged in Successfully!",
  };

  res.send(response);
};

const Trans = async (req, res) => {
  const { error } = transactionValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const user = new Transaction({
      user_id: req.body.user_id,
      title: req.body.title,
      type: req.body.type,
      amount: req.body.amount,
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      timestamp: moment().unix(),
    });
    const response = await user.save();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
};

const fiveTrans = async (req, res) => {
  const { user_id } = req.params;

  Transaction.find({ user_id })
    .sort({ timestamp: -1 })
    .limit(5)
    .then((trans) => res.json(trans))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getTrans = async (req, res) => {
  const { user_id } = req.params;
  const page = Number(req.query.page) || 1;
  const type = req.query.type || "all";
  const limit = 2;

  let transactions;
  if (type == "credit") {
    await Transaction.find({ user_id, type: "Credit" })
      .sort({ timestamp: -1 })
      .then((trans) => (transactions = trans))
      .catch((err) => res.status(400).json("Error: " + err));

    const results = {};

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (endIndex < transactions.length) {
      results.next = {
        page: page + 1,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      };
    }

    results.current = transactions.slice(startIndex, endIndex);
    return res.json(results);
  }

  if (type == "debit") {
    await Transaction.find({ user_id, type: "Debit" })
      .sort({ timestamp: -1 })
      .then((trans) => (transactions = trans))
      .catch((err) => res.status(400).json("Error: " + err));

    const results = {};

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (endIndex < transactions.length) {
      results.next = {
        page: page + 1,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      };
    }

    results.current = transactions.slice(startIndex, endIndex);
    return res.json(results);
  }

  await Transaction.find({ user_id })
    .sort({ timestamp: -1 })
    .then((trans) => (transactions = trans))
    .catch((err) => res.status(400).json("Error: " + err));

  const results = {};

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  if (endIndex < transactions.length) {
    results.next = {
      page: page + 1,
    };
  }

  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }

  results.current = transactions.slice(startIndex, endIndex);
  res.json(results);
};

module.exports = { Register, Login, Trans, fiveTrans, getTrans };
