const database = require("../config/mysqlConnection");
const getAllProductService = async (reqQuery) => {
  try {
    const checkObjectNull = Object.values(reqQuery).length;
    const connection = await database();
    if (reqQuery && !checkObjectNull == 0) {
      const { page, productType } = reqQuery;
      const limit = 8;
      let offset = (page - 1) * limit;
      if (productType) {
        const [data] = await connection.query(
          `select * from products 
          where productType = '${productType}' 
          limit ${limit} offset ${offset}`
        );
        return data;
      } else {
        const [data] = await connection.query(
          `select * from products limit ${limit} offset ${offset}`
        );
        return data;
      }
    } else {
      const [data] = await connection.query("select * from products");
      return data;
    }
  } catch (error) {
    console.log("error from getProductService", error);
  }
};

const createProductService = async (reqBody) => {
  try {
    console.log(reqBody);
    const {
      productCode,
      productName,
      buyPrice,
      description,
      img,
      productType,
    } = reqBody;
    const connection = await database();
    const [data] = await connection.query(
      `INSERT INTO products (productCode, productName, buyPrice, description, img, productType) 
      VALUES('${productCode}', '${productName}', ${Number(
        buyPrice
      )}, '${description}', '${img}', '${productType}')`
    );
    return data;
  } catch (error) {
    console.log("error from create product", error);
  }
};

const getDetailsProductService = async (productID) => {
  try {
    const connection = await database();
    const [data] = await connection.query(
      `select * from products where productCode = '${productID}'`
    );
    const imgDetailProduct = await connection.query(
      `select src from productImg where productId = '${productID}' `
    );
    const imgDetail = imgDetailProduct[0];
    data[0].imgStorage = imgDetail;
    return data[0];
  } catch (error) {
    console.log("error from getDetailProductService", error);
  }
};

module.exports = {
  getAllProductService,
  createProductService,
  getDetailsProductService,
};
