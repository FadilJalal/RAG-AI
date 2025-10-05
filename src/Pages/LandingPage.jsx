import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 
import Header from '../Components/Header';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Header/>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;