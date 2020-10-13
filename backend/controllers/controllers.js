const bcrypt = require("bcryptjs");
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
    return res.status(400).send("User doesn't exists!");
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
    });
    const response = await user.save();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getTrans = async (req, res) => {
  const { user_id } = req.params;

  Transaction.find({user_id})
    .then((trans) => res.json(trans))
    .catch((err) => res.status(400).json("Error: " + err));

};

module.exports = { Register, Login, Trans, getTrans };
