import React, { useState, useEffect } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const lastUpdated = "December 8, 2024"; // Update dynamically if needed.
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3500); // Popup disappears after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="p-4 mb-2 mt-1.5  text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">
            <a href="/" className="text-[#915EFF] hover:text-white">CK'S Portfolio</a>
          </div>

          {/* Navigation Links */}
          <div className="space-x-4 md:ml-4">
            <a href="/projects" className="hover:text-[#915EFF]">Projects</a>
            <a href="/contact" className="hover:text-[#915EFF]">Contact</a>
            <a href="/aboutme" className="hover:text-[#915EFF]">About</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.github.com/eht-ck" target="_blank" className="hover:text-[#915EFF]">
              <FaGithub />
            </a>
            <a href="https://twitter.com/eht_ck" target="_blank" className="hover:text-[#915EFF]">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/eht-ck/" target="_blank" className="hover:text-[#915EFF]">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Last Updated Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
          <p className="text-sm">Last updated: <span className="font-semibold">{lastUpdated}</span></p>
        </div>
      )}
    </>
  );
};

export default Navbar;
