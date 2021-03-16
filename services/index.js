const { addNewUser, getSingleUserById, getSingleUserByUsername } = require('./user');
const {
  addNewProduct,
  displaySingleProduct,
  editProduct,
  deleteProduct,
  displayAllProducts,
  updateProductRating,
  getAllProductsForSingleUser,
} = require('./product');

module.exports = {
  addNewUser,
  addNewProduct,
  getSingleUserById,
  getSingleUserByUsername,
  displaySingleProduct,
  editProduct,
  deleteProduct,
  displayAllProducts,
  updateProductRating,
  getAllProductsForSingleUser,
};
