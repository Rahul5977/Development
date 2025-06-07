import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

console.log(process.env);

app.get("/", (req, res) => {
  res.send("Cohort");
});

app.get("/hitesh", (req, res) => {
  res.send("hitesh");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
