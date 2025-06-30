import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          SS Overseas
        </Link>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/services" className="text-baseGray hover:text-primary">Services</Link>
          <Link to="/courses" className="text-baseGray hover:text-primary">Courses</Link>
          <Link to="/universities" className="text-baseGray hover:text-primary">Universities</Link>
          <Link to="/about" className="text-baseGray hover:text-primary">About Us</Link>
          <Link to="/contact" className="text-baseGray hover:text-primary">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link to="/services" onClick={toggleMenu} className="block text-baseGray hover:text-primary">Services</Link>
          <Link to="/courses" onClick={toggleMenu} className="block text-baseGray hover:text-primary">Courses</Link>
          <Link to="/universities" onClick={toggleMenu} className="block text-baseGray hover:text-primary">Universities</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-baseGray hover:text-primary">About Us</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-baseGray hover:text-primary">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
