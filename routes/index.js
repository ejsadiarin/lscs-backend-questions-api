import { Router } from "express";
import { Question } from "../db/schema.js";
import {
  createQuestion,
  getQuestionById,
  getAllQuestions,
  updateQuestion,
  deleteQuestion,
  checkAnswer,
} from "../handlers/index.js";

export const questionRouter = Router();

// add question to db
questionRouter.post("/create", async (req, res) => {
  try {
    const { question, choices, answer } = req.body;
    if (choices.length < 2) {
      return res
        .status(400)
        .json({ message: "At least two choices are required" });
    }
    const newQuestion = new Question({ question, choices, answer });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// edit question and update db
questionRouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete question and update db
questionRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json({ message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get question data (list details of specified question)
questionRouter.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// list all questions
questionRouter.get("/list", async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// pass choice to question (maybe add query param?)
// -> check if correct, wrong, or invalid choice (doesn't exist in choice)
// -> return 200 if correct and wrong, 404 invalid
questionRouter.get("/check-answer", async (req, res) => {
  try {
    const { id } = req.params;
    const { choice } = req.body;
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    if (!question.choices.includes(choice)) {
      return res.status(400).json({ message: "Invalid choice" });
    }
    const isCorrect = choice === question.correctAnswer;
    res.status(200).json({ correct: isCorrect });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
