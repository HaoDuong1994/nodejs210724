const {
  getAllCustomerService,
  createCustomerService,
  customerLoginService,
} = require("../service/customerService");
//Get
const getCustomerController = async (req, res) => {
  try {
    const customerData = await getAllCustomerService(req.query);
    res.status(200).json({
      EC: 0,
      message: "get customer success",
      data: customerData,
    });
  } catch (error) {
    return {
      EC: 1,
      message: "No customer found",
    };
  }
};

//Create
const createCustomerController = async (req, res) => {
  try {
    const result = await createCustomerService(req.body, res);
    if (result)
      res.status(200).json({
        ec: 0,
        message: "Create user success",
        data: result,
      });
  } catch (error) {
    res.status(500).json({
      ec: 1,
      message: JSON.stringify(error),
    });
  }
};
const loginController = async (req, res) => {
  try {
    const result = await customerLoginService(req.body);
    if (result == "Email doesnt exist") {
      res.status(400).json({
        EC: 1,
        message: "Invalid email, please try again",
      });
    }
    if (result == "Invalid PassWord") {
      res.status(400).json({
        EC: 1,
        message: "PassWord not correct please try again",
      });
    } else {
      res.status(200).json({
        EC: 0,
        result,
      });
    }
  } catch (error) {
    console.log("result here >>>", error);
  }
};
module.exports = {
  getCustomerController,
  createCustomerController,
  loginController,
};
