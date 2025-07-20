import React from "react";
import "../styles.css";

const Aim = () => {
  return (
    <div className="section-container">
      <h2>Our Work</h2>
      <p>
        We believe great design isn't just about looks—it's about 
        purpose. Our mission is to create websites that not only 
        look stunning but work seamlessly across devices, helping you 
        connect with your audience and achieve real results.
      </p>
      
      <div className="project-showcase">
        <div className="project-card">
          <h3>Web Design</h3>
          <p>Beautiful, responsive websites that convert visitors into customers</p>
        </div>
        <div className="project-card">
          <h3>Development</h3>
          <p>Custom web applications built with modern technologies</p>
        </div>
        <div className="project-card">
          <h3>Strategy</h3>
          <p>Digital marketing strategies that drive real business growth</p>
        </div>
      </div>
    </div>
  );
};

export default Aim;