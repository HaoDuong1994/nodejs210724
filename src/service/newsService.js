const database = require("../config/mysqlConnection");
const getNewsService = async () => {
  try {
    const connection = await database();
    const [results] = await connection.query(`SELECT * FROM news`);
    return results;
  } catch (error) {
    console.log("error get news service", error);
  }
};
const createNewsService = async (body) => {
  try {
    console.log(body);
    const { title, descriptionNews, content, titleImg } = body;
    const connection = await database();
    const [results] = await connection.query(`
      INSERT INTO news (title, descriptionNews, content, titleImg) VALUES (
        '${title}',
        '${descriptionNews}', 
        '${content}', 
        '${titleImg}'
      )
      `);
    console.log(">>>>>>>>>>>>>>", results);
    if (results.serverStatus == 2) return body;
  } catch (error) {
    console.log("error create news", error);
  }
};
module.exports = {
  getNewsService,
  createNewsService,
};
