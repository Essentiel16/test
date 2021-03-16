const db = require('../db/setup');
const {
  insertProduct,
  fetchProductById,
  fetchProducts,
  fetchSingleUserProducts,
  editProductById,
  deleteProductById,
  updateProductRatingById,
} = require('../db/queries/product');
const { generateUUID } = require('../utils');

const addNewProduct = async (data) => {
  const id = generateUUID();
  const {
    productName, description, category, size, rating,
  } = data;
  db.one(insertProduct, [id, productName, description, category, size, rating]);
};

const displayAllProducts = async () => db.manyOrNone(fetchProducts);

const displaySingleProduct = async (productId) => db.oneOrNone(fetchProductById, [productId]);

// const getAllRatings = async (productId) => db.manyOrNone(fetchAllProductRatings, [productId]);

const editProduct = async (productName, description, category, size, rating) => db.one(
  editProductById, [productName, description, category, size, rating],
);

const deleteProduct = async (productId) => db.none(deleteProductById, [productId]);

const getAllProductsForSingleUser = async (userId) => db.manyOrNone(
  fetchSingleUserProducts, [userId],
);

const updateProductRating = async (productId, rating) => (
  db.one(updateProductRatingById, [productId, rating]));
module.exports = {
  addNewProduct,
  displaySingleProduct,
  editProduct,
  deleteProduct,
  displayAllProducts,
  getAllProductsForSingleUser,
  updateProductRating,
};
