const {
  addNewProduct,
  displayAllProducts,
  deleteProduct,
  getAllProductsForSingleUser,
  updateProductRating,
  editProduct,
} = require('../services');

const createProduct = async (req, res) => {
  try {
    const product = await addNewProduct({
      productName: req.body.productName,
      description: req.body.description,
      category: req.body.category,
      size: req.body.size,
      rating: req.body.rating,
      ownerId: req.user.id,
    });
    res
      .status(201)
      .json({
        status: 'success',
        message: 'Product created successfully.',
        data: product,
      });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const getProduct = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: 'success', message: 'Product fetched ', data: req.product });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Oops! It\'s not you, it\'s us. Pls try again' });
  }
};

const allProducts = async (req, res) => {
  try {
    const productList = await displayAllProducts();
    res.status(200).json({
      status: 'success',
      message: 'Products fetched successfully.',
      data: productList,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Oops! It\'s not you, it\'s us. Pls try again.',
    });
  }
};

const getUserProducts = async (req, res) => {
  try {
    const products = await getAllProductsForSingleUser(req.user.id);
    res.status(200).json({
      status: 'success',
      message: 'Products fetched successfully.',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Oops! It\'s not you, it\'s us. Pls try again.',
    });
  }
};

const modifyProduct = async (req, res) => {
  try {
    await editProduct(
      req.body.product_name,
      req.body.description,
      req.body.category,
      req.body.size,
      req.body.rating,
    );
    res
      .status(200)
      .json({ status: 'success', message: 'Product has been modified.' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Oops! It\'s not you, it\'s us. Pls try again' });
  }
};

const deleteSelectedProduct = async (req, res) => {
  try {
    await deleteProduct(req.params.product.id);
    res.status(200).json({ status: 'success', message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Oops! It\'s not you, it\'s us. Pls try again' });
  }
};

const rateProduct = async (req, res) => {
  try {
    await updateProductRating(req.product_name, req.body.rating, req.user.id);
    res
      .status(200)
      .json({ status: 'success', message: 'Product has been rated.' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Oops! It\'s not you, it\'s us. Pls try again' });
  }
};

module.exports = {
  createProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
  rateProduct,
  modifyProduct,
};
