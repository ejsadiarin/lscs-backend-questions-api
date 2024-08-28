import { Question } from "../db/schema.js";

export const createQuestion = async (req, res) => {
  const { question, choices, answer } = req.body;

  if (!question || !choices || !answer)
    return res.status(403).json({ message: "No input parameters provided." });

  try {
    const data = await Question.create({
      question: question,
      choices: choices,
      answer: answer,
    });
    await data.save();
    console.log(data);
    return res.status(201).json({ data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error occured when creating new question." });
  }
};

export const updateQuestion = async (req, res) => {
  const { _id } = req.params;
  try {
    const question = await Question.findById(_id);
    const data = await Question.updateOne();
    console.log(data);
    return res.status(200).json({ newData: data }); // better if maybe .send(...)?
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error occured when checking answer." });
  }
};

export const deleteQuestion = async (req, res) => {
  const { _id } = req.params;
  try {
    await Question.deleteOne(_id);
    return res.status(200).send("Question deleted successfully.");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting question." });
  }
};

export const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await questions_getQuestionById(id);
    if (data.length > 0) {
      const qs = data[0];
      qs.choices = JSON.parse(qs.choices);
      return res.status(200).json({ data });
    }
    return res.status(404).json({ message: "Question not found." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error occured when creating question." });
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const data = await Question.find();
    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error occured when getting all questions." });
  }
};

export const checkAnswer = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error occured when checking answer." });
  }
};
