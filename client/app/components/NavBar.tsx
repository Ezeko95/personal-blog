/* eslint-disable @next/next/no-img-element */

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const NavBar: React.FC = () => {
  return (
    <nav className="sticky flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
      </div>
      <div className="flex items-center space-x-4">
        {/* Navlinks */}
        <a href="/" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="text-white hover:text-gray-300">
          About Me
        </a>
        <a href="/contact" className="text-white hover:text-gray-300">
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-4">
        {/* Social media icons */}
        <a
          href="https://www.linkedin.com/in/gianluca-cianchi"
          target="_blank"
          className="dark:bg-white"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ezeko95"
          target="_blank"
          className="dark:bg-white"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
