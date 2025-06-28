// src/pages/storebook/Storebook.jsx
import React from "react";
import StorebookHero from "./components/StorebookHero";
import StorebookFeatures from "./components/StorebookFeatures";
import StorebookVideo from "./components/StorebookVideo";
import StorebookCTA from "./components/StorebookCTA";

const Storebook = () => {
  return (
    <div className="storebook-page">
      <StorebookHero />
      <StorebookFeatures />
      <StorebookVideo />
      <StorebookCTA />
    </div>
  );
};

export default Storebook;
