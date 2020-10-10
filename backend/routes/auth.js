const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

const User = require("../models/User");

router.post("/register", async (req, res) => {
    
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already exists in the database");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.send("User Registered Successfully!");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
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

  res.send("Logged in Successfully!");
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
