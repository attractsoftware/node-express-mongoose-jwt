const userModel = require("../models/userModel");
const { passwordCheck } = require("../plugins/password-check");
const { generateAccessToken } = require("../plugins/jwt");

module.exports.addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new userModel({
    name,
    email,
    password,
  });
  const result = await user.save();
  if (!result) res.status(400).send("something wrong...");
  res.send({ created: true });
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).send("user not found...");
  const isLogged = passwordCheck(password, user.password);
  if (!isLogged) return res.status(400).send("invalid password...");
  res.send({ success: true, token: generateAccessToken({ id: user._id }) });
};
