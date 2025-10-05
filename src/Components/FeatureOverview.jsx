import React from 'react';
import { UploadCloud, Settings, Share2 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, step }) => (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-pink-500/30 transition duration-300 transform hover:-translate-y-1 border border-gray-700">
        <div className="flex items-center mb-4">
            <div className="text-3xl font-extrabold text-pink-500 mr-4 border-2 border-pink-500 rounded-full w-10 h-10 flex items-center justify-center">
                {step}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mt-4 text-sm">{description}</p>
        <div className="mt-4 text-pink-500">
            <Icon className="w-8 h-8 opacity-70" />
        </div>
    </div>
);

const FeatureOverview = () => {
    return (
        <section id="features" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-pink-500 text-sm font-semibold uppercase tracking-wider">
                        OUR PLATFORM
                    </span>
                    <h2 className="text-4xl font-extrabold mt-2">
                        Build Your AI Assistant in 3 Simple Steps
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                        From raw data to a production-ready API endpoint, RAG Builder handles the entire pipeline—chunking, vectorization, and inference.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <FeatureCard
                        step={1}
                        icon={UploadCloud}
                        title="Upload & Ingest Data"
                        description="Easily upload your knowledge base (PDFs, JSON, Text). Our platform automatically indexes and prepares your documents for Retrieval-Augmented Generation."
                    />
                    
                    <FeatureCard
                        step={2}
                        icon={Settings}
                        title="Configure RAG Parameters"
                        description="Fine-tune how your bot behaves. Control retrieval settings (Top-K, Chunk Size) and conversation style (Temperature, System Prompt) via a simple UI."
                    />

                    <FeatureCard
                        step={3}
                        icon={Share2}
                        title="Deploy & Integrate via API"
                        description="Instantly generate an API Key and Endpoint. Integrate your custom, context-aware bot into any website, application, or internal tool in minutes."
                    />

                </div>
            </div>
        </section>
    );
};

export default FeatureOverview;