const express = require("express");
const app = express();
const { createOrderController } = require("../controller/orderController");
const orderRouter = express.Router();
orderRouter.post("/create", createOrderController);
module.exports = orderRouter;
