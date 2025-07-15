import express from 'express';
import multer from 'multer';
import Blog from '../models/Blog.js';

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

    const imageBuffer = req.file ? req.file.buffer : null;

    const blog = new Blog({
      title,
      content,
      author,
      date: date || new Date(),
      image: imageBuffer ? `data:image/jpeg;base64,${imageBuffer.toString("base64")}` : null,
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
    const blogs = await Blog.find().sort({ date: -1 });
    res.json({ blogs });
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


export default router;
