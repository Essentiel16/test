const { registerUser, loginUser } = require('./user');
const {
  createProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
  rateProduct,
  modifyProduct,
} = require('./product');

module.exports = {
  registerUser,
  loginUser,
  createProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
  rateProduct,
  modifyProduct,
};
