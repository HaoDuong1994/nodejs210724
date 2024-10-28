const {
  orderDetailsController,
} = require("../controller/orderDetailsController");
const express = require("express");
const orderDetailsRouter = express.Router();
orderDetailsRouter.post("/create", orderDetailsController);
module.exports = orderDetailsRouter;
