import React, { useState, useEffect } from "react";
// Removed react-icons imports as they were causing compilation errors
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom"; // Make sure react-router-dom is installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Function to check if the current path matches the link path
  const isActive = (path) => {
    // For the home page, check exact match
    if (path === "/" && location.pathname === "/") return true;
    // For other pages, check if the path starts with the link path
    // This handles nested routes like /module/details
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Effect to handle scroll event for changing navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Navbar changes background after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 px-4 sm:px-6 md:px-10 flex items-center h-[70px] justify-between transition-all duration-300 font-sans
        ${isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"}
      `}
    >
      {/* Logo Section */}
      <div className="flex items-center ml-0 sm:ml-10 md:ml-20">
        <Link to="/" onClick={() => setIsOpen(false)}> {/* Close mobile menu on logo click */}
          {/* Dynamic logo based on scroll state */}
          {/* Note: Ensure these image paths are correct and images exist in your public folder */}
          <img
            src={isScrolled ? "/accordai-logo.png" : "/accord-ai-logo.png"}
            alt="Accord AI Logo"
            className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] md:w-[70px] md:h-[70px] object-contain transition-all duration-300 rounded-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = isScrolled ? "https://placehold.co/50x50/cccccc/333333?text=AILogo" : "https://placehold.co/50x50/333333/FFFFFF?text=AILogo"; // Fallback placeholder
            }}
          />
        </Link>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-3xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1
            ${isOpen ? "text-white" : (isScrolled ? "text-black" : "text-white")}
          `}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            // Replaced HiX with inline SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Replaced HiMenu with inline SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop & Tablet Navigation Links */}
      <div className="hidden md:flex items-center gap-6 sm:gap-8 md:gap-10 lg:mr-10">
        {["/", "/about", "/module", "/blog", "/pricing", "/contact"].map((path, idx) => {
          const names = ["Home", "About", "Module", "Blog", "Pricing", "Contact"];
          const active = isActive(path);
          return (
            <Link
              key={path}
              to={path}
              className={`no-underline flex items-center justify-center transition-all duration-300 hover:scale-110 relative
                ${active
                  ? "text-[#f90b62] font-bold text-lg sm:text-xl md:text-xl" // Active link: larger and bold
                  : isScrolled
                    ? "text-black text-[16px] sm:text-[17px] md:text-[18px] hover:text-[#0030ff]" // Scrolled: black text, blue on hover
                    : "text-white text-[16px] sm:text-[17px] md:text-[18px] hover:text-[#0030ff]" // Not scrolled: white text, blue on hover
                }
                ${active && 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-[#f90b62] after:rounded-full'} {/* Underline for active link */}
              `}
            >
              {names[idx]}
            </Link>
          );
        })}
      </div>

      {/* Desktop & Tablet Credits Button */}
      <div className="hidden md:block lg:mr-10">
        <button className="bg-[#0030ff] text-white border-none rounded-[40px] px-5 sm:px-6 py-2 text-[13px] sm:text-[14px] font-medium shadow-[0_0_0_2px_#0030ff44] flex items-center cursor-pointer w-[120px] sm:w-[130px] md:w-[140px] h-[45px] sm:h-[50px] border border-[#0030ff]
                           hover:bg-[#0020aa] transition-colors duration-300">
          Credits 10
          {/* Replaced AiOutlineThunderbolt with inline SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 15H6l7-14v8h5l-7 14z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#18181b] bg-opacity-95 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden">
          <nav className="w-full flex flex-col items-center gap-8">
            {["/", "/about", "/module", "/blog", "/pricing", "/contact"].map((path, idx) => {
              const names = ["Home", "About", "Module", "Blog", "Pricing", "Contact"];
              const active = isActive(path);
              return (
                <Link
                  key={path}
                  to={path}
                  className={`text-2xl py-2 px-6 rounded-lg transition-all duration-200
                    ${active
                      ? "text-[#f90b62] font-bold bg-[#0030ff22]" // Active link: bold and highlighted background
                      : "text-white font-semibold hover:bg-[#0030ff22] hover:text-[#0030ff]" // Inactive: white, blue on hover
                    }`}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {names[idx]}
                </Link>
              );
            })}
          </nav>
          <button
            className="mt-10 bg-[#0030ff] text-white rounded-[40px] px-8 py-3 text-lg font-medium shadow-[0_0_0_2px_#0030ff44] flex items-center gap-2 border border-[#0030ff] transition hover:bg-[#0020aa]"
            onClick={() => setIsOpen(false)}
          >
            Credits 10
            {/* Replaced AiOutlineThunderbolt with inline SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 15H6l7-14v8h5l-7 14z" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
