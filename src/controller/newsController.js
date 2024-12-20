const {
  getNewsService,
  createNewsService,
  getNewsDetail,
} = require("../service/newsService");
const getNewsController = async (req, res) => {
  try {
    if (req.query && Object.keys(req.query).length > 0) {
      console.log(req.query);
      console.log(req.params);
      console.log("helloooo");
      console.log(111111111111111111111);
      const idNews = req.query.newsId;
      const data = await getNewsDetail(idNews);
      if (!data)
        res.status(400).json({
          EC: 1,
          message: "wrong data please try again",
        });
      res.status(200).json({
        EC: 0,
        message: "get news detail success",
        data,
      });
    } else {
      console.log(111);
      const data = await getNewsService();
      res.status(200).json({
        EC: 0,
        message: "get news success",
        data,
      });
    }
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
