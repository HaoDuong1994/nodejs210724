const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(5);
const hashPass = async (password) => {
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

const verifiedPass = async (requestPassword, hash) => {
  const result = await bcrypt.compareSync(requestPassword, hash);
  return result;
};
module.exports = {
  hashPass,
  verifiedPass,
};
