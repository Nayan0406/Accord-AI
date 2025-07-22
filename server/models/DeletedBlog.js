// models/DeletedBlog.js
import mongoose from "mongoose";

const deletedBlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  deletedAt: { type: Date, default: Date.now },
  reason: { type: String, default: "manual_delete" }
});

// Create index on title for faster lookups
deletedBlogSchema.index({ title: 1 });

const DeletedBlog = mongoose.model("DeletedBlog", deletedBlogSchema);

export default DeletedBlog;
