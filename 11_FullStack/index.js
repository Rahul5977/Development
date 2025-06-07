import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Cohort");
});

app.get("/hitesh", (req, res) => {
  res.send("hitesh");
});

db();

//user Routes
app.use("/api/v1/users",userRoutes)

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
