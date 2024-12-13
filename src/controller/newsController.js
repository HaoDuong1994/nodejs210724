const { getNewsService, createNewsService } = require("../service/newsService");
const getNewsController = async (req, res) => {
  try {
    const data = await getNewsService();
    res.status(200).json({
      EC: 0,
      message: "get news success",
      data,
    });
  } catch (error) {
    console.log("error get news controller", error);
  }
};
const createNewsController = async (req, res) => {
  try {
    const result = await createNewsService(req.body);
    res.status(200).json({
      EC: 0,
      message: "create news sucess",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      EC: 1,
      messsage: JSON.stringify(error),
    });
  }
};
module.exports = {
  getNewsController,
  createNewsController,
};
