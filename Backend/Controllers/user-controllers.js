import userModel from "../Model/user-Model.js"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// ===================== Login ===========================
const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    if (!userEmail || !userPassword) {
      return res
        .status(400)
        .json({ status: "Error", message: "Please provide all the fields" });
    }

    const userAvailable = await userModel.findOne({ userEmail });

    if (!userAvailable) {
      return res.status(400).json({
        status: "Error",
        message: "User not found with this email",
      });
    }

    const isMatch = await bcrypt.compare(userPassword, userAvailable.userPassword);
    if (isMatch) {
      const accessToken = jwt.sign(
        {
          user: {
            id: userAvailable._id,
            name: userAvailable.userName,
            email: userAvailable.userEmail,
            role: userAvailable.userRole, 
          },
        },
        process.env.SECRET_KEY,
        { expiresIn: "10m" }
      );

      return res.status(200).json({
        status: "Success",
        message: "User Logged In Successfully",
        accessToken, 
      });
    } else {
      return res.status(400).json({
        status: "Error",
        message: "Invalid Credentials",
      });
    }
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

// ===================== Register ===========================
const register = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;

    if (!userName || !userEmail || !userPassword) {
      return res
        .status(400)
        .json({ status: "Error", message: "Please provide all the fields" });
    }

    const userAvailable = await userModel.findOne({ userEmail });

    if (userAvailable) {
      return res.status(400).json({
        status: "Error",
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10); 

    const user = await userModel.create({
      userName,
      userEmail,
      userPassword: hashedPassword, 
    });

    return res.status(201).json({ status: "Success", message: "User Registered Successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

export { login, register };
