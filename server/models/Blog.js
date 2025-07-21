import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  source: { type: String, default: "manual" }, // manual or auto
  link: { type: String }, // for auto blogs
}, {
  timestamps: true,
});


export default mongoose.model("Blog", blogSchema);
