import mysql from "mysql";
import DB from "../configs/db.js";

const connection = mysql.createConnection({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASSWORD,
  database: DB.DBNAME,
});

connection.connect((e) => {
  if (e) throw e;
  console.log("Connected to mysql server.");
});

export default connection;
