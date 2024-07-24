const express = require("express");
const app = express();
const customerRouter = express.Router();
const {
  getCustomerController,
  createCustomerController,
} = require("../controller/customerController");

//Get customer
customerRouter.get("/", getCustomerController);

//Create customer
customerRouter.post("/create", createCustomerController);
module.exports = customerRouter;
