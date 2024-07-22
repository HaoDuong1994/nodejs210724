const express = require("express");
const app = express();
require("dotenv").config();
const { configEJS } = require("./src/config/templateEngine");
//Config
configEJS(app, express);

const database = require("./src/config/mysqlConnection");

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});

app.get("/", async (req, res) => {
  const connection = await database();
  const [results, fields] = await connection.query("SELECT * FROM customers");
  res.json({
    data: results,
  });
});
