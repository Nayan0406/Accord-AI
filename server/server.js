import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import Blog from "./models/Blog.js";
import { storage } from "./utlis/cloudinary.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/auth.js";
import { syncFlaskBlog } from "./utlis/syncFlaskBlog.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const app = express();


const corsOptions = {
  origin: ["https://accord-ai-ten.vercel.app/","http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.json());

// Static uploads
app.use('/uploads', express.static('uploads'));

// Routes

app.use("/api/contacts", contactRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/blogs", blogRoutes);



const upload = multer({ storage });

// BLOG Routes
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    console.log("Creating new blog...");
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);
    
    const { title, content, author } = req.body;
    const imageUrl = req.file?.path;

    const newBlog = new Blog({
      title,
      content,
      author,
      image: imageUrl,
    });

    console.log("Saving blog to database...");
    await newBlog.save();
    console.log("Blog saved successfully:", newBlog);
    
    res.status(201).json({ message: "Blog created successfully!", blog: newBlog });
  } catch (error) {
    console.error("Error uploading blog:", error);
    res.status(500).json({ message: "Failed to create blog." });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    console.log("Fetching all blogs...");
    const blogs = await Blog.find().sort({ date: -1 });
    console.log("Found blogs:", blogs.length);
    res.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ blog });
  } catch (err) {
    res.status(500).json({ message: "Error fetching blog" });
  }
});

app.put("/api/blogs/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const updateData = { title, content };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog" });
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    await syncFlaskBlog(); // ✅ Now this works

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });

    // Auto-sync every 24 hours to check for new blogs
    setInterval(() => {
      console.log("🕒 Daily auto-checking for new blogs from Flask...");
      syncFlaskBlog();
    }, 1000 * 60 * 60 * 24); // 24 hours

    console.log("🔄 Auto-sync scheduled every 24 hours");

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
})();

