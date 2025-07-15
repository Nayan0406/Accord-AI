import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js"; 

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "supersecret";

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, email, password: hash });
    await newAdmin.save();
    res.status(201).json({ message: "Admin registered" });
  } catch (err) {
    res.status(500).json({ message: "Error registering", error: err.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, SECRET, { expiresIn: "1h" });
    res.json({ token, admin: { username: admin.username, email: admin.email } });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

export default router;
