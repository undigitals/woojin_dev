const validator = require("validator");
const isEmpty = require("./is-empty");

const validateLoginInput = data => {
  let errors = {};

  if (!validator.isEmail(data.email)) {
    errors.email = "Enter valid email";
  }
  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateLoginInput;
