// src/pages/about/components/AboutHero.jsx
import React from "react";
import aboutVideo from "../../../assets/About/About-bg.mp4";
import "../styles/AboutHero.scss";

const AboutHero = () => {
  return (
    <section className="about-hero">
      {/* Background video */}
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlayed content */}
      <div className="hero-overlay">
        <div className="container">
          <h1>Shaping the future of data-powered decision infrastructure</h1>
          <p>
            Ateker builds software that supports population centers and institutions
            in acting smarter, faster, and with greater foresight by utilizing real-time
            data and simulation to make decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
