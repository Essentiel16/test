const { Router } = require('express');

const {
  createProduct,
  getProduct,
  deleteSelectedProduct,
  allProducts,
  getUserProducts,
  rateProduct,
  modifyProduct,
} = require('../controllers');

const {
  validateProduct,
  authenticate,
  checkIfOwner,
  productOwnerValidator,
  productOwnerCrossValidation,
} = require('../middlewares');

const productRouter = Router();

productRouter.use(authenticate);

productRouter.post('/product', validateProduct, createProduct); // correct
productRouter.post('/product', validateProduct, productOwnerCrossValidation, rateProduct);

productRouter.use('/product/:productId', productOwnerValidator, checkIfOwner);
productRouter.put('/product/:productId', validateProduct);
// productRouter.post('/product/:productId', ownerDenialValidator, rateProduct);

productRouter.delete('/product/:productId', productOwnerValidator, deleteSelectedProduct);

productRouter.patch('/product/:productId', modifyProduct);
productRouter.patch('/product/:productId', rateProduct);
productRouter.patch('/product/rate/:productId', checkIfOwner, rateProduct);

productRouter.get('/product/:productId', getProduct);
productRouter.get('/product', getUserProducts);
productRouter.get('./products', allProducts);

module.exports = productRouter;
