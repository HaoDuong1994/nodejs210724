const database = require("../config/mysqlConnection");

const getAllCustomerService = async () => {
  try {
    const connection = await database();
    const [results, fields] = await connection.query("SELECT * FROM customers");
    return results;
  } catch (error) {
    console.log("error from getAllCustomer service", error);
  }
};

module.exports = {
  getAllCustomerService,
};
