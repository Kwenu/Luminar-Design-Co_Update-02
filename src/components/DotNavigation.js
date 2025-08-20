import React, { useState, useEffect } from "react";

const DotNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkSection, setIsDarkSection] = useState(false);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'mission', name: 'Mission' },
    { id: 'different', name: 'Different' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    const checkCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Define your sections and their themes
      const sectionConfigs = [
        { id: 'home', element: document.getElementById('home'), isDark: true },
        { id: 'mission', element: document.querySelector('.mission-container'), isDark: false },
        { id: 'different', element: document.getElementById('different'), isDark: true },
        { id: 'contact', element: document.getElementById('contact'), isDark: true }
      ];

      // Find which section we're currently in
      let currentSection = sectionConfigs[0]; // Default to home
      
      sectionConfigs.forEach(section => {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      });

      // Alternative method: Check by section background color
      if (!currentSection.element) {
        // Fallback to checking visible elements
        const missionSection = document.querySelector('.mission-container');
        if (missionSection) {
          const rect = missionSection.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          if (isVisible) {
            setIsDarkSection(true);
            setActiveSection('mission');
            return;
          }
        }
      }

      setIsDarkSection(currentSection.isDark);
      setActiveSection(currentSection.id);
    };

    // Check initially
    checkCurrentSection();

    // Listen for scroll events
    const handleScroll = () => {
      checkCurrentSection();
    };

    // Listen for resize events
    const handleResize = () => {
      setTimeout(checkCurrentSection, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Also check when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      setTimeout(checkCurrentSection, 100);
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`dot-nav ${isDarkSection ? 'dot-nav-light' : 'dot-nav-dark'}`}>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`dot ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          title={section.name}
        />
      ))}
    </div>
  );
};

export default DotNavigation;