// src/pages/about/About.jsx
import React from "react";
import AboutHero from "./components/AboutHero";
import AboutValues from "./components/AboutValues";
import AboutTimeline from "./components/AboutTimeline";
import "./styles/About.scss";

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutValues />
      <AboutTimeline />
    </div>
  );
};

export default About;