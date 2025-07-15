const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); 
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});


module.exports = router;
