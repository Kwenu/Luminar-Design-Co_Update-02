import React, { useState, useEffect } from 'react';

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const visionPoints = [
    {
      icon: "✨",
      title: "Design Excellence",
      description: "Crafting digital experiences that transcend ordinary expectations",
      detail: "Every pixel serves a purpose, every interaction tells your story",
      number: "01"
    },
    {
      icon: "⚡",
      title: "Performance Mastery", 
      description: "Lightning-fast, seamless experiences across every device",
      detail: "Because your audience deserves nothing less than perfection",
      number: "02"
    },
    {
      icon: "🚀",
      title: "Growth Catalyst",
      description: "Transforming visitors into customers, browsers into believers",
      detail: "Your success is our blueprint, your growth is our mission",
      number: "03"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5x", label: "Average ROI Increase" }
  ];

  return (
    <div className="mission-container">
      {/* Geometric background elements */}
      <div className="bg-geometry">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-lines"></div>
      </div>

      {/* Decorative Squares */}
      <div className="decorative-squares">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="square"></div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 25}s`
            }}
          ></div>
        ))}
      </div>

      <div className="content-wrapper">
        {/* Header Section */}
        <div className={`header-section ${isVisible ? 'visible' : ''}`}>
          <div className="mission-badge">Our Philosophy</div>
          <h1 className="main-title-2">Mission</h1>
          <p className="subtitle">
            Redefining the digital landscape through purposeful design and unwavering commitment to excellence
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`mission-statement ${isVisible ? 'visible' : ''}`}>
          <div className="statement-content">
            <div className="quote-mark">"</div>
            <p className="statement-text">
              We don't just build websites - we architect digital experiences that 
              <span className="highlight"> transform businesses</span> and 
              <span className="highlight"> captivate audiences</span>. 
              Our mission transcends code and pixels; we craft digital symphonies where 
              every element harmonizes to create something extraordinary.
            </p>
            <div className="statement-author">
              <div className="author-line"></div>
              <span>The Philosophy That Drives Us</span>
            </div>
          </div>
        </div>

        {/* Vision Points */}
        <div className="vision-section">
          <div className={`vision-header ${isVisible ? 'visible' : ''}`}>
            <h2 className="vision-title">Our Commitment</h2>
            <p className="vision-subtitle">Three pillars that define our approach</p>
          </div>

          <div className="vision-grid">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className={`vision-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-number">{point.number}</div>
                <div className="card-icon-wrapper">
                  <div className="card-icon">{point.icon}</div>
                </div>
                <h3 className="card-title">{point.title}</h3>
                <p className="card-description">{point.description}</p>
                <p className="card-detail">{point.detail}</p>
                <div className="card-border"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`stats-section ${isVisible ? 'visible' : ''}`}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item"
                style={{ transitionDelay: `${1400 + index * 100}ms` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`cta-section ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Begin?</h3>
            <p className="cta-text">
              Let's create something remarkable together
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                <span>Start Your Project</span>
                <div className="button-arrow">→</div>
              </button>
              <button className="cta-button secondary">
                <span>View Our Work</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;