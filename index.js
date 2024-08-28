import express from "express";
import { questionRouter } from "./routes/index.js";
import { initDBConnection } from "./db/index.js";
import mongoose from "mongoose";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.API_PORT; // 6969;

initDBConnection();

//#region middleware

app.use(express.json());
app.use("/", questionRouter);
// more appropriate if: app.use("/question/v1/", questionRouter);

//#endregion middleware

mongoose.connection.once("open", () => {
  console.log("Successfully connected to MongoDB.");
  // only start api server if successful connection to db
  app.listen(port, () => {
    console.log(`Questions API listening on port ${port}`);
  });
});
