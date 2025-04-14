import React from "react";

const ScrollIndicator = () => {
  const scrollToNext = () => {
    const next = document.getElementById("section-2");
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-indicator" onClick={scrollToNext}>
      <span>&#x25BC;</span>
    </div>
  );
};

export default ScrollIndicator;
