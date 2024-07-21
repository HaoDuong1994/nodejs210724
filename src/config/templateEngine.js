const configEJS = (app) => {
  app.set("views", '../view"');
  app.set("view engine", "pug");
};

module.exports = {
  configEJS,
};
