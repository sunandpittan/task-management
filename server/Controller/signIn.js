const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../userSchema");
const express = require("express");
const app = express();

const signIn = async (req, res) => {
  const { username, password } = req.body;
  const userId = await user.findOne({ username });

  if (userId && (await bcrypt.compare(password, userId.password))) {
    res.json({
      message: "Login successful",
      token: tokengenerate(userId._id),
      username: userId.username,
      role: userId.role,
    });
  } else if (!userId) {
    res.json("Username doesn't exist");
  } else {
    res.json("Login failed");
  }
};

const tokengenerate = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = signIn;
