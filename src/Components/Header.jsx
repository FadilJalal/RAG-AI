import React from 'react';
import { Code, Database, Zap, ArrowDown } from "lucide-react"; 

const Header = () => {
    return (
        // REDUCED: pb-24 changed to pb-12
        <header className="py-20 md:py-32 pb-12 text-center bg-gray-900 text-white shadow-xl relative overflow-hidden">

            {/* Container for main content */}
            <div className="container mx-auto px-4 relative z-10 max-w-7xl">

                {/* Main Title (H1) - RESTORED TAILWIND GRADIENT & GLOW CLASSES */}
                <h1 
                    className="
                        text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight 
                        inline-block 
                        bg-clip-text text-transparent 
                        bg-gradient-to-r from-pink-500 via-white to-pink-500 
                        animate-gradient-shift 
                        drop-shadow-[0_2px_4px_rgba(236,72,153,0.4)]
                    "
                >
                    Build AI Assistants with Your Data. Instantly.
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    The fastest way to deploy powerful, context-aware bots using Retrieval-Augmented Generation (RAG).
                </p>

                {/* Primary CTA Button */}
                <button 
                    className="
                        bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg 
                        transition duration-300 mb-10
                    "
                >
                    Get Started — It's Free
                </button>


                {/* Trust/Feature Bar */}
                <div className="flex justify-center space-x-6 md:space-x-10 text-gray-400 text-sm md:text-base mb-16">
                    <span className="flex items-center">
                        <Code className="w-4 h-4 text-pink-500 mr-2" />
                        Open Source Core (Python)
                    </span>
                    <span className="flex items-center">
                        <Database className="w-4 h-4 text-pink-500 mr-2" />
                        JSON, PDF, TXT Support
                    </span>
                    <span className="flex items-center hidden sm:flex">
                        <Zap className="w-4 h-4 text-pink-500 mr-2" />
                        Production Ready API
                    </span>
                </div>
            </div>

            {/* Scroll Encouragement/Indicator - No change needed here */}
            <div className="absolute bottom-0 left-0 w-full pt-10 pb-6 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent z-0">
                <div className="flex flex-col items-center">
                    <p className="text-xs text-gray-500 mb-1">See how it works</p>
                    <ArrowDown className="w-5 h-5 text-gray-500 animate-bounce" />
                </div>
            </div>
        </header>
    )
}

export default Header;