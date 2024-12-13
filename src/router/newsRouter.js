const express = require("express");
const {
  getNewsController,
  createNewsController,
} = require("../controller/newsController");
const newsRouter = express.Router();
newsRouter.get("/", getNewsController);
newsRouter.post("/create-news", createNewsController);
module.exports = newsRouter;
