import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; // adjust path if needed

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        {/* Add your landing page content here */}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default LandingPage;
