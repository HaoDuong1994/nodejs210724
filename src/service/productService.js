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

const searchProductService = async (stringData) => {
  console.log("service >>", stringData);
  try {
    const connection = await database();
    const [data] = await connection.query(
      `SELECT * FROM products WHERE productName like '%${stringData}%' limit 8`
    );
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
const filterProductService = async (reqQuery) => {
  try {
    const connection = await database();
    console.log(reqQuery);
    const { price, productName } = reqQuery;
    console.log(price);
    //find product price under 500.000
    if (price == 1) {
      const [data] = await connection.query(
        `SELECT * FROM products WHERE buyPrice < 500000 and productName like '%${productName}%' `
      );
      if (data.length == 0)
        return {
          EC: 1,
          message: "no product found",
        };
      return {
        EC: 0,
        quantity: data.length,
        data,
      };
    }
    //find product price from 500.000 to 1.500.000
    if (price == 2) {
      const [data] = await connection.query(
        `SELECT * FROM products WHERE buyPrice BETWEEN 500000 AND 1500000 AND productName like '%${productName}%' `
      );
      if (data.length == 0)
        return {
          EC: 1,
          message: "no product found",
        };
      return {
        EC: 0,
        quantity: data.length,
        data,
      };
    }
    //find product price from 500.000 to 1.500.000
    if (price == 3) {
      const [data] = await connection.query(
        `SELECT * FROM products WHERE buyPrice BETWEEN 1500000 AND 2500000 AND productName like '%${productName}%' `
      );
      if (data.length == 0)
        return {
          EC: 1,
          message: "no product found",
        };
      return {
        EC: 0,
        quantity: data.length,
        data,
      };
    }
    //find product price over 2.500.000
    if (price == 4) {
      const [data] = await connection.query(
        `SELECT * FROM products WHERE buyPrice > 2500000   AND productName like '%${productName}%' `
      );
      if (data.length == 0)
        return {
          EC: 1,
          message: "no product found",
        };
      return {
        EC: 0,
        quantity: data.length,
        data,
      };
    }
  } catch (error) {
    console.log("error from filter product service", error);
  }
};
module.exports = {
  getAllProductService,
  createProductService,
  getDetailsProductService,
  searchProductService,
  filterProductService,
};
