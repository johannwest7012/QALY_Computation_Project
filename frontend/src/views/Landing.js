import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div>Temp Landing Screen</div>
            <Footer />
        </div>
    );
}

export default Landing;
