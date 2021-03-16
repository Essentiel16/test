const { addNewUser, getSingleUserByUsername } = require('../services');
const { addDataToToken, hashPassword, comparePassword } = require('../utils');

const registerUser = async (req, res) => {
  try {
    const hashedPassword = hashPassword(req.body.password);
    const userInfo = await addNewUser({ ...req.body, password: hashedPassword });
    console.log(userInfo);
    res.status(201).json({ status: 'success', message: 'User Registration successful', data: userInfo });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await getSingleUserByUsername(req.body.username);
    if (user && comparePassword(password, user.password)) {
      delete user.password;
      const token = addDataToToken(user.email);
      return res.status(200).json({ status: 'success', message: 'Login Successful.', data: { token, user } });
    }
    return res.status(401).json({ status: 'fail', message: 'Invalid login details' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
