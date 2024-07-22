const mysql = require("mysql2/promise");
const database = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "db2",
    password: "123456",
  });
  return connection;
};
module.exports = database;
