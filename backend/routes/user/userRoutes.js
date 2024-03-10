import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models/user/userModel.js";
import { authenticateToken } from "../../middlewares/authenticationMiddleware.js";
import {
  checkAdminRole,
  checkOrganizationRole,
  checkDonorRole,
} from "../../middlewares/roleMiddleware.js";

const userRouter = express.Router();

// Route for user signup
userRouter.post("/signup", async (req, res) => {
  try {
    // Extract user details from request body
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route for user login
userRouter.post("/login", async (req, res) => {
  try {
    // Extract login details from request body
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route for accessing dashboard (protected route)
userRouter.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Accessed dashboard successfully" });
});

userRouter.get("/dashboard/organization", checkOrganizationRole, (req, res) => {
  // Only users with organization role can access this page
  res.json({ message: "You have access to the organization page" });
});

userRouter.get("/dashboard/donor", checkDonorRole, (req, res) => {
  // Only users with donor role can access this page
  res.json({ message: "You have access to the donor page" });
});

export { userRouter, checkOrganizationRole, checkDonorRole };
