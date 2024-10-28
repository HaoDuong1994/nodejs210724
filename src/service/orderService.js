const database = require("../config/mysqlConnection");

const createOrderService = async (reqBody) => {
  try {
    const connection = await database();
    const { idUser } = reqBody;
    const [results, fields] = await connection.query(`
        INSERT INTO orders (personID, receiverName, customerNote, receiverAddress, receiverPhoneNumber)
        VALUES(${idUser}, '${reqBody.receiverName}', '${reqBody.note}', '${reqBody.note}', '${reqBody.phoneNumber}')
        `);
    if (results) {
      return {
        idUser,
        results,
        idOrder: results.insertId,
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
  createOrderService,
};
