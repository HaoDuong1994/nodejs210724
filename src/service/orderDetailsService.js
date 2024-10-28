const database = require("../config/mysqlConnection");
const createOrderDetailsService = async (reqBody) => {
  console.log(reqBody);
  const { idOrder, productCode, quantity, priceEach, payment } = reqBody;
  const connection = await database();
  try {
    const [results] =
      await connection.query(`INSERT INTO orderDetails (orderNumber , productCode, payment, quantity, priceEach)
      VALUES (${idOrder}, '${productCode}', '${payment}', ${quantity}, ${priceEach})`);
    if (results) {
      return {
        idOrder,
        productCode,
        quantity,
        priceEach,
        payment,
      };
    }
  } catch (error) {
    return {
      EC: 1,
      message: error.sqlMessage,
    };
  }
};
module.exports = {
  createOrderDetailsService,
};
