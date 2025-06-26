// src/components/IconBubble.jsx
import React from "react";
import "./IconBubble.scss";

const IconBubble = ({ icon, color = "blue" }) => {
  return (
    <div className={`icon-circle animate-in ${color}`}>
      <span>{icon}</span>
    </div>
  );
};

export default IconBubble;
