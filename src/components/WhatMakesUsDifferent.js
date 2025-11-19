import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";

const WhatMakesUsDifferent = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleCommitmentCards, setVisibleCommitmentCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Our Commitment data
  const commitments = [
    {
      id: 1,
      icon: icon1,
      title: "Design Excellence",
      description:
        "Crafting design experiences that transcend ordinary expectations",
      detail:
        "Every pixel serves a purpose, every interaction tells your story",
    },
    {
      id: 2,
      icon: icon2,
      title: "Performance Mastery",
      description: "Lightning-fast, seamless experiences across every device",
      detail: "Because your audience deserves nothing less than perfection",
    },
    {
      id: 3,
      icon: icon3,
      title: "Growth Catalyst",
      description:
        "Transforming visitors into customers, browsers into believers",
      detail: "Your success is our blueprint, your growth is our mission",
    },
  ];

  // What Makes Us Different data
  const differences = [
    {
      id: 1,
      position: "top-left",
      icon: icon4,
      title: "Small team, big impact",
      description:
        "You work directly with the people doing the work—no middlemen.",
      details: [
        "Direct communication",
        "Faster decisions",
        "Personal attention",
      ],
    },
    {
      id: 2,
      position: "center",
      icon: icon5,
      title: "Human-centered design",
      description:
        "We build with your customer in mind, every step of the way.",
      details: [
        "User research",
        "Journey mapping",
        "Accessibility-first approach",
      ],
    },
    {
      id: 3,
      position: "top-right",
      icon: icon6,
      title: "Transparent process",
      description: "Clear timelines, honest pricing, no surprises.",
      details: ["Weekly updates", "Open communication", "Fixed-price projects"],
    },
    {
      id: 4,
      position: "bottom-right",
      icon: icon7,
      title: "Future-proof Sites",
      description: "Modern, scalable and easy to manage.",
      details: ["Latest tech stack", "SEO optimised", "Mobile-first design"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            if (entry.target.classList.contains("commitment-card")) {
              setVisibleCommitmentCards((prev) => [
                ...new Set([...prev, cardId]),
              ]);
            } else {
              setVisibleCards((prev) => [...new Set([...prev, cardId])]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = document.querySelectorAll(
      ".commitment-card, .difference-card-new"
    );
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="combined-section-container" ref={sectionRef}>
      {/* Our Commitment Section */}
      <section className="our-commitment-section">
        <div className="commitment-header">
          <h2 className="commitment-title">Our Commitment</h2>
          <p className="commitment-subtitle">
            Three pillars that define our approach
          </p>
        </div>

        <div className="commitment-grid">
          {commitments.map((item, index) => (
            <div
              key={item.id}
              data-card-id={item.id}
              className={`commitment-card ${
                visibleCommitmentCards.includes(item.id) ? "visible" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="commitment-card-content">
                <div className="commitment-icon-wrapper">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="commitment-icon-img"
                  />
                </div>
                <h3 className="commitment-card-title">{item.title}</h3>
                <p className="commitment-card-description">
                  {item.description}
                </p>
                <p className="commitment-card-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="commitment-cta">
          <h3 className="cta-title-new">Ready to begin?</h3>
          <p className="cta-text-new">
            Let's create something remarkable together
          </p>
          <div className="cta-buttons-new">
            <button className="cta-btn-primary">START YOUR PROJECT</button>
            <button className="cta-btn-secondary">VIEW OUR WORK</button>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="differences-section">
        <div className="differences-header">
          <h2 className="differences-title">What makes us different?</h2>
          <p className="differences-subtitle">
            We're not just another web agency.
            <br />
            Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="differences-positioned-grid">
          {/* Vertical Lines */}
          <div className="vertical-line-container">
            <div className="vertical-line-left"></div>
            <div className="vertical-line-center"></div>
            <div className="vertical-line-right"></div>
          </div>

          {differences.map((item, index) => (
            <div
              key={item.id}
              data-card-id={item.id}
              className={`difference-card-positioned position-${
                item.position
              } ${visibleCards.includes(item.id) ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="difference-icon-section-new">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="difference-icon-positioned"
                />
              </div>

              <div className="difference-content-section-new">
                <h3 className="difference-title-positioned">{item.title}</h3>
                <p className="difference-description-positioned">
                  {item.description}
                </p>

                <ul className="difference-details-list-new">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatMakesUsDifferent;
