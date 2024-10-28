const database = require("../config/mysqlConnection");
const { hashPass, verifiedPass } = require("./hashPassService");
const getToken = require("./jwtservice");
const getAllCustomerService = async (reqQuery) => {
  try {
    const connection = await database();
    if (reqQuery) {
      const [results] = await connection.query(
        `SELECT * FROM customers WHERE email = '${reqQuery.email}'`
      );
      return results;
    } else {
      const [results, fields] = await connection.query(
        "SELECT * FROM customers"
      );
      return results;
    }
  } catch (error) {
    console.log("error from getAllCustomer service", error);
  }
};
const createCustomerService = async (reqBody, res) => {
  try {
    const { name, email, password } = reqBody;
    const hashPassword = await hashPass(password);
    const connection = await database();
    const [results, files] = await connection.query(`
      INSERT INTO customers (fullName, email, passwordUser)
      VALUES ('${name}', '${email}', '${hashPassword}');
      `);
    const token = getToken(reqBody);
    return { token, results };
  } catch (error) {
    res.status(500).json({
      EC: 1,
      message: error.sqlMessage,
    });
  }
};
const customerLoginService = async (reqBody) => {
  const { email, password } = reqBody;
  const connection = await database();
  const [results, fill] = await connection.query(
    `select * from customers where email = '${email}' `
  );
  if (results.length < 1) return "Email doesnt exist";
  const hashPassWord = results[0].passwordUser;
  const checkPass = await verifiedPass(password, hashPassWord);
  if (checkPass) {
    const token = getToken(reqBody);
    return {
      message: "Login success",
      token: token,
    };
  }
  return "Invalid PassWord";
};
module.exports = {
  getAllCustomerService,
  createCustomerService,
  customerLoginService,
};
