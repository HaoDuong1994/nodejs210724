const mysql = require("mysql2/promise");
require("dotenv").config();
const database = async () => {
  const connection = await mysql.createConnection({
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
  });
  return connection;
};
module.exports = database;
