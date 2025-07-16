import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();

  const { logout, isAuthenticated } = useAuth();



  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");

    setTimeout(() => {
      navigate("/");
    }, 500); 
  };

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md hover:text-blue-400 transition ${isActive ? "text-blue-500 font-semibold" : ""
    }`;

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          {/* <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Register</NavLink> */}
          {/* <NavLink to="/home" className={navLinkClass}>Home</NavLink> */}
          <NavLink to="/add-blog" className={navLinkClass} onClick={toggleMenu}>Add Blog</NavLink>
          <NavLink to="/admin/contact-form" className={navLinkClass} onClick={toggleMenu}>Contact Form</NavLink>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {/* <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Register</NavLink> */}
          <NavLink to="/add-blog" className={navLinkClass} onClick={toggleMenu}>Add Blog</NavLink>
          <NavLink to="/admin/add-product" className={navLinkClass} onClick={toggleMenu}>Add Product</NavLink>
          <NavLink to="/admin/subscription-form" className={navLinkClass} onClick={toggleMenu}>Subscription Form</NavLink>
          <NavLink to="/admin/contact-form" className={navLinkClass} onClick={toggleMenu}>Contact Form</NavLink>
          <NavLink to="/admin/add-testimonial" className={navLinkClass} onClick={toggleMenu}>Client Testimonial</NavLink>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
