// src/pages/sudoCanary/SudoCanary.jsx
import React from "react";
import SudoCanaryHero from "./components/SudoCanaryHero";
import SudoCanaryFeatures from "./components/SudoCanaryFeatures";
import SudoCanaryVideo from "./components/SudoCanaryVideo";
import SudoCanaryCTA from "./components/SudoCanaryCTA";

const SudoCanary = () => (
  <div className="sudo-page">
    <SudoCanaryHero />
    <SudoCanaryFeatures />
    <SudoCanaryVideo />
    <SudoCanaryCTA />
  </div>
);

export default SudoCanary;
