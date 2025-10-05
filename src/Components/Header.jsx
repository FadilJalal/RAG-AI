import React from 'react';
// Import the Lucide icons needed for the trust/feature block
import { BookOpen, Shield, Zap } from "lucide-react";

const Header = () => {
    return (
        // Increased padding at the bottom for the new elements
        <header className="py-20 md:py-32 pb-40 text-center bg-gray-900 text-white shadow-xl relative overflow-hidden">

            {/* Container for main content */}
            <div className="container mx-auto px-4 relative z-10">

                {/* Main Title (H1) */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                    Build <span className="text-pink-500">AI Assistants</span> with Your Data. Instantly.
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    The fastest way to deploy powerful, context-aware bots using Retrieval-Augmented Generation (RAG).
                </p>

                {/* Primary CTA Button */}
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300">
                    Get Started
                </button>

                {/* Secondary CTA/Trust Element (Optional) */}
                <p className="mt-4 text-sm text-gray-400">
                    Connect your data sources now.
                </p>
            </div>

            {/* --- NEW SECTION BELOW: Scroll Encouragement ---
        This section sits at the bottom of the header and uses subtle visual cues.
      */}
            <div className="absolute bottom-0 left-0 w-full pt-10 pb-6 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent z-0">
                <div className="container mx-auto px-4">

                    {/* Subtle Trust/Feature Block - NOW USING LUCIDE ICONS */}
                    <div className="flex justify-center space-x-8 text-gray-400 text-sm md:text-base mb-6">

                        {/* 1. Documents Indexed (using BookOpen icon) */}
                        <span className="flex items-center">
                            <BookOpen className="w-4 h-4 text-pink-500 mr-2" />
                            1M+ Documents Indexed
                        </span>

                        {/* 2. SOC 2 Compliant (using Shield icon) */}
                        <span className="flex items-center">
                            <Shield className="w-4 h-4 text-pink-500 mr-2" />
                            SOC 2 Compliant
                        </span>

                        {/* 3. Low-Latency API (using Zap icon) */}
                        <span className="flex items-center">
                            <Zap className="w-4 h-4 text-pink-500 mr-2" />
                            Low-Latency API
                        </span>

                    </div>

                    {/* Simple Scroll Down Indicator */}
                    <div className="flex flex-col items-center">
                        <p className="text-sm text-gray-500 mb-1">See how it works</p>
                        {/* Simple chevron icon for visual movement */}
                        <svg className="w-6 h-6 text-gray-500 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;