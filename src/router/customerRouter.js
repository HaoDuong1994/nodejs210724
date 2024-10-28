const express = require("express");
const app = express();
const customerRouter = express.Router();
const {
  getCustomerController,
  createCustomerController,
  loginController,
} = require("../controller/customerController");

//Get customer
customerRouter.get("/", getCustomerController);

//Create customer
customerRouter.post("/create", createCustomerController);

//Login customer
customerRouter.post("/login", loginController);
module.exports = customerRouter;
