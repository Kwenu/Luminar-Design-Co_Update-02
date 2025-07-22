import React, { useState, useEffect } from 'react';

const DotNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  // All sections in order
  const sections = ['home', 'mission', 'different', 'services', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionLabels = {
    home: "Home",
    work: "Our Work", 
    mission: "Our Mission",
    different: "What Makes Us Different",
    services: "What We Do",
    contact: "Contact Us"
  };

  return (
    <div className="dot-nav">
      {sections.map((section) => (
        <div 
          key={section}
          className={`dot ${activeSection === section ? 'active' : ''}`}
          onClick={() => scrollToSection(section)}
          title={sectionLabels[section]}
        ></div>
      ))}
    </div>
  );
};

export default DotNavigation;
