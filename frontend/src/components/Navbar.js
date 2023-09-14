import React from 'react';

// Styling 
// ---------------
import styles from './Navbar.module.css'; 

// Assets 
// --------------
import placeholderlogo from "../assets/placeholderlogo.webp";
import qalylogo from "../assets/qalylogo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={qalylogo} className={styles.logoimg} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
