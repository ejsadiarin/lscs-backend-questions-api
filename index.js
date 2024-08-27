import express, { json } from "express";
import { questionRouter } from "./routes/index.js";
import { initDBConnection } from "./db/index.js";

const app = express();
const port = process.env.PORT || 6969;

//#region middleware

app.use(express.json());

app.use("/", questionRouter);
// more appropriate if: app.use("/question/v1/", questionRouter);

//#endregion middleware

initDBConnection()
  .then(() => {
    // only start api server if successful connection to db
    app.listen(port, () => {
      console.log(`Questions API listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Cannot connect to MYSQL DB: ", error);
    process.exit(0);
  });
