import express from 'express';
import multer from 'multer';
import Blog from '../models/Blog.js';
import axios from 'axios';
import { syncFlaskBlog } from '../utlis/syncFlaskBlog.js';

const router = express.Router();

// Set up multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/blogs
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content, author, date } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ message: "Title, content, and author are required" });
    }

    let imageData = null;
    if (req.file) {
      const mimeType = req.file.mimetype || 'image/jpeg';
      imageData = `data:${mimeType};base64,${req.file.buffer.toString("base64")}`;
    }

    const blog = new Blog({
      title,
      content,
      author,
      date: date || new Date(),
      image: imageData,
    });

    await blog.save();

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ message: "Server error creating blog" });
  }
});

// GET /api/blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ blogs }); // ✅ Wrap in object
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ blog });
  } catch (err) {
    res.status(500).json({ message: "Error fetching blog" });
  }
});

// PUT /api/blogs/:id
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content, author, date } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ message: "Title, content, and author are required" });
    }

    const updateData = {
      title,
      content,
      author,
      date: date || new Date(),
    };

    // Handle image update if provided
    if (req.file) {
      const mimeType = req.file.mimetype || 'image/jpeg';
      updateData.image = `data:${mimeType};base64,${req.file.buffer.toString("base64")}`;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog updated successfully", blog });
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ message: "Error updating blog" });
  }
});

router.get("/sync", async (req, res) => {
  await syncFlaskBlog();
  res.json({ message: "Synced blogs from Flask" });
});

// DELETE /api/blogs/:id
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ message: "Error deleting blog" });
  }
});

export default router;
