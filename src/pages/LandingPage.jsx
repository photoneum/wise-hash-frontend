/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <section className="w-full min-h-screen p-10 flex flex-col gap-16 bg-[#1F1A44] text-white ">
            {/* Navigation Bar */}
            <div className="flex w-full items-center justify-between text-lg relative px-4">
                <nav className="flex items-center gap-8">
                    <Link to="#product" smooth>Product</Link>
                    <Link to="#about" smooth>About Us</Link>
                    <Link to="#features" smooth>Features</Link>
                </nav>
                
                <h1 className="text-3xl tracking-widest font-bold">
                    WiseHash
                </h1>

                <nav className="flex items-center gap-8">
                    <Link to="#services" smooth>Services</Link>
                    <Link to="#investors" smooth>Investor Relations</Link>
                    <Link to="#contact" smooth>Contact</Link>
                </nav>
            </div>

            {/* Content Sections */}
            <div className="mt-20 flex flex-col gap-6 items-center justify-center text-center">
                <button>
                    100% Transparency
                </button>
                <h2 className="text-4xl font-extrabold mb-4">“Transforming Supply Chain Transparency with Blockchain” </h2>
                <p className="text-xl mb-8">Discover the tools, insights, and support you need to make informed financial decisions.</p>
                <Link to="/signup" className="px-6 py-3 bg-blue-700 rounded-md text-white text-lg font-semibold hover:bg-blue-600 transition-all duration-300">
                    Get Started
                </Link>
            </div>

            {/* Sections for Each Link */}
            <div id="product" className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Our Product</h2>
                <p>Explore our cutting-edge solutions designed to meet your needs.</p>
            </div>

            <div id="about" className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p>Learn more about WiseHash, our mission, and our values.</p>
            </div>

            <div id="features" className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Features</h2>
                <p>Discover the features that set us apart in the industry.</p>
            </div>

            <div id="services" className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <p>See how we can help you achieve your goals with our services.</p>
            </div>

            <div id="investors" className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Investor Relations</h2>
                <p>Find out how to get involved and invest with us.</p>
            </div>

            <div id="contact" className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p>Reach out to our team for assistance or inquiries.</p>
            </div>

            {/* Footer */}
            <footer className="w-full mt-20 py-6 bg-blue-900 text-center text-white">
                <p>&copy; 2024 WiseHash. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default LandingPage;
