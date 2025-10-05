import React from "react";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white-100 py-8 px-6">
      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center md:items-start">

        {/* Left: Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:absolute left-0 space-y-1 md:space-y-0 md:space-x-3">
          <span className="text-pink-500 font-semibold text-lg">RAG Builder</span>
          <span className="text-gray-400">© 2025 All rights reserved.</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-400 w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 mt-4 md:mt-0">
          <a href="#price" className="hover:text-pink-500 transition-colors">Price</a>
          <a href="#documentation" className="hover:text-pink-500 transition-colors">Documentation</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-gray-400 md:absolute right-0 mt-4 md:mt-0">
          <a href="https://facebook.com" className="hover:text-pink-500" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-pink-500" aria-label="Twitter">
            <Twitter size={24} />
          </a>
          <a href="https://github.com" className="hover:text-pink-500" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-pink-500" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
