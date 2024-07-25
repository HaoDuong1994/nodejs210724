const express = require("express");
const app = express();
const {
  getAllProductController,
  createProductController,
} = require("../controller/productController");
const productRouter = express.Router();

//Get Product
productRouter.get("/", getAllProductController);

//Create product
productRouter.post("/create", createProductController);
module.exports = productRouter;
