const Joi = require("joi");

const loginval = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

const registerval = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().min(3).max(20).required(),
  password: Joi.string().min(6).max(25).required(),
  role: Joi.string().allow("user", "admin").required(),
  profilepicture: Joi.string(),
});

module.exports = {
  loginval,
  registerval,
};
