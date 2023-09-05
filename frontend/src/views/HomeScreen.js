import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "./HomeScreen.css";





function HomeScreen() {



  return (
    <div className="world-map-screen">
      <Navbar />
      <div className="row">
        <p>Temp Home Screen</p>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
