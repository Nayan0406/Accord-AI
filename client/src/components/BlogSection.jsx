import React, { useState, useEffect } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;
    const navigate = useNavigate();



    useEffect(() => {
        fetch("https://accord-ai-backend-murex.vercel.app/api/blogs")
            .then((res) => res.json())
            .then((data) => {
                console.log("Blogs fetched:", data.blogs);
                setBlogs(data.blogs);
                setLoading(false); 
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch blogs");
                setLoading(false); 
            });
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(undefined, {
            year: 'numeric', month: 'long', day: 'numeric',
        });
    };

    const truncateContent = (content, maxLength = 150) => {
        if (!content || typeof content !== "string") return "";
        return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
    };

    // Pagination logic
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = blogs.slice(startIndex, endIndex);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
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
            {/* Blog Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10">
                {/* Blog Cards */}
                {blogs.length === 0 ? (
                    <div className="text-center py-16 sm:py-24 md:py-32">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <span className="text-gray-400 text-2xl sm:text-3xl">📝</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                            No blogs available yet
                        </h3>
                        <p className="text-sm sm:text-base text-gray-500">
                            Check back soon for new content
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pb-12 sm:pb-16 md:pb-20">
                            {currentBlogs.map(blog => (
                            <div
                                key={blog._id}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-2 border border-white/20"
                                onClick={() => navigate(`/blogs/${blog._id}`)}
                            >
                                {/* Image */}
                                {blog.image && (
                                    <div className="h-48 sm:h-52 md:h-56 w-full bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 gap-2 sm:gap-4">
                                        <span className="flex items-center gap-2 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                                            <FaUser className="text-blue-500" />
                                            <span className="font-medium">{blog.author}</span>
                                        </span>
                                        <span className="flex items-center gap-2 bg-purple-50 px-2 sm:px-3 py-1 rounded-full">
                                            <FaCalendarAlt className="text-purple-500" />
                                            <span className="font-medium">{formatDate(blog.date)}</span>
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 flex-grow leading-relaxed">
                                        {truncateContent(blog.content)}
                                    </p>
                                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-auto group-hover:gap-2 transition-all cursor-pointer text-sm sm:text-base">
                                        Read More
                                        <GoArrowUpRight className="ml-1 group-hover:ml-2 transition-all transform group-hover:scale-110" />
                                    </button>
                                </div>
                            </div>
                        ))}
                        </div>
                        
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 pb-12">
                                <button
                                    onClick={goToPrevPage}
                                    disabled={currentPage === 1}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                                        currentPage === 1
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer'
                                    }`}
                                >
                                    ← Previous
                                </button>
                                
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-600 font-medium">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                </div>
                                
                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                                        currentPage === totalPages
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer'
                                    }`}
                                >
                                    Next →
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogSection;
