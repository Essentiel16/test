const db = require('../db/setup');
const { insertUser, fetchUserById, fetchUserByUsername } = require('../db/queries/user');
const { generateUUID } = require('../utils');

const addNewUser = async (data) => {
  const id = generateUUID();
  const { username, email, password } = data;
  return db.one(insertUser, [id, username, email, password]);
};

const getSingleUserById = async (id) => db.oneOrNone(fetchUserById, [id]);

const getSingleUserByUsername = async (username) => db.oneOrNone(fetchUserByUsername, [username]);

module.exports = {
  addNewUser,
  getSingleUserById,
  getSingleUserByUsername,
};
