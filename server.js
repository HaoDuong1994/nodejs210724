const express = require("express");
const app = express();
require("dotenv").config();
const { configEJS } = require("./src/config/templateEngine");
const customerRouter = require("./src/router/customerRouter");
const configBodyParser = require("./src/config/bodyParser");

//Config body parser
configBodyParser(app);

//Config
configEJS(app, express);

//App listening
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});

////////////////////API//////////////////////////

//Customer API
app.use("/customer", customerRouter);
