import React, { useEffect, useState } from "react";

const DotNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = ["home", "section-2", "section-3", "section-4"];

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const positions = sections.map((id) => {
      const el = document.getElementById(id);
      return el ? el.offsetTop : 0;
    });

    const currentIndex = positions.findIndex((pos, i) => {
      const nextPos = positions[i + 1] || Infinity;
      return scrollY >= pos - 10 && scrollY < nextPos - 10;
    });

    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dot-nav">
      {sections.map((id, i) => (
        <div
          key={id}
          className={`dot ${i === activeIndex ? "active" : ""}`}
          onClick={() => scrollToSection(id)}
        ></div>
      ))}
    </div>
  );
};

export default DotNavigation;
