import { db_pool } from "./index.js";

export const questions_getAllQuestions = async () => {
  const QUERY = "SELECT * FROM questions_table";
  try {
    const db = await db_pool.getConnection();
    const res = db.query(QUERY);
    return res;
  } catch (error) {
    console.error(
      "Query error occured when getting all questions in database: ",
      error,
    );
    throw error;
  }
};

export const questions_getQuestionById = async (id) => {
  const QUERY = "SELECT * FROM questions_table WHERE id = ?";
  try {
    const db = await db_pool.getConnection();
    const res = db.query(QUERY, [id]);
    return res;
  } catch (error) {
    console.error(
      "Query error occured when getting a question in database: ",
      error,
    );
    throw error;
  }
};

export const questions_create = async (question, choices, answer) => {
  const QUERY = `INSERT INTO questions_table (question, choices, answer) VALUES (?, ?, ?)`;
  try {
    const db = await db_pool.getConnection();
    const res = db.query(QUERY, [question, choices, answer]);
    return res;
  } catch (error) {
    console.error(
      "Query error occured when creating new question record in database: ",
      error,
    );
    throw error;
  }
};
