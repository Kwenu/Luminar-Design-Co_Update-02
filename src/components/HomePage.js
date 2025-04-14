import React from "react";
import Navbar from "./Navbar";
import DotNavigation from "./DotNavigation";
import ScrollIndicator from "./ScrollIndicator";
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
        </p>
        <p>Luminar Design Co. is an innovative, full-service digital agency. Our expert Australian team specializes in creating amazing websites and cutting-edge software, tailored to meet the unique needs of the accommodation industry.
          We work collaboratively to deliver exceptional digital products that not only enhance your business but also set you apart in an ever - evolving digital landscape.</p>
        <button className="btn">Contact Us</button>
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default HomePage;
