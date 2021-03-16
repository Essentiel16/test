const Joi = require('joi');

const createProductSchema = Joi.object({
  productName: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  category: Joi.string().required(),
  size: Joi.string(),
  rating: Joi.string().required(),
});

module.exports = { createProductSchema };
