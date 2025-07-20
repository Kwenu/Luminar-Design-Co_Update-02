import React from "react";
import Navbar from "./Navbar";
import DotNavigation from "./DotNavigation";
import Particles from "./Particles";
import Aim from "./Aim";
import "../styles.css";

const HomePage = () => {
  return (
    <div className="landing-page">
      <DotNavigation />
      <Navbar />

      <section id="home" className="section">
        <div className="gradient-background">
          <div className="glow"></div>
          <div className="grid-overlay"></div>
          <div className="noise-overlay"></div>
          <Particles />
        </div>
        
        <div className="content-container">
          <h1>Luminar Design Co</h1>
          <p>
            The Premier Web Design and Software Development Agency for Thriving
            Accommodation Brands.
          </p>
          <p className="para">
            At Luminar, we're a passionate team of designers, developers, and
            digital strategists committed to helping small businesses thrive
            online. Based in Melbourne and Sydney we specialize in crafting
            clean, functional, and conversion-driven websites that tell your
            story and grow your business.
          </p>
          <button className="btn">Contact Us</button>
        </div>
        
        <div className="scroll-indicator" onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>
          ╲╱
        </div>
      </section>

      <section id="work" className="section">
        <div className="gradient-background">
          <div className="grid-overlay"></div>
          <div className="noise-overlay"></div>
        </div>
        <Aim />
      </section>
    </div>
  );
};

export default HomePage;