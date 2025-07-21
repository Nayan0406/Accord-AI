import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import Blog from './models/Blog.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Simple blog creation route
app.post('/api/blogs', upload.single('image'), async (req, res) => {
  try {
    console.log('📝 Blog creation request received');
    console.log('Body:', req.body);
    console.log('File:', req.file ? 'File present' : 'No file');

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
    console.log('✅ Blog saved successfully');

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (err) {
    console.error('❌ Error creating blog:', err);
    res.status(500).json({ message: "Server error creating blog", error: err.message });
  }
});

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ blogs });
  } catch (err) {
    console.error('❌ Error fetching blogs:', err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

// Delete blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error('❌ Error deleting blog:', err);
    res.status(500).json({ message: "Error deleting blog" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
