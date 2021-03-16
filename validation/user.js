const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(3).email().required(),
  password: Joi.string().min(5).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().required(),
});

module.exports = { signupSchema, loginSchema };
