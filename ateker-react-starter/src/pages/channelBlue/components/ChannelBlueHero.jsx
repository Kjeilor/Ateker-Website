// src/pages/channelBlue/components/ChannelBlueHero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Users, Gavel, Mic } from "lucide-react";
import ChannelBlueHeroImg from "../../../assets/Channel Blue/ChannelBlueHero.png";
import "../styles/ChannelBlueHero.scss"

const overlays = [
  {
    id: 0,
    icon: <Mic size={18} />,
    text: "Town Hall: Live Q&A",
    source: "Civic Stream",
    position: { top: "30%", left: "5%" },
  },
  {
    id: 1,
    icon: <Users size={18} />,
    text: "Public Vote Open",
    source: "Issue #203 – Traffic Budget",
    position: { top: "50%", left: "5%" },
  },
  {
    id: 2,
    icon: <Gavel size={18} />,
    text: "Proposal Accepted",
    source: "District Zoning Update",
    position: { top: "70%", left: "5%" },
  },
];

const ChannelBlueHero = () => {
  const [activeOverlay, setActiveOverlay] = useState(0);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOverlay((prev) => (prev + 1) % overlays.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="channelblue-hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Channel Blue</h1>
            <p>
              A public discussion platform built to amplify voices, surface trends,
              and support more responsive governance.
            </p>
            <Link href="/get-notified" className="cta-btn">
              Get Notified
            </Link>
          </div>

          <div className="hero-image">
            <img src={ChannelBlueHeroImg} alt="Channel Blue Hero" />

            {isMobile ? (
              <div className="overlay-stack">
                {overlays.map((item) => (
                  <div key={item.id} className="hero-overlay-glass stacked">
                    <div className="overlay-content">
                      {item.icon}
                      <div>
                        <span>{item.text}</span>
                        <div className="overlay-source">{item.source}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              overlays.map(
                (item, index) =>
                  index === activeOverlay && (
                    <div
                      key={item.id}
                      className="hero-overlay-glass active"
                      style={item.position}
                    >
                      <div className="overlay-content">
                        {item.icon}
                        <div>
                          <span>{item.text}</span>
                          <div className="overlay-source">{item.source}</div>
                        </div>
                      </div>
                    </div>
                  )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelBlueHero;