const path = require("path");
const link = path.join(__dirname, "../view");
const configEJS = (app, express) => {
  //config viewEngine

  app.set("views", link);
  app.set("view engine", "pug");

  //config Statis file IMG
  app.use(express.static(path.join(__dirname, "../public/img")));
};
module.exports = {
  configEJS,
};
