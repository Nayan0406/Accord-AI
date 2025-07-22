import express from 'express';
import multer from 'multer';
import Blog from '../models/Blog.js';
import DeletedBlog from '../models/DeletedBlog.js';
import axios from 'axios';
import { syncFlaskBlog } from '../utlis/syncFlaskBlog.js';

const router = express.Router();

// Set up multer for file upload with size limit
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// POST /api/blogs
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("📝 Creating new blog with data:", req.body);
    const { title, content, author, date } = req.body;

    if (!title || !content || !author) {
      console.log("❌ Missing required fields:", { title: !!title, content: !!content, author: !!author });
      return res.status(400).json({ message: "Title, content, and author are required" });
    }

    let imageData = null;
    if (req.file) {
      console.log("📷 Processing image upload:", req.file.originalname, "Size:", req.file.size, "bytes");
      
      // Check if file size is reasonable for base64 conversion
      if (req.file.size > 3 * 1024 * 1024) { // 3MB limit for base64
        return res.status(400).json({ 
          message: "Image file too large. Please use an image smaller than 3MB." 
        });
      }
      
      const mimeType = req.file.mimetype || 'image/jpeg';
      imageData = `data:${mimeType};base64,${req.file.buffer.toString("base64")}`;
      
      console.log("✅ Image processed successfully, base64 length:", imageData.length);
    }

    const blog = new Blog({
      title,
      content,
      author,
      date: date || new Date(),
      image: imageData,
      source: "manual"
    });

    const savedBlog = await blog.save();
    console.log("✅ Blog created successfully:", savedBlog.title);

    res.status(201).json({ message: "Blog created successfully", blog: savedBlog });
  } catch (err) {
    console.error("❌ Error creating blog:", err);
    res.status(500).json({ 
      message: "Server error creating blog", 
      error: err.message,
      details: err.toString()
    });
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

    // Add to deleted blogs list to prevent re-sync
    await DeletedBlog.create({
      title: blog.title,
      reason: "manual_delete"
    });

    console.log(`🗑️ Blog deleted and blacklisted: ${blog.title}`);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ message: "Error deleting blog" });
  }
});

export default router;
