// init connections to mysql db
import { createPool } from "mysql2/promise";
import { configDotenv } from "dotenv";

configDotenv();

export const db_pool = createPool({
  name: process.env.MYSQL_DB_NAME,
  password: process.env.MYSQL_DB_PASSWORD,
  host: process.env.MYSQL_DB_HOST,
  user: process.env.MYSQL_DB_USER,
  port: process.env.MYSQL_DB_PORT,
});

export const initDBConnection = async () => {
  try {
    const db = await db_pool.getConnection();
    const QUERY = `CREATE TABLE IF NOT EXISTS questions_table (
        id INT AUTO_INCREMENT PRIMARY KEY,
        question TEXT NOT NULL,
        choices JSON NOT NULL,
        answer TEXT NOT NULL,
    )`;
    await db.query(QUERY);
    console.log("Successfully connected to MYSQL DB!");
  } catch (error) {
    console.error("Error occured.", error);
    throw error;
  }
};
