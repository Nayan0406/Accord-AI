import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://accord-ai-backend-murex.vercel.app/api/blogs/${id}`);
        setBlog(res.data.blog);

        const all = await axios.get("https://accord-ai-backend-murex.vercel.app/api/blogs");
        const others = all.data.blogs.filter((b) => b._id !== id);
        setOtherBlogs(others);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (loading || !blog) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white pt-24">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-50 min-h-screen pt-24 px-4 sm:px-6 lg:px-12">
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
          scroll-behavior: smooth;  /* Smooth scrolling */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
        .smooth-scroll {
          scroll-behavior: smooth;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch; /* iOS smooth scrolling */
        }
      `}</style>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Sidebar: Other Blogs */}
        <aside className="order-last lg:order-first sticky top-28 self-start">
          <h2 className="text-xl font-bold text-gray-800 mb-6">More Blogs</h2>
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto space-y-6 pr-2 hide-scrollbar smooth-scroll">
            {otherBlogs.map((b) => (
            <div
              key={b._id}
              onClick={() => navigate(`/blogs/${b._id}`)}
              className="cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm overflow-hidden transition"
            >
              {b.image && (
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-36 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {b.content}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {formatDate(b.date)} by {b.author || "Admin"}
                </p>
              </div>
            </div>
            ))}
          </div>
        </aside>

        {/* Blog Details */}
        <article className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {blog.title}
            </h1>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-md transition"
            >
              ← Back to Blogs
            </button>
          </div>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-[400px] object-cover rounded-lg mb-6"
            />
          )}

          <p className="text-sm text-gray-500 mb-4">
            By <span className="font-semibold">{blog.author || "Admin"}</span> •{" "}
            {formatDate(blog.date)}
          </p>

          <div className="text-gray-800 whitespace-pre-line leading-relaxed text-justify">
            {blog.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
