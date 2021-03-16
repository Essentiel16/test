const createProductSchema = require('./product');
const { signupSchema, loginSchema } = require('./user');

module.exports = {
  createProductSchema,
  signupSchema,
  loginSchema,
};
