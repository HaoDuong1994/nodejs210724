const express = require("express");
const app = express();
const { configEJS } = require("./src/config/templateEngine");
require("dotenv").config();
//Config
configEJS(app);

//API

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});
