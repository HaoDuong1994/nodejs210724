const {
  getAllProductService,
  createProductService,
  searchProductService,
  getDetailsProductService,
  filterProductService,
} = require("../service/productService");
const getAllProductController = async (req, res) => {
  try {
    if (req.query.productName && !req.query.productName == "") {
      const data = await searchProductService(req.query.productName);
      if (data.length == 0)
        return res.status(200).json({
          ec: 0,
          message: "no data found",
        });
      res.status(200).json({
        EC: 0,
        data: data,
        quantity: data.length,
      });
    } else {
      const data = await getAllProductService(req.query);
      res.status(200).json({
        EC: 0,
        data,
      });
    }
  } catch (error) {
    res.status(400).json({
      EC: 1,
      message: "No product found",
    });
  }
};

const createProductController = async (req, res) => {
  try {
    const data = await createProductService(req.body);
    if (data)
      return res.status(200).json({
        EC: 0,
        message: "Product created success",
        data: data,
      });
  } catch (error) {
    res.status(400).json({
      EC: 1,
      message: "Fail to create Product",
    });
  }
};

const getProductDetail = async (req, res) => {
  try {
    const { productID } = req.query;
    const data = await getDetailsProductService(productID);
    res.status(200).json({
      EC: 0,
      message: "get product success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      EC: 1,
      message: "error",
      status: JSON.stringify(error),
    });
  }
};
const filterProductController = async (req, res) => {
  try {
    const data = await filterProductService(req.query);
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      EC: 1,
      message: JSON.stringify(error),
    });
  }
};
module.exports = {
  getAllProductController,
  createProductController,
  getProductDetail,
  filterProductController,
};
