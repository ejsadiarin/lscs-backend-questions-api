import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import questionRouter from "./routes/index.js";
import initDBConnection from "./db/index.js";

// import mongoose from "mongoose";

const env = process.env.NODE_ENV || "development";

if (env === "production") {
    dotenv.config({ path: ".env.production" });
} else {
    dotenv.config({ path: ".env.development" });
}

const app = express();
const port = process.env.API_PORT; // 6969;

initDBConnection();

// #region middleware

app.use(express.json());
app.use(cors());
app.use("/", questionRouter);

// more appropriate if: app.use("/question/v1/", questionRouter);

// #endregion middleware

// app.listen(port, () => {
//     console.log(`Questions API listening on port ${port}`);
// });

// console.log("test");

//* *********** SOME GOOD ASYNC LEARNING ************//
// this also works bc:
// - initDBConnection is an async function which means its await body/contents goes into the microtask queue
// - the await mongoose.connect() is executed only AFTER the call stack (in this file) is EMPTY (no more lines to execute in this file)
//
import mongoose from "mongoose";
mongoose.connection.once("open", () => {
    // only start api server if successful connection to db
    app.listen(port, () => {
        console.log(`Questions API listening on port ${port}`);
    });
});

// doesn't work bc of async issue:
// - connection is already established BEFORE the listener event is created/established

/*

initDBConnection().then(() => {
    mongoose.connection.once("open", () => {
        console.log("Successfully connected to MongoDB.");
        // only start api server if successful connection to db
        app.listen(port, () => {
            console.log(`Questions API listening on port ${port}`);
        });
    });
});

*/
