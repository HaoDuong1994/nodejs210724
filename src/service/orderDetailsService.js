const database = require("../config/mysqlConnection");
const createOrderDetailsService = async (reqBody) => {
  const { idOrder, productCode, quantity, buyPrice } = reqBody;
  let payment = "";
  if (reqBody.card) {
    payment = "card";
  } else {
    payment = "cash";
  }
  const connection = await database();
  try {
    const [results] =
      await connection.query(`INSERT INTO orderDetails (orderNumber , productCode, payment, quantity, priceEach)
      VALUES (${idOrder}, '${productCode}', '${payment}', 1, ${buyPrice})`);
    if (results) {
      return {
        idOrder,
        productCode,
        quantity,
        buyPrice,
        payment,
      };
    }
  } catch (error) {
    if (error) {
      return {
        EC: 1,
        message: error.sqlMessage,
      };
    }
  }
};
module.exports = {
  createOrderDetailsService,
};
