import React from "react";
import "../CSS/slidtext.css";

export default function Sliding() {
  const items = ["Wedding Ceremony", "Engagement Ceremony", "Corporate Conferences & Meeting", "Reception Ceremony", "Sangeet Ceremony","Out Door Decorations"];

  const lotusIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#E7A9A2"
      strokeWidth="2"
      className="lotus-icon"
    >
      <path d="M32 2C32 14 18 24 18 36s6 20 14 20 14-8 14-20S46 14 32 2z" />
    </svg>

    
    
  );

  

  const renderedItems = items.map((text, index) => (
    <div className="slider-item" key={index}>
      <span>{text}</span>
      {lotusIcon}
    </div>
  ));

  return (
    <div className="slider-wrapper">
      <div className="slider-content">
        <div className="scroll-track">
          {renderedItems}
          {renderedItems}
          {renderedItems}
        </div>
      </div>
    </div>
  );
}