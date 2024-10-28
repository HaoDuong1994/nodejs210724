const jwt = require("jsonwebtoken");
require("dotenv").config();
const getToken = (body, res) => {
  const secret = process.env.JWT_SIGN;
  const token = jwt.sign(body, secret, { expiresIn: 60 * 60 * 24 });
  return token;
};
module.exports = getToken;
