const Joi = require("joi");

const createval = Joi.object({
  title: Joi.string().required().min(3).max(50),
  description: Joi.string().required(),
  published: Joi.boolean().required(),
});

module.exports = {
  createval,
};
