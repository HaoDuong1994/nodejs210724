const database = require("../config/mysqlConnection");
const getAllProductService = async () => {
  try {
    const connection = await database();
    const [data] = await connection.query("select * from products");
    return data;
  } catch (error) {
    console.log("error from getProductService", error);
  }
};

const createProductService = async (reqBody) => {
  try {
    console.log(reqBody);
    const { productCode, productName, buyPrice, description, img } = reqBody;
    const connection = await database();
    const [data] = await connection.query(
      `INSERT INTO products (productCode, productName, buyPrice, description, img) 
      VALUES('${productCode}', '${productName}', ${Number(
        buyPrice
      )}, '${description}', '${img}')`
    );
    return data;
  } catch (error) {
    console.log("error from create product", error);
  }
};
module.exports = {
  getAllProductService,
  createProductService,
};
