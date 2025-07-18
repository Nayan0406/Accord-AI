import React, { useState, useEffect } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogs');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const contentType = response.headers.get('content-type');
                if (!contentType?.includes('application/json')) {
                    throw new Error('Invalid JSON response from server');
                }

                const data = await response.json();
                setBlogs(data.blogs || []);
                setFilteredBlogs(data.blogs || []);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

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

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(undefined, {
            year: 'numeric', month: 'long', day: 'numeric',
        });
    };

    const truncateContent = (content, maxLength = 150) => {
        if (!content || typeof content !== "string") return "";
        return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
    };


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
                <div className="text-center">
                    <div className="relative mb-8">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                        <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-blue-200 mx-auto animate-pulse"></div>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading Amazing Content</h2>
                    <p className="text-gray-600">Please wait while we fetch the latest blogs...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-24 px-4">
                <div className="text-center max-w-md">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-red-500 text-4xl">⚠️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Oops! Something went wrong</h2>
                    <p className="text-red-600 mb-6 bg-red-50 p-3 rounded-lg border border-red-200">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-blue-400 to-blue-50 min-h-screen pt-24">
            {/* Header */}
            <section className="text-center px-4 sm:px-6 lg:px-8 mb-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Explore Our Blog
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Insights, updates, and stories from the Accord AI world. Discover the future of AI with soul.
                    </p>
                </div>
            </section>

            {/* Search */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
                    <div className="relative w-full sm:max-w-lg">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm text-lg"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-sm text-gray-600 font-medium">
                            {filteredBlogs.length} result{filteredBlogs.length !== 1 && 's'}
                        </p>
                    </div>
                </div>

                {/* Blog Cards */}
                {filteredBlogs.length === 0 ? (
                    <div className="text-center py-32">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaSearch className="text-gray-400 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            {searchTerm ? 'No blogs found' : 'No blogs available yet'}
                        </h3>
                        <p className="text-gray-500">
                            {searchTerm ? 'Try adjusting your search terms' : 'Check back soon for new content'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                        {filteredBlogs.map(blog => (
                            <div
                                key={blog._id}
                                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-2 border border-white/20"
                                onClick={() => navigate(`/blogs/${blog._id}`)}
                            >
                                {/* Image */}
                                {blog.image && (
                                    <div className="h-56 w-full bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                                        <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                                            <FaUser className="text-blue-500" />
                                            <span className="font-medium">{blog.author}</span>
                                        </span>
                                        <span className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                                            <FaCalendarAlt className="text-purple-500" />
                                            <span className="font-medium">{formatDate(blog.date)}</span>
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                        {truncateContent(blog.content)}
                                    </p>
                                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-auto group-hover:gap-2 transition-all cursor-pointer">
                                        Read More
                                        <GoArrowUpRight className="ml-1 group-hover:ml-2 transition-all transform group-hover:scale-110" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogSection;
