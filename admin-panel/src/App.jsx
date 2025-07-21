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
// import Home from './pages/Home';

function App() {
  const location = useLocation();
  const hideNavbar = ["/login", "/"].includes(location.pathname);

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Register />} /> */}

        {/* Redirect old paths to /admin/* (optional support for older bookmarks) */}
        {/* <Route path="/home" element={<Navigate to="/admin/home" replace />} /> */}
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
