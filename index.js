require("dotenv").config();
import express from "express";
import { questionRouter } from "./routes/index.js";
import { initDBConnection } from "./db/index.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.API_PORT || 6969;

//#region middleware

app.use(express.json());
app.use("/", questionRouter);
// more appropriate if: app.use("/question/v1/", questionRouter);

//#endregion middleware

initDBConnection();

mongoose.connection.once("open", () => {
  console.log("Successfully connected to MongoDB.");
  // only start api server if successful connection to db
  app.listen(port, () => {
    console.log(`Questions API listening on port ${port}`);
  });
});

app.get("/", (req, res) => {
  console.log("Connected");
  return res.status(200).send({ message: "Success" });
});
