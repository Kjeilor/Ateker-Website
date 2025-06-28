import React, { useEffect, useState } from "react";
import { Brain, BarChart3, AlertTriangle } from "lucide-react";
import CanaryVideo from "../../../assets/Sudo Canary/video/SudoCanaryVideo.mp4";
import "../styles/SudoCanaryVideo.scss";

const overlays = [
  {
    icon: <Brain size={20} />,
    title: "Scenario Ready",
    detail: "Sim run: Public Transit Optimization",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Model Output",
    detail: "Projected delay reduction: -18%",
  },
  {
    icon: <AlertTriangle size={20} />,
    title: "Risk Flagged",
    detail: "Conflict with infrastructure repair schedule",
  },
];

const positions = [
  { top: "24%", left: "20%" },
  { top: "52%", left: "62%" },
  { top: "70%", left: "35%" },
];

const SudoCanaryVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % overlays.length);
    }, 5000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="sudo-canary-video">
      <div className="container">
        <div className="video-wrapper">
          <video
            src={CanaryVideo}
            autoPlay
            muted
            loop
            playsInline
            className="canary-video"
          />

          {/* Desktop overlays */}
          {overlays.map((o, i) => (
            <div
              key={i}
              className={`overlay-card glass fade-in desktop-only delay-${i + 1}`}
              style={positions[i]}
            >
              {o.icon}
              <div className="card-content">
                <h5>{o.title}</h5>
                <p>{o.detail}</p>
              </div>
            </div>
          ))}

          {/* Mobile stacked overlays */}
          <div className="overlay-stack mobile-only">
            {[...Array(3)].map((_, i) => {
              const o = overlays[(currentIndex + i) % overlays.length];
              return (
                <div key={i} className="overlay-card glass fade-in">
                  {o.icon}
                  <div className="card-content">
                    <h5>{o.title}</h5>
                    <p>{o.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SudoCanaryVideo;
