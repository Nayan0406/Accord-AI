import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative text-white py-12 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
          linear-gradient(180deg, #0C0022 0%, rgba(18,7,59,0.5) 42.07%, rgba(63,50,228,0) 96.49%),
          url('/footer-img.jpg')`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-8">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start items-center">
          <Link to="/">
            <img src="/accord-ai-logo.png" alt="Accord AI" className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 object-contain" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 sm:gap-4 font-light text-md items-center sm:items-start">
          <Link to="/" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Home</Link>
          <Link to="/about" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>About</Link>
          <Link to="/module" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Module</Link>
          <Link to="/blog" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Blog</Link>
          <Link to="/pricing" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Pricing</Link>
          <Link to="/contact" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Contacts</Link>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 font-light text-md items-center sm:items-start">
          <Link to="/terms-and-conditions" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Terms and Conditions</Link>
          <Link to="/terms-and-use" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Terms and Use</Link>
          <Link to="/privacy-policy" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Privacy Policy</Link>
          <Link to="/cookies-policy" className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors duration-200" onClick={handleNavigation}>Cookies Policy</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 sm:gap-5 text-md items-center sm:items-start">
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl font-medium">Contact Us</p>
            <p className="mt-1 text-sm sm:text-base">+91 8888-7777-66</p>
            <p className="text-sm sm:text-base">hello@accord.com</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl font-medium">Location</p>
            <p className="text-sm sm:text-base">483, Dharampeth,</p>
            <p className="text-sm sm:text-base">Hingna road, Nagpur 440012</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-lg sm:text-xl font-semibold mb-4">Social Media</p>
          <div className="flex gap-6 sm:gap-8 text-white text-xl">
            <FaFacebookF className="hover:text-blue-400 transition cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 transition cursor-pointer" />
            <FaYoutube className="hover:text-red-500 transition cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 mt-5 text-lg sm:text-xl font-semibold text-center px-2 -mb-10">
        &copy; All Rights Reserved by Accord AI
      </div>
    </footer>
  );
};

export default Footer;
