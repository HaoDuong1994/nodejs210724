const express = require("express");
const app = express();
require("dotenv").config();
var cookieParser = require("cookie-parser");
const cors = require("cors");
const { configEJS } = require("./src/config/templateEngine");
const customerRouter = require("./src/router/customerRouter");
const configBodyParser = require("./src/config/bodyParser");
const productRouter = require("./src/router/productRouter");
const orderRouter = require("./src/router/orderRouter");
const orderDetailsRouter = require("./src/router/orderDetailsRouter");
const newsRouter = require("./src/router/newsRouter");
//Config body parser
configBodyParser(app);

//Config cors
app.use(cors());
//Config
configEJS(app, express);
//Config cookie parsers
app.use(cookieParser());
//App listening
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});

////////////////////API//////////////////////////

//Customer API
app.use("/customer", customerRouter);

//Product API
app.use("/product", productRouter);

//Order API
app.use("/orders", orderRouter);

//Order Details API
app.use("/orderDetails", orderDetailsRouter);

//News API
app.use("/news", newsRouter);
