import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <div className="page">
      <Navbar/>
      <HeroSection />
      <h1>Products</h1>
      <Footer />
    </div>
  );
}

export default Home;
