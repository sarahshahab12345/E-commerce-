import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.CONNECTION_STRING;

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(connectionString);

    console.log(`Connected to database: ${connection.connection.name} on host: ${connection.connection.host}`);
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

export default connectToDb;
