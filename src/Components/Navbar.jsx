import React from "react";
import { Brain } from "lucide-react";

const NavBarItems = [
    { name: "Price", href: "#price" },
    { name: "Documentation", href: "#documentation" },
];

const Navbar = () => {
    return (
        <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
            {/* Left Section: Logo */}
            <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-pink-500" />
                <span className="text-pink-500 font-semibold text-lg">RAG Builder</span>
            </div>

            {/* Center Section: Nav Links */}
            <div className="flex space-x-6">
                {NavBarItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="hover:text-pink-500 transition-colors"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Right Section: Sign In & Get Started */}
            <div className="flex items-center space-x-4">
                <button className="text-white hover:text-pink-500">Sign In</button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
