const { validateSignup, validateLogin, checkIfUserExists } = require('./user');
const { validateProduct, checkIfOwner } = require('./product');
const { authenticate, productOwnerValidator, productOwnerCrossValidation } = require('./auth');

module.exports = {
  validateSignup,
  validateLogin,
  validateProduct,
  authenticate,
  productOwnerValidator,
  checkIfOwner,
  productOwnerCrossValidation,
  checkIfUserExists,
};
