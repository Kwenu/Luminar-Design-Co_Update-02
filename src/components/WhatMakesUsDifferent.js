import React from "react";
import "../styles.css";

const WhatMakesUsDifferent = () => {
  return (
    <div className="section-container">
      <h2>What Makes Us Different</h2>
      <div className="differences-grid">
        <div className="difference-card">
          <div className="difference-icon">👥</div>
          <h3>Human-Centered Design</h3>
          <p>We build with your customer in mind, every step of the way.</p>
        </div>
        
        <div className="difference-card">
          <div className="difference-icon">⚡</div>
          <h3>Small Team, Big Impact</h3>
          <p>You work directly with the people doing the work—no middlemen.</p>
        </div>
        
        <div className="difference-card">
          <div className="difference-icon">🔍</div>
          <h3>Transparent Process</h3>
          <p>Clear timelines, honest pricing, no surprises.</p>
        </div>
        
        <div className="difference-card">
          <div className="difference-icon">🚀</div>
          <h3>Future-Proof Sites</h3>
          <p>Modern, scalable, and easy to manage.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;