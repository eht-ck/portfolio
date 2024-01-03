import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="p-4 mb-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white font-bold text-lg mb-2 md:mb-0">CK'S Portfolio</div>

        {/* Navigation Links */}
        <div className="space-x-4 md:ml-4">
          <a href="#" className="text-white hover:text-gray-300">Projects</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-gray-300"><FaGithub /></a>
          <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
