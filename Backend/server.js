import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 5001;

// app.use();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
