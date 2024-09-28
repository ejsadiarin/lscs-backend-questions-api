import { Router } from "express";
import {
    checkAnswer,
    createQuestion,
    deleteQuestion,
    getAllQuestions,
    getQuestionById,
    updateQuestion,
} from "../handlers/question-service.js";

const questionRouter = Router();

// test route only
questionRouter.get("/", (req, res) => {
    console.log("Connected");
    return res.status(200).send({ message: "Success" });
});

questionRouter.post("/create", createQuestion);

questionRouter.put("/update/:id", updateQuestion);

questionRouter.delete("/delete/:id", deleteQuestion);

questionRouter.get("/get/:id", getQuestionById);

questionRouter.get("/list", getAllQuestions);

questionRouter.get("/check-answer/:id", checkAnswer);

export default questionRouter;
