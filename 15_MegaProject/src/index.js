import app from "./app";
import connectDB from "./db/dbConnect";

import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDb connection error", err);
    process.exit(1);
  });
