import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String, 
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
}, {
  timestamps: true // This will add createdAt and updatedAt fields
});

export default mongoose.model("Blog", blogSchema);
