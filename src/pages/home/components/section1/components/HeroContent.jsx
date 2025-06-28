import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BarChart3, ScanLine, Users } from "lucide-react";
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
          <h1>Smarter cities start with smarter decisions.</h1>
          <p>
            Ateker builds the software infrastructure for responsive population
            centers, where every decision is backed by data, simulation, and
            intelligence.
          </p>

          <Link to="/get-notified" className="cta-btn">
            Get Notified
          </Link>
        </div>

        <div className="hro-img">
          <img src={testImage} alt="Town map" />
          {/* Pulse on map */}
          <div className="hero-pulse" style={current.pulsePosition}></div>

          {/* Overlay for desktop */}
          <div
            className="hero-overlay-glass"
            style={current.popupPosition}
          >
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
