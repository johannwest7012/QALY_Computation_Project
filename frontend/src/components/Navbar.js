import React from 'react';

// Styling 
// ---------------
import './Navbar.css'; 

// Assets 
// --------------
import placeholderlogo from "../assets/placeholderlogo.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={placeholderlogo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
