const {
  getAllProductService,
  createProductService,
  getDetailsProductService,
} = require("../service/productService");
const getAllProductController = async (req, res) => {
  try {
    const data = await getAllProductService(req.query);
    res.status(200).json({
      EC: 0,
      data,
    });
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
module.exports = {
  getAllProductController,
  createProductController,
  getProductDetail,
};
