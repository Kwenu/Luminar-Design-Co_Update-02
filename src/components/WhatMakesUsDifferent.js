import React, { useState, useEffect, useRef } from 'react';
import "../styles.css";

const WhatMakesUsDifferent = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const differences = [
    {
      id: 1,
      icon: "👥",
      title: "Human-Centered Design",
      description: "We build with your customer in mind, every step of the way.",
      details: "User research • Journey mapping • Accessibility-first approach",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      icon: "⚡",
      title: "Small Team, Big Impact",
      description: "You work directly with the people doing the work—no middlemen.",
      details: "Direct communication • Faster decisions • Personal attention",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 3,
      icon: "🔍",
      title: "Transparent Process",
      description: "Clear timelines, honest pricing, no surprises.",
      details: "Weekly updates • Open communication • Fixed-price projects",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 4,
      icon: "🚀",
      title: "Future-Proof Sites",
      description: "Modern, scalable, and easy to manage.",
      details: "Latest tech stack • SEO optimized • Mobile-first design",
      color: "from-purple-400 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe cards
    const cards = document.querySelectorAll('.enhanced-difference-card');
    cards.forEach(card => observer.observe(card));

    // Observe title and subtitle
    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (subtitleRef.current) titleObserver.observe(subtitleRef.current);

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  return (
    <div className="enhanced-section-container" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={`floating-shape shape-${i + 1}`}
            style={{
              animationDelay: `${i * 0.5}s`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="subtle-grid" />

      {/* Header Section */}
      <div className="enhanced-header">
        <div className="section-badge" ref={titleRef}>
          <span>✨ Our Difference</span>
        </div>
        <h2 className="enhanced-title">What Makes Us Different</h2>
        <p className="enhanced-subtitle" ref={subtitleRef}>
          We're not just another web agency. Here's what sets us apart from the competition.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="enhanced-differences-grid">
        {differences.map((item, index) => (
          <div
            key={item.id}
            data-card-id={item.id}
            className={`enhanced-difference-card ${
              visibleCards.includes(item.id) ? 'visible' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Glow Effect */}
            <div className={`card-glow bg-gradient-to-r ${item.color}`} />
            
            {/* Card Content */}
            <div className="card-content">
              <div className="icon-wrapper">
                <div className="icon-background" />
                <span className="enhanced-icon">{item.icon}</span>
                <div className="icon-pulse" />
              </div>
              
              <h3 className="card-title-2">{item.title}</h3>
              <p className="card-description-2">{item.description}</p>
              
              {/* Expandable Details */}
              <div className={`card-details ${hoveredCard === item.id ? 'expanded' : ''}`}>
                <div className="details-divider" />
                <p className="details-text">{item.details}</p>
              </div>
            </div>

            {/* Corner Decoration */}
            <div className="corner-decoration" />
            
            {/* Number Badge */}
            <div className="number-badge">
              <span>{String(item.id).padStart(2, '0')}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      {/* <div className="section-cta">
        <p>Ready to experience the difference?</p>
        <button className="cta-button-2">
          <span>Let's Work Together</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default WhatMakesUsDifferent;