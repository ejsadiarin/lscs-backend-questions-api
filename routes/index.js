import { Router } from "express";
import {
  createQuestion,
  getQuestion,
  getAllQuestion,
  updateQuestion,
  deleteQuestion,
  checkAnswer,
} from "../handlers/index.js";

export const questionRouter = Router();

// add question to db
questionRouter.post("/create", createQuestion);

// edit question and update db
questionRouter.put("/update/:id", updateQuestion);

// delete question and update db
questionRouter.delete("/delete/:id", deleteQuestion);

// get question data (list details of specified question)
questionRouter.get("/:id", getQuestion);

// list all questions
questionRouter.get("/list", getAllQuestion);

// pass choice to question (maybe add query param?)
// -> check if correct, wrong, or invalid choice (doesn't exist in choice)
// -> return 200 if correct and wrong, 404 invalid
questionRouter.get("/check-answer", checkAnswer);
