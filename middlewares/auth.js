const { verifyToken } = require('../utils');

const authenticate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    const token = authorization.split(' ')[1];
    const { err, data } = verifyToken(token);
    if (err) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    req.user = data;
    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
};

const productOwnerValidator = (req, res, next) => {
  try {
    if (req.user.id === req.product.ownerId) {
      return next();
    }
    return res.status(403).json({ status: 'fail', message: 'Only admins can access this' });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
};

const productOwnerCrossValidation = (req, res, next) => {
  try {
    if (req.user.id !== req.product.ownerId) {
      return next();
    }
    return res.status(403).json({ status: 'fail', message: 'You are unable to perform this operation because you are the owner' });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
};

/* const ratingValidator = async (req, res, next) => {
  try {
    if (req.user.id !== req.product.owner_id) {
      const clientRater = getAllRatings(req.product.id);
      console.log(clientRater);
      return next();
    }
    return res.status(403).json({ status: 'fail', message: 'Owners rate their own products' });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' });
  }
}; */

module.exports = {
  authenticate,
  productOwnerValidator,
  productOwnerCrossValidation,
  // ratingValidator,
};
