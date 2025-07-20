import React, { useState, useEffect } from "react";
import Logo from "../assets/logo2.png";
import HomePage from "./HomePage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

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
        <div className={`nav-overlay ${isOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={closeMenu}>x</button>
          <div className="logo">
            <a href="#home" onClick={closeMenu}>
              <img src={Logo} alt="Luminar" />
            </a>
          </div> 
          <ul className="nav-menu">
            <li><a href={HomePage} onClick={closeMenu}>Home</a></li>
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
