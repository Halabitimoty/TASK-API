const Joi = require("joi");

const loginval = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5).max(20),
});

const registerval = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().min(3).max(20).required(),
  password: Joi.string().min(6).max(25).required().alphanum(),
  role: Joi.string().allow("user", "admin").required(),
  profilepicture: Joi.string(),
});

const forgetpasswordval = Joi.object({
  email: Joi.string().email().min(3).max(20).required().messages({
    "string.email": "Your email is not valid",
    "any.required": "'email' field is required",
  }),
});

module.exports = {
  loginval,
  registerval,
  forgetpasswordval,
};
