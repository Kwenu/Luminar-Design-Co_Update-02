import React from "react";
import Navbar from "./Navbar";
import DotNavigation from "./DotNavigation";
import Particles from "./Particles";

const HomePage = () => {
  return (
    <div className="home-container">
      <DotNavigation />
      <div className="gradient-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="glow"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <Navbar />
        <Particles />
      </div>

      <div className="content-container"><br /><br />
        <h1>Luminar Design Co</h1>
        <p>
        The Premier Web Design and Software Development Agency for Thriving Accommodation Brands.
        </p><br /><br />
        <p className="para">At Luminar, we're a passionate team of designers, developers, and digital strategists 
          committed to helping small businesses thrive online. Based in Melbourne and Sydney we specialize in crafting 
          clean, functional, and conversion-driven websites that tell your story and grow your business.</p>
        <button className="btn">Contact Us</button>
        <div class="section"></div>
      </div>
    </div>
  );
};

export default HomePage;
