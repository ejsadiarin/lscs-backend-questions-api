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
    await db_pool.getConnection();
    console.log("Successfully connected to MYSQL DB!");
  } catch (error) {
    console.error("Cannot connect to MYSQL DB: ", error);
    throw error;
  }
};
