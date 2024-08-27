const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// add question to db
app.post("/create", (req, res) => {
  res.send("Hello World!");
});

// edit question and update db
app.put("/update", (req, res) => {
  res.send("Hello World!");
});

// delete question and update db
app.delete("/delete", (req, res) => {
  res.send("Hello World!");
});

// get question data (list details of specified question)
app.get("/get", (req, res) => {
  res.send("Hello World!");
});

// list all questions
app.get("/list", (req, res) => {
  res.send("Hello World!");
});

// pass choice to question (maybe add query param?)
// -> check if correct, wrong, or invalid choice (doesn't exist in choice)
app.get("/check-answer", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
