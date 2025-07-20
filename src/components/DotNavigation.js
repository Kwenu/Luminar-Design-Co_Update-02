import React, { useState, useEffect } from 'react';

const DotNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work']; // Add more section IDs as you create them
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

  return (
    <div className="dot-nav">
      <div 
        className={`dot ${activeSection === 'home' ? 'active' : ''}`}
        onClick={() => scrollToSection('home')}
        title="Home"
      ></div>
      <div 
        className={`dot ${activeSection === 'work' ? 'active' : ''}`}
        onClick={() => scrollToSection('work')}
        title="Our Work"
      ></div>
      {/* Add more dots for additional sections */}
    </div>
  );
};

export default DotNavigation;