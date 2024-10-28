const { createOrderDetailsService } = require("../service/orderDetailsService");

const orderDetailsController = async (req, res) => {
  const result = await createOrderDetailsService(req.body);
  if (result.EC == 1) {
    res.status(400).json({
      EC: 1,
      message: result.message,
    });
  } else {
    res.status(200).json({
      EC: 0,
      message: "Create orderDetails success",
      data: result,
    });
  }
};
module.exports = {
  orderDetailsController,
};
