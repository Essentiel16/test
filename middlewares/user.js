const { signupSchema, loginSchema } = require('../validation');
const { getSingleUserByUsername } = require('../services');

const validateSignup = (req, res, next) => {
  try {
    const { error } = signupSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong' });
  }
};

const validateLogin = (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong' });
  }
};

const checkIfUserExists = async (req, res, next) => {
  try {
    const user = await getSingleUserByUsername(req.body.username);
    if (!user) {
      return next();
    }
    return res.status(409).json({ status: 'fail', message: 'User already exists' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Oops! It\'s not you, it\'s us. Pls try again.' });
  }
};

module.exports = {
  validateSignup,
  validateLogin,
  checkIfUserExists,
};
