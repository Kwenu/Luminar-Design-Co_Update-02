import React from "react";

const Section = ({ id, color, title }) => {
  return (
    <div id={id} className="scroll-section" style={{ backgroundColor: color }}>
      <h2>{title}</h2>
    </div>
  );
};

export default Section;
