// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          SS Overseas
        </Link>
        <div className="space-x-4 hidden md:block">
          <Link to="/services" className="text-baseGray hover:text-primary">Services</Link>
          <Link to="/courses" className="text-baseGray hover:text-primary">Courses</Link>
          <Link to="/universities" className="text-baseGray hover:text-primary">Universities</Link>
          <Link to="/about" className="text-baseGray hover:text-primary">About Us</Link>
          <Link to="/contact" className="text-baseGray hover:text-primary">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
