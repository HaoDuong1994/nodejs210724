const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { configEJS } = require("./src/config/templateEngine");
const customerRouter = require("./src/router/customerRouter");
const configBodyParser = require("./src/config/bodyParser");
const productRouter = require("./src/router/productRouter");
//Config body parser
configBodyParser(app);

//Config cors
app.use(cors());
//Config
configEJS(app, express);

//App listening
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});

////////////////////API//////////////////////////

//Customer API
app.use("/customer", customerRouter);

//Product API
app.use("/product", productRouter);
