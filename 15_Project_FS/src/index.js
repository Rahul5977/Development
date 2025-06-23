import app from "./app.js";
import connectDB from "./db/dbConnect.js";

import dotenv from "dotenv";
console.log("Server file is running ..");

dotenv.config({
  path: "./.env"
});
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running ${PORT}`);
    });
  })
  .catch(err => {
    console.error(`MongoDb connection error`, err);
    process.exit(1);
  });
