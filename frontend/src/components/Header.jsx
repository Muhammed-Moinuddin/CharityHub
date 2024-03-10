// src/components/Header.js
import React from 'react';
import logo from '../assets/charityhub-logo.png'

const Header = () => {
  return (
    <header className="bg-black-500 p-2 shadow-3xl border-b border-gray-500">
      
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2 w-40" />
        </div>

        {/* Navigation in the center */}
        <nav className="text-white">
          {/* Add your navigation links here */}
          <a href="#" className="mx-4">Home</a>
          <a href="#" className="mx-4">About</a>
          <a href="#" className="mx-4">Contact</a>
        </nav>

        {/* Signup and Login buttons on the right */}
        <div className="flex items-center">
          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-4 py-2 mr-2 rounded">Signup</button>
          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
