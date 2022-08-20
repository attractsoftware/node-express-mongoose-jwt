const pwdHash = require("password-hash");

module.exports.passwordCheck = (password, hashPassword) => {
  return pwdHash.verify(password, hashPassword);
};
