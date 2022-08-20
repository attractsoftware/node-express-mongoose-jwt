const { check } = require("express-validator");
const { ValidationError } = require("./validation");

module.exports.addUserValidator = [
  check("name", "name is required").not().isEmpty(),
  check("email", "email is required").not().isEmpty(),
  ValidationError,
];
