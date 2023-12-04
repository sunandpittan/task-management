const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../userSchema");

const signUp = async (req, res) => {
  const { username, password } = req.body;
  const userName = await user.findOne({ username });

  if (userName) {
    res.json("Username already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const userDetails = await user.create({
      username,
      password: hashedpassword,
    });
    res.json(userDetails);
  }
};

module.exports = signUp;
