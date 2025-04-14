import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar" onClick={toggleMenu}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isOpen && (
        <div className="nav-overlay">
          <button className="close-btn" onClick={closeMenu}>X</button>
          <ul className="nav-menu">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#work" onClick={closeMenu}>Our Work</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
