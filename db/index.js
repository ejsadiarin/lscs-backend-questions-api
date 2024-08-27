// init connections to mysql db
import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const db_pool = createPool({
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
});

export const initDBConnection = async () => {
  try {
    const db = await db_pool.getConnection();
    //const QUERY = `CREATE TABLE IF NOT EXISTS questions_table (
    //    id INT AUTO_INCREMENT PRIMARY KEY,
    //    question TEXT NOT NULL,
    //    choices JSON NOT NULL,
    //    answer TEXT NOT NULL,
    //)`;
    //await db.query(QUERY);
    console.log("Successfully connected to MYSQL DB!");
  } catch (error) {
    console.error("Error occured.", error);
    throw error;
  }
};
