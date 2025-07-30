import "../styles.css";
import React, { useState, useEffect, useRef } from "react";

const WhatWeDo = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleServices, setVisibleServices] = useState([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const coreServices = [
    {
      id: 1,
      icon: "🔧",
      title: "Website Design & Development",
      description:
        "Custom-designed websites that reflect your brand and convert visitors into customers. Fast, mobile-friendly, and SEO-ready.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/20",
    },
    {
      id: 2,
      icon: "✍️",
      title: "Copywriting & Content Strategy",
      description:
        "We help craft clear, compelling messaging that speaks to your audience and drives action.",
      features: ["Brand Voice", "SEO Content", "Conversion Copy"],
      color: "from-purple-400 to-pink-500",
      borderColor: "border-purple-500/20",
    },
    {
      id: 3,
      icon: "🌐",
      title: "Website Redesigns",
      description:
        "Have a site that looks outdated or loads slowly? We refresh and rebuild with performance and UX in mind.",
      features: ["Modern Design", "Performance", "User Experience"],
      color: "from-green-400 to-emerald-500",
      borderColor: "border-green-500/20",
    },
    {
      id: 4,
      icon: "🔒",
      title: "Website Maintenance & Support",
      description:
        "Stay secure and up to date. We offer ongoing care plans so you can focus on running your business, not fixing your site.",
      features: ["Security Updates", "Backups", "24/7 Support"],
      color: "from-orange-400 to-red-500",
      borderColor: "border-orange-500/20",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  
  const additionalServices = [
    { icon: "🎨", name: "Logo Design", color: "from-pink-400 to-rose-500" },
    {
      icon: "🔍",
      name: "SEO Fundamentals & Setup",
      color: "from-blue-400 to-indigo-500",
    },
    { icon: "📊", name: "Website Audits", color: "from-green-400 to-teal-500" },
    {
      icon: "🔗",
      name: "Integrations (Booking, Payments, CRM)",
      color: "from-purple-400 to-violet-500",
    },
  ];

    useEffect(() => {
      setIsVisible(true);
    }, []);

  useEffect(() => {
    // This ensures navbar/dots are WHITE on dark background
    document.body.setAttribute("data-page-theme", "dark");
    document.body.classList.add("dark-page");

    return () => {
      document.body.removeAttribute("data-page-theme");
      document.body.classList.remove("dark-page");
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("wwds-primary-service-card")) {
              const cardId = parseInt(entry.target.dataset.cardId);
              setVisibleCards((prev) => [...new Set([...prev, cardId])]);
            } else if (
              entry.target.classList.contains("wwds-supplementary-service-item")
            ) {
              const serviceIndex = parseInt(entry.target.dataset.serviceIndex);
              setVisibleServices((prev) => [
                ...new Set([...prev, serviceIndex]),
              ]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wwds-animate-fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe cards
    const cards = document.querySelectorAll(".wwds-primary-service-card");
    cards.forEach((card) => observer.observe(card));

    const services = document.querySelectorAll(
      ".wwds-supplementary-service-item"
    );
    services.forEach((service) => observer.observe(service));

    // Observe title and subtitle
    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (subtitleRef.current) titleObserver.observe(subtitleRef.current);

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  return (
    <div className="wwds-enhanced-services-container" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="wwds-dark-floating-shapes">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`wwds-dark-floating-shape wwds-dark-shape-${i + 1}`}
            style={{
              animationDelay: `${i * 0.7}s`,
              left: `${5 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Circuit-like pattern */}
      <div className="wwds-circuit-pattern" />

      {/* Gradient mesh */}
      <div className="wwds-gradient-mesh" />

      {/* Header Section */}
      <div className="wwds-services-header">
        <div className="wwds-services-badge" ref={titleRef}>
          <span>🚀 Our Expertise</span>
        </div>
        <h2 className="wwds-services-main-title">
          Smart Websites Built for Small Business Success
        </h2>
        <p className="wwds-services-main-subtitle" ref={subtitleRef}>
          Whether you're launching your first site or redesigning an outdated
          one, we're here to guide you through the entire process—from concept
          to go-live and beyond. We tailor every project to your goals, your
          industry, and your customers.
        </p>
      </div>

      {/* Core Services Section */}
      <div className="wwds-core-services-section">
        <h3 className="wwds-section-title">Our Core Services</h3>
        <div className="wwds-services-grid">
          {coreServices.map((service, index) => (
            <div
              key={service.id}
              data-card-id={service.id}
              className={`wwds-primary-service-card ${
                visibleCards.includes(service.id) ? "wwds-visible" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <div
                className={`wwds-service-card-glow bg-gradient-to-r ${service.color}`}
              />

              {/* Card Content */}
              <div className="wwds-service-card-content">
                <div className="wwds-service-icon-wrapper">
                  <div className="wwds-service-icon-background" />
                  <span className="wwds-service-icon-enhanced">
                    {service.icon}
                  </span>
                  <div className="wwds-service-icon-ring" />
                </div>

                <h4 className="wwds-service-card-title">{service.title}</h4>
                <p className="wwds-service-card-description">
                  {service.description}
                </p>

                {/* Features List */}
                <div
                  className={`wwds-service-features ${
                    hoveredCard === service.id ? "wwds-expanded" : ""
                  }`}
                >
                  <div className="wwds-features-divider" />
                  <div className="wwds-features-list">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="wwds-feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="wwds-service-progress" />

              {/* Number badge */}
              <div className="wwds-service-number-badge">
                <span>{String(service.id).padStart(2, "0")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="wwds-additional-services-section">
        <h3 className="wwds-section-title">Additional Services</h3>
        <div className="wwds-additional-services-grid">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              data-service-index={index}
              className={`wwds-supplementary-service-item ${
                visibleServices.includes(index) ? "wwds-visible" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="wwds-additional-service-content">
                <div
                  className={`wwds-additional-icon-wrapper bg-gradient-to-r ${service.color}`}
                >
                  <span className="wwds-additional-service-icon">
                    {service.icon}
                  </span>
                </div>
                <span className="wwds-additional-service-name">
                  {service.name}
                </span>
              </div>
              <div className="wwds-additional-service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="wwds-services-cta-section">
        <div className="wwds-cta-content">
          <h3 className="wwds-cta-title">
            Let's build something great together.
          </h3>
          <p className="wwds-cta-subtitle">
            Ready to transform your online presence?
          </p>
          <div className="wwds-cta-buttons-container">
            <button
              className="wwds-primary-cta-button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>👉 Book a Free Discovery Call</span>
              <div className="wwds-button-shine" />
            </button>
            <button className="wwds-secondary-cta-button">
              <span>📧 hello@luminar.com</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
