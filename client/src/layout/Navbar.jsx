import React, { useState, useEffect } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Reduced threshold for better responsiveness
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full sticky top-0 z-50 px-6 md:px-10 flex items-center h-[100px] justify-between transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      {/* Logo and Brand */}
      <div className="flex items-center ml-0 md:ml-20">
        <img src="/accordai-logo.png" alt="Logo" className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]" />
      </div>

      {/* Hamburger Menu (Mobile Only) */}
      <div className="md:hidden z-20">
        <button onClick={() => setIsOpen(!isOpen)} className={`text-3xl transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-10 mr-10">
        <Link to="/" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          Home
        </Link>
        <Link to="/about" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          About
        </Link>
        <Link to="/module" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          Module
        </Link>
        <Link to="/contact" className={`no-underline text-[20px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
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
        <div className="absolute top-[100px] left-0 w-full bg-[#000000cc] backdrop-blur-sm z-10 md:hidden flex flex-col items-center gap-6 py-6">
          {["Home", "About", "Module", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white text-[16px] font-poppins"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            className="bg-[#0030ff] text-white border-none rounded-[40px] px-7 py-2 text-[16px] font-medium font-poppins shadow-[0_0_0_2px_#0030ff44] flex items-center cursor-pointer border border-[#0030ff]"
            onClick={() => setIsOpen(false)}
          >
            Credits 10
            <AiOutlineThunderbolt />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
