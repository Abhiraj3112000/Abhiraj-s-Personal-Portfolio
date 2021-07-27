import React from "react";
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

class Services extends React.Component {
render(){
  return (
    <div className="page">
      <Navbar/>
      <HeroSection />
      <h1>Services</h1>
    </div>
  );
}
 
}

export default Services;