import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./Config/db.config.js";
import userRouter from "./Routes/user-Routes.js";

connectToDb(); // Assuming this is your database connection function
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON
app.use("/auth", userRouter); // Setting up the user router with '/auth' prefix

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
