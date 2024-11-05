import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import MidSection from "./MidSection";
import MidSection01 from "./MidSection01";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
    return (
        <div className="bg-white text-black" style={{height:"100vh"}}>
            <Navbar />
            <Header />
            <MidSection />
            <MidSection01 />
            <Footer />
        </div>
    )
}

export default LandingPage;