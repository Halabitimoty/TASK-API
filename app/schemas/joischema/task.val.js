const Joi = require("joi");

const createval = Joi.object({
  title: Joi.string().required().min(3).max(50),
  description: Joi.string().required(),
  published: Joi.boolean().required(),
});

const updateval = Joi.object({
  id: Joi.string().alphanum(),
  title: Joi.string().min(3).max(50),
  description: Joi.string(),
  published: Joi.boolean(),
});
module.exports = {
  createval,
  updateval,
};
