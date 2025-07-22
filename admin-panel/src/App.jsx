import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddBlog from './pages/AddBlog';

import Navbar from './layout/Navbar';

import ContactForm from './pages/ContactForm';

import Login from './pages/Login';
// import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';
// import Home from './pages/Home';

// Default route component that checks authentication
const DefaultRoute = () => {
  const { isAuthenticated } = useAuth();
  
  // If authenticated, redirect to add-blog, otherwise to login
  return isAuthenticated ? 
    <Navigate to="/admin/add-blog" replace /> : 
    <Navigate to="/login" replace />;
};

function App() {
  const location = useLocation();
  const hideNavbar = ["/login", "/"].includes(location.pathname);

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Default route - redirect based on auth status */}
        <Route path="/" element={<DefaultRoute />} />

        {/* Redirect old paths to /admin/* (optional support for older bookmarks) */}
        <Route path="/add-blog" element={<Navigate to="/admin/add-blog" replace />} />
        <Route path="/contact-form" element={<Navigate to="/admin/contact-form" replace />} />

        {/* Protected Admin Routes */}
        {/* <Route
          path="/admin/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/admin/add-blog"
          element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/contact-form"
          element={
            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
