import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  choices: [String],
  answer: String,
});

export const Question = mongoose.model("Question", questionSchema);
