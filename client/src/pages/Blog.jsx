import React, { useState, useEffect } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Fetching blogs from API...");
        // Use the proxy path - Vite will redirect to http://localhost:5000/api/blogs
        const response = await fetch('/api/blogs');
        
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        
        // Check if response is ok and content-type is JSON
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Server returned non-JSON response. Please check if the server is running on port 5000.');
        }
        
        const data = await response.json();
        console.log("Fetched blogs data:", data);
        console.log("Number of blogs:", data.blogs?.length || 0);
        
        setBlogs(data.blogs || []);
        setFilteredBlogs(data.blogs || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs);
    }
  }, [searchTerm, blogs]);

  // Format date
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Truncate content for preview
  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Connection Error</h2>
          <p className="text-red-600 text-lg mb-4">Error: {error}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-yellow-800">
              <strong>Make sure:</strong>
              <br />• The server is running on port 5000
              <br />• MongoDB is connected
              <br />• CORS is configured properly
            </p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition mr-2"
          >
            Retry
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover insights, stories, and knowledge from the world of AI, consciousness, and technology.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'blog' : 'blogs'} found
          </div>
        </div>

        {/* No blogs message */}
        {filteredBlogs.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchTerm ? 'No blogs found' : 'No blogs available'}
            </h3>
            <p className="text-gray-500">
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'Blogs will appear here once they are added from the admin panel.'
              }
            </p>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              {/* Blog Image */}
              {blog.image && (
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-xs" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-xs" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Content Preview */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {truncateContent(blog.content)}
                </p>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition-colors">
                  Read More
                  <GoArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button (if needed for pagination) */}
        {filteredBlogs.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;