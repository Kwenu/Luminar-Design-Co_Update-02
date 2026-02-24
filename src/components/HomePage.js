import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DotNavigation from "./DotNavigation";
import Particles from "./Particles";
import OurMission from "./OurMission";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import WhatWeDo from "./WhatWeDo";
import ContactUs from "./ContactUs";
import "../styles.css";
import Logo from "../assets/Rulers.png";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "services"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });

      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="redesign-container">
      <div className="main-section">
        <div className="logo-section">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        {/* <nav className="main-nav">
          <a
            href="#home"
            onClick={() => scrollToSection("home")}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => scrollToSection("about")}
            className={activeSection === "about" ? "active" : ""}
          >
            About Us
          </a>
          <a
            href="#work"
            onClick={() => scrollToSection("work")}
            className={activeSection === "work" ? "active" : ""}
          >
            Our Work
          </a>
          <a
            href="#services"
            onClick={() => scrollToSection("services")}
            className={activeSection === "services" ? "active" : ""}
          >
            Our Services
          </a>
        </nav> */}

        <div className="contact-info">
          <span className="contact-label">GET IN TOUCH</span>
          <a href="tel:1300456345" className="phone-number">
            <span className="phone-icon"><i className="fas fa-phone"></i></span> 1300 456 345
          </a>
        </div>

        {/* Dot Navigation */}
        <div className="dot-navigation">
          {["home", "about", "work", "services"].map((section, index) => (
            <div
              key={section}
              className={`nav-dot ${activeSection === section ? "active" : ""}`}
              onClick={() => scrollToSection(section)}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content-wrapper">
            <div className="hero-image-section">
            </div>

            <div className="hero-text-section">
              <h1 className="hero-title">
                The Premier web design and <br /> software development agency for <br />
                thriving brands.
              </h1>
              <p className="hero-description">
                At Luminar, we're a passionate team of designers, <br /> developers,
                and digital strategists committed to <br /> helping small businesses
                thrive online.
              </p>
              <button
                className="cta-button"
                onClick={() => scrollToSection("services")}
              >
                BOOK A FREE CONSULTATION
              </button>
            </div>
          </div>
        </section>
      </div>
      <section id="mission" className="section">
        <div className="gradient-background">
          <div className="grid-overlay"></div>
          <div className="noise-overlay"></div>
        </div>
        <OurMission />
        <Particles />
      </section>
      <section id="different" className="section">
        <div className="gradient-background">
          <div className="grid-overlay"></div>
          <div className="noise-overlay"></div>
        </div>
        <WhatMakesUsDifferent />
        <Particles />
      </section>
      <section id="contact" className="section">
        <div className="gradient-background">
          <div className="grid-overlay"></div>
          <div className="noise-overlay"></div>
        </div>
        <ContactUs />
        <Particles />
      </section>
    </div>
  );
};

export default HomePage;
