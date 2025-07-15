import React, { useState, useEffect } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Reduced threshold for better responsiveness
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 px-6 md:px-10 flex items-center h-[100px] justify-between transition-all duration-300 text-black ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      {/* Logo and Brand */}
      <div className="flex items-center ml-0 md:ml-20">
        <img 
          src={isScrolled ? "/accordai-logo.png" : "/accord-ai-logo.png"} 
          alt="Logo" 
          className="w-[160px] h-[160px] md:w-[220px] md:h-[220px] transition-all duration-300" 
        />
      </div>

      {/* Hamburger Menu (Mobile Only) */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-3xl transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-10 mr-10">
        <Link to="/" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isActive("/") 
            ? 'text-[#f90b62] font-semibold' 
            : isScrolled ? 'text-black hover:text-[#0030ff]' : 'text-white hover:text-[#0030ff]'
        }`}>
          Home
        </Link>
        <Link to="/about" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isActive("/about") 
            ? 'text-[#f90b62] font-semibold' 
            : isScrolled ? 'text-black hover:text-[#0030ff]' : 'text-white hover:text-[#0030ff]'
        }`}>
          About
        </Link>
        <Link to="/module" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isActive("/module") 
            ? 'text-[#f90b62] font-semibold' 
            : isScrolled ? 'text-black hover:text-[#0030ff]' : 'text-white hover:text-[#0030ff]'
        }`}>
          Module
        </Link>
        <Link to="/contact" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isActive("/contact") 
            ? 'text-[#f90b62] font-semibold' 
            : isScrolled ? 'text-black hover:text-[#0030ff]' : 'text-white hover:text-[#0030ff]'
        }`}>
          Contact
        </Link>
      </div>


      {/* Credits Button (Desktop) */}
      <div className="hidden md:block mr-10">
        <button className="bg-[#0030ff] text-white border-none rounded-[40px] px-7 py-2 text-[15px] font-medium font-poppins shadow-[0_0_0_2px_#0030ff44] flex items-center cursor-pointer w-[158px] h-[60px] border border-[#0030ff]">
          Credits 10
          <AiOutlineThunderbolt className="w-5 h-5 ml-2" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#18181b] bg-opacity-95 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden">
          <nav className="w-full flex flex-col items-center gap-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Module", path: "/module" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-2xl font-poppins py-2 px-6 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#f90b62] font-bold bg-[#0030ff22] '
                    : 'text-white font-semibold hover:bg-[#0030ff22] hover:text-[#0030ff]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            className="mt-10 bg-[#0030ff] text-white rounded-[40px] px-8 py-3 text-lg font-medium font-poppins shadow-[0_0_0_2px_#0030ff44] flex items-center gap-2 border border-[#0030ff] transition hover:bg-[#0020aa]"
            onClick={() => setIsOpen(false)}
          >
            Credits 10
            <AiOutlineThunderbolt className="w-6 h-6" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
