// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkSection, setIsDarkSection] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const checkCurrentSection = () => {
//       const scrollPosition = window.scrollY + window.innerHeight / 2;
      
//       // Define your sections and their themes
//       const sections = [
//         { id: 'home', element: document.getElementById('home'), isDark: true },
//         { id: 'mission', element: document.querySelector('.mission-container'), isDark: false },
//         { id: 'different', element: document.getElementById('different'), isDark: true },
//         { id: 'contact', element: document.getElementById('contact'), isDark: true }
//       ];

//       // Find which section we're currently in
//       let currentSection = sections[0]; // Default to home
      
//       sections.forEach(section => {
//         if (section.element) {
//           const { offsetTop, offsetHeight } = section.element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             currentSection = section;
//           }
//         }
//       });

//       // Alternative method: Check by section background color
//       if (!currentSection.element) {
//         // Fallback to checking visible elements
//         const missionSection = document.querySelector('.mission-container');
//         if (missionSection) {
//           const rect = missionSection.getBoundingClientRect();
//           const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
//           if (isVisible) {
//             setIsDarkSection(true);
//             return;
//           }
//         }
//       }

//       setIsDarkSection(currentSection.isDark);
//     };

//     // Check initially
//     checkCurrentSection();

//     // Listen for scroll events
//     const handleScroll = () => {
//       checkCurrentSection();
//     };

//     // Listen for resize events
//     const handleResize = () => {
//       setTimeout(checkCurrentSection, 100);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     window.addEventListener('resize', handleResize);

//     // Also check when DOM changes (for dynamic content)
//     const observer = new MutationObserver(() => {
//       setTimeout(checkCurrentSection, 100);
//     });

//     observer.observe(document.body, { 
//       childList: true, 
//       subtree: true 
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <>
//     </>
//   );
// };

// export default Navbar;