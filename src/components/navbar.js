import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="p-4 mb-2 mt-1.5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="  font-bold text-lg mb-2 md:mb-0"><a href="/" className="text-[#915EFF] hover:text-white">CK'S Portfolio</a></div>

        {/* Navigation Links */}
        <div className="space-x-4 md:ml-4">
          <a href="/projects" className="text-white hover:text-[#915EFF]">Projects</a>
          <a href="/contact" className="text-white hover:text-[#915EFF]">Contact</a>
          <a href="/aboutme" className="text-white hover:text-[#915EFF]">About</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.github.com/eht-ck" target="_blank" className="text-white hover:text-[#915EFF]"><FaGithub /></a>
          <a href="https://twitter.com/eht_ck"  target="_blank" className="text-white hover:text-[#915EFF]"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/eht-ck/"  target="_blank" className="ext-white hover:text-[#915EFF]">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
