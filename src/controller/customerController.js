const { getAllCustomerService } = require("../service/customerService");
//Get
const getCustomerController = async (req, res) => {
  try {
    const customerData = await getAllCustomerService();
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
  console.log("requesst", req.body);
  res.send(" ok create customer");
};
module.exports = {
  getCustomerController,
  createCustomerController,
};
