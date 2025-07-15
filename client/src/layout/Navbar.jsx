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
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 px-4 sm:px-6 md:px-10 flex items-center h-[70px] justify-between transition-all duration-300 text-black ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center ml-0 md:ml-20">
        <img
          src={isScrolled ? "/accordai-logo.png" : "/accord-ai-logo.png"}
          alt="Logo"
          className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] transition-all duration-300"
        />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-3xl transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10 mr-6 lg:mr-10">
        {["/", "/about", "/module", "/blog", "/contact"].map((path, idx) => {
          const names = ["Home", "About", "Module", "Blog", "Contact"];
          return (
            <Link
              key={path}
              to={path}
              className={`no-underline text-[18px] font-poppins w-[60px] h-[30px] flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                isActive(path)
                  ? "text-[#f90b62] font-semibold"
                  : isScrolled
                  ? "text-black hover:text-[#0030ff]"
                  : "text-white hover:text-[#0030ff]"
              }`}
            >
              {names[idx]}
            </Link>
          );
        })}
      </div>

      {/* Desktop Credits */}
      <div className="hidden md:block mr-4 lg:mr-10">
        <button className="bg-[#0030ff] text-white border-none rounded-[40px] px-6 py-2 text-[14px] font-medium font-poppins shadow-[0_0_0_2px_#0030ff44] flex items-center cursor-pointer w-[140px] h-[50px] border border-[#0030ff]">
          Credits 10
          <AiOutlineThunderbolt className="w-5 h-5 ml-2" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#18181b] bg-opacity-95 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden">
          <nav className="w-full flex flex-col items-center gap-8">
            {["/", "/about", "/module", "/contact"].map((path, idx) => {
              const names = ["Home", "About", "Module", "Contact"];
              return (
                <Link
                  key={path}
                  to={path}
                  className={`text-2xl font-poppins py-2 px-6 rounded-lg transition-all duration-200 ${
                    isActive(path)
                      ? "text-[#f90b62] font-bold bg-[#0030ff22]"
                      : "text-white font-semibold hover:bg-[#0030ff22] hover:text-[#0030ff]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {names[idx]}
                </Link>
              );
            })}
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
