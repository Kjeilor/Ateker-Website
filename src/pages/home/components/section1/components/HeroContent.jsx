import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BarChart3, ScanLine, Users, ArrowRight } from "lucide-react";
import testImage from "../../../../../assets/Home/HeroImage.png";
import "./styles/HeroContent.scss";

const overlays = [
  {
    id: 0,
    icon: <BarChart3 size={20} strokeWidth={2} />,
    text: "Local Business Trends",
    source: "from Channel Blue",
    pulsePosition: { top: "28%", left: "42%" },
    popupPosition: { top: "35%", left: "50%" },
  },
  {
    id: 1,
    icon: <ScanLine size={20} strokeWidth={2} />,
    text: "Simulation Forecast Active",
    source: "from Sudo Canary",
    pulsePosition: { top: "12%", left: "23%" },
    popupPosition: { top: "60%", left: "30%" },
  },
  {
    id: 2,
    icon: <Users size={20} strokeWidth={2} />,
    text: "Community Feedback",
    source: "from Channel Blue",
    pulsePosition: { top: "28%", left: "50%" },
    popupPosition: { top: "25%", left: "60%" },
  },
];

const HeroContent = () => {
  const [activeOverlay, setActiveOverlay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOverlay((prev) => (prev + 1) % overlays.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const current = overlays[activeOverlay];

  return (
    <div className="hero">
      <div className="hro-cont">
        <div className="hro-txt">
          <h1>Intelligence infrastructure for responsive institutions</h1>
          <p>
            Modern institutions exist in complex environments. Ateker builds the
            infrastructure that simplifies them.
          </p>

          <div className="cta-buttons">
            <a href="#products" className="cta-btn cta-primary">
              What We Build
            </a>
            <Link to="/Sudo-Canary" className="cta-btn cta-secondary">
              Sudo Canary
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="hro-img">
          <img src={testImage} alt="Town map" />
          {/* Pulse on map */}
          <div className="hero-pulse" style={current.pulsePosition}></div>

          {/* Overlay for desktop */}
          <div className="hero-overlay-glass" style={current.popupPosition}>
            <div className="overlay-content">
              {current.icon}
              <div>
                <span>{current.text}</span>
                <div className="overlay-source">{current.source}</div>
              </div>
            </div>
          </div>

          {/* Notification overlay for mobile */}
          <div className="hero-overlay-mobile">
            <div className="overlay-content">
              {current.icon}
              <div>
                <span>{current.text}</span>
                <div className="overlay-source">{current.source}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
