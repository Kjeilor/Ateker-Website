// src/pages/sudoCanary/components/SudoCanaryHero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Radar, AlertTriangle, Activity } from "lucide-react";
import SudoCanaryImg from "../../../assets/Sudo Canary/SudoCanaryHero.png";
import "../styles/SudoCanaryHero.scss";

const overlays = [
  {
    id: 0,
    icon: <Radar size={18} />,
    title: "Simulation Active",
    description: "Downtown traffic pattern update",
    gridStyle: { top: "30%", left: "20%" },
    cardStyle: { top: "80%", left: "10%" },
  },
  {
    id: 1,
    icon: <Activity size={18} />,
    title: "Live Feedback",
    description: "Utility usage spike detected",
    gridStyle: { top: "30%", left: "70%" },
    cardStyle: { top: "80%", left: "10%" },
  },
  {
    id: 2,
    icon: <AlertTriangle size={18} />,
    title: "Risk Detected",
    description: "Delay forecast in zoning update",
    gridStyle: { top: "60%", left: "45%" },
    cardStyle: { top: "80%", left: "10%" },
  },
];

const SudoCanaryHero = () => {
  const [activeOverlay, setActiveOverlay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOverlay((prev) => (prev + 1) % overlays.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sudo-canary-hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sudo Canary</h1>
            <p>Simulate outcomes. Guide decisions. Build smarter cities.</p>
            <Link to="/get-notified" className="cta-btn">
              Get Notified
            </Link>
          </div>

          <div className="hero-image">
            <img src={SudoCanaryImg} alt="Sudo Canary Map" />

            {/* Grid Zone */}
            {overlays.map((item, i) => (
              <div
                key={`zone-${item.id}`}
                className="grid-zone"
                style={item.gridStyle}
              />
            ))}

            {/* Card Overlay */}
            {overlays.map(
              (item, i) =>
                i === activeOverlay && (
                  <div
                    className="hero-overlay-card glass"
                    key={item.id}
                    style={item.cardStyle}
                  >
                    {item.icon}
                    <div className="card-text">
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SudoCanaryHero;



