import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    
    console.log("Contact saved successfully:", contact);
    res.status(201).json({ message: "Contact message saved successfully", contact });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Error saving contact", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Error fetching contacts", error: error.message });
  }
});

export default router;
