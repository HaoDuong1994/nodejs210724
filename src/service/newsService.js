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
    if (results.serverStatus == 2) return body;
  } catch (error) {
    console.log("error create news", error);
  }
};
const getNewsDetail = async (idNews) => {
  try {
    const connection = await database();
    const [results] = await connection.query(`
        SELECT * FROM news WHERE newsId = ${idNews}
      `);
    if (results) return results[0];
  } catch (error) {
    console.log("error get news detail service", error);
  }
};
module.exports = {
  getNewsService,
  createNewsService,
  getNewsDetail,
};
