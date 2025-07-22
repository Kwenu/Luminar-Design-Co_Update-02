import React from "react";
import "../styles.css";

const WhatWeDo = () => {
  return (
    <div className="section-container services-section">
      <h2>Smart Websites Built for Small Business Success</h2>
      <p className="services-intro">
        Whether you're launching your first site or redesigning an outdated one, 
        we're here to guide you through the entire process—from concept to go-live 
        and beyond. We tailor every project to your goals, your industry, and your customers.
      </p>
      
      <div className="services-container">
        <h3 className="services-heading">Our Core Services</h3>
        
        <div className="services-grid">
          <div className="service-card core-service">
            <div className="service-icon">🔧</div>
            <h4>Website Design & Development</h4>
            <p>Custom-designed websites that reflect your brand and convert visitors into customers. Fast, mobile-friendly, and SEO-ready.</p>
          </div>
          
          <div className="service-card core-service">
            <div className="service-icon">✍️</div>
            <h4>Copywriting & Content Strategy</h4>
            <p>We help craft clear, compelling messaging that speaks to your audience and drives action.</p>
          </div>
          
          <div className="service-card core-service">
            <div className="service-icon">🌐</div>
            <h4>Website Redesigns</h4>
            <p>Have a site that looks outdated or loads slowly? We refresh and rebuild with performance and UX in mind.</p>
          </div>
          
          <div className="service-card core-service">
            <div className="service-icon">🔒</div>
            <h4>Website Maintenance & Support</h4>
            <p>Stay secure and up to date. We offer ongoing care plans so you can focus on running your business, not fixing your site.</p>
          </div>
        </div>
        
        <h3 className="services-heading additional-services-heading">Additional Services</h3>
        
        <div className="additional-services">
          <div className="additional-service">
            <span className="additional-icon">🎨</span>
            <span>Logo Design</span>
          </div>
          <div className="additional-service">
            <span className="additional-icon">🔍</span>
            <span>SEO Fundamentals & Setup</span>
          </div>
          <div className="additional-service">
            <span className="additional-icon">📊</span>
            <span>Website Audits</span>
          </div>
          <div className="additional-service">
            <span className="additional-icon">🔗</span>
            <span>Integrations (Booking, Payments, CRM)</span>
          </div>
        </div>
        
        <div className="services-cta">
          <h3>Let's build something great together.</h3>
          <div className="cta-buttons">
            <button 
              className="btn primary-btn"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              👉 Book a Free Discovery Call
            </button>
            <button className="btn secondary-btn">
              📧 hello@luminar.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;