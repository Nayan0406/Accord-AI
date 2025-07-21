import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs!");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate image size before upload
    if (image && image.size > 3 * 1024 * 1024) { // 3MB limit
      toast.error("Image file too large. Please use an image smaller than 3MB.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    formData.append("date", date || new Date().toISOString());
    if (image) formData.append("image", image);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/blogs/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog updated successfully!");
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/api/blogs", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog added successfully!");
      }

      setTitle("");
      setContent("");
      setImage(null);
      setAuthor("");
      setDate("");
      fetchBlogs();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setTitle(blog.title);
    setContent(blog.content);
    setAuthor(blog.author || "");
    setDate(blog.date ? blog.date.slice(0, 10) : "");
    setImage(null);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${id}`);
        toast.success("Blog deleted successfully!");
        fetchBlogs();
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete blog.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Add Blogs</h1>

        {/* Blog Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              className="p-3 rounded bg-gray-700 text-white w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Author Name"
              className="p-3 rounded bg-gray-700 text-white w-full"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <textarea
            placeholder="Content"
            rows="5"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              className="p-3 rounded bg-gray-700 text-white w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium mb-1">Image (Max 3MB)</label>
              <input
                type="file"
                accept="image/*"
                className="w-full text-white bg-gray-700 file:bg-blue-600 file:text-white file:rounded file:px-4 file:py-2 file:border-none cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.size > 3 * 1024 * 1024) {
                    toast.error("Image file too large. Please select an image smaller than 3MB.");
                    e.target.value = '';
                    return;
                  }
                  setImage(file);
                }}
              />
              {image && (
                <p className="text-xs text-gray-400 mt-1">
                  Selected: {image.name} ({(image.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded cursor-pointer"
          >
            {editingId ? "Update Blog" : "Add Blog"}
          </button>
        </form>

        {/* Blog List */}
        <h2 className="text-2xl mt-14 mb-6 font-semibold text-center sm:text-left">Blog List</h2>

        <div className="flex flex-col items-center gap-8">
          {blogs.map((blog, index) => {
            const maxWidthClasses = [
              "w-full",       
              "w-full",
              "w-full",
              "w-full",
              "w-full",
              "w-full",      
            ];
            const widthClass = maxWidthClasses[Math.min(index, maxWidthClasses.length - 1)];

            return (
              <div
                key={blog._id}
                className={`bg-gray-800 p-5 rounded shadow-md ${widthClass} mx-auto transition-all duration-300`}
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-64 object-cover rounded mb-4"
                  />
                )}
                <h3 className="text-2xl font-bold text-purple-300 mb-2">{blog.title}</h3>
                <p className="text-base text-gray-200 mb-4">{blog.content}</p>
                <div className="text-sm text-gray-400 mb-4">
                  <p>
                    Author: <span className="text-white font-medium">{blog.author}</span>
                  </p>
                  <p>
                    Date:{" "}
                    <span className="text-white">
                      {new Date(blog.date).toLocaleDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>


      </div>
      <ToastContainer />
    </div>
  );
};

export default AddBlog;
