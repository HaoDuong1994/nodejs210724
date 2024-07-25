const {
  getAllProductService,
  createProductService,
} = require("../service/productService");
const getAllProductController = async (req, res) => {
  try {
    const data = await getAllProductService();
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
    res.status(200).json({
      EC: 0,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      EC: 1,
      message: "Fail to create Product",
    });
  }
};
module.exports = {
  getAllProductController,
  createProductController,
};
