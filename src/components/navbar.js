import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">CK'S Portfolio</div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Work</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300"><FaGithub /></a>
          <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
