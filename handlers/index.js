import {
  questions_create,
  questions_getAllQuestions,
  questions_getQuestionById,
  questions_update,
} from "../db/query.js";

export const createQuestion = async (req, res) => {
  const { question, choices, answer } = req.body;

  if (!question || !choices || !answer)
    return res.status(403).json({ message: "No input parameters provided." });

  try {
    const data = await questions_create(question, choices, answer);
    return res.status(201).json({ data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error occured when creating new question." });
  }
};

export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await questions_update(id);
    return res.status(200).json({ data }); // better if maybe .send(...)?
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occured when checking answer." });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteQuestion(id);
    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occured when checking answer." });
  }
};

export const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await questions_getQuestionById(id);
    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occured when creating question." });
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const data = await questions_getAllQuestions();
    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error occured when getting all questions." });
  }
};

export const checkAnswer = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occured when checking answer." });
  }
};
