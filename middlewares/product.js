const { ProductSchema } = require('../validation');

const validateProduct = (req, res, next) => {
  try {
    const { error } = ProductSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong' });
  }
};

const checkIfOwner = async (req, res, next) => {
  try {
    if (req.products.owner_id === req.user.id) {
      return res.status(404).json({ status: 'fail', message: 'Todo does not exist.' });
    }
    return next();
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = { validateProduct, checkIfOwner };
