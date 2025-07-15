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
                const response = await fetch('https://accord-ai-backend-murex.vercel.app/api/blogs');
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

    const truncateContent = (content, maxLength = 160) => {
        return content.length <= maxLength ? content : content.substring(0, maxLength) + '...';
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white pt-24">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                    <p className="text-gray-700 text-lg">Loading blogs...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white pt-24 px-4">
                <div className="text-center max-w-md">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button onClick={() => window.location.reload()} className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-300 min-h-screen pt-24">
            {/* Header */}
            <section className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Explore Our Blog</h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                    Insights, updates, and stories from the Accord AI world.
                </p>
            </section>

            {/* Search */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    <div className="relative w-full sm:max-w-md">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                        {filteredBlogs.length} result{filteredBlogs.length !== 1 && 's'}
                    </p>
                </div>

                {/* Blog Cards */}
                {filteredBlogs.length === 0 ? (
                    <div className="text-center py-24 text-gray-500 text-lg">
                        {searchTerm ? 'No blogs found for your search.' : 'No blogs available yet.'}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                        {filteredBlogs.map(blog => (
                            <div
                                key={blog._id}
                                className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col cursor-pointer"
                                onClick={() => navigate(`/blogs/${blog._id}`)} // ✅ Add here
                            >
                                {/* Image */}
                                {blog.image && (
                                    <div className="h-48 w-full bg-gray-100">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-center text-sm text-gray-500 mb-2 gap-4">
                                        <span className="flex items-center gap-1"><FaUser /> {blog.author}</span>
                                        <span className="flex items-center gap-1"><FaCalendarAlt /> {formatDate(blog.date)}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{truncateContent(blog.content)}</p>
                                    <button className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 mt-auto">
                                        Read More <GoArrowUpRight className="ml-1" />
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
