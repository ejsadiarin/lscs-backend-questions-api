import { Schema, model } from "mongoose";

const questionSchema = new Schema({
    question: { type: String, required: true, unique: true },
    choices: [{ type: String, required: true }],
    answer: { type: String, required: true },
});

export default model("Question", questionSchema);
