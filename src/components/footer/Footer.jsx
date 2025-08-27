import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/ringku.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        {/* Logo & Name */}
        <a
          href="https://drive.google.com/file/d/1d_lOfoGUaGrS-ofgFKWotiLwjYw-Pg-f/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold text-primary">Ringku Sutradhar</span>
        </a>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-2">
          <a
            href="https://www.linkedin.com/in/ringku-sutradhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sutradhar2071"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 text-center">
          &copy; {new Date().getFullYear()} Ringku.SD | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
