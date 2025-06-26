// src/pages/home/components/section2/components/Section2Visual.jsx
import React from "react";
import "./Section2Visual.scss";
import cityVideo from "../../../../../assets/Videos/HomeVideo.mp4";

import { Wrench, BrainCircuit, AlertCircle } from "lucide-react";

const Section2Visual = () => {
  return (
    <div className="section2-visual">
      <div className="video-container">
        <video autoPlay muted loop playsInline className="city-video">
          <source src={cityVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Widget: City Maintenance */}
        <div
          className="overlay glass fade-in delay-1"
          style={{ top: "28%", left: "22%" }}
        >
          <div className="overlay-header">
            <Wrench size={18} strokeWidth={2} className="overlay-icon" />
            <h4 className="overlay-title">Road Maintenance</h4>
          </div>
          <p className="overlay-sub">124 Grand Ave – Zone 3</p>
          <div className="status-container">
            <div className="status-bar">
              <div className="status-fill" style={{ width: "64%" }}></div>
            </div>
            <span className="progress">64%</span>
          </div>

          <p className="overlay-note">
            Live Update: Uneven asphalt — crew rerouted to northern lane.
          </p>
        </div>

        {/* Canary Analysis */}
        <div
          className="overlay glass fade-in delay-2"
          style={{ top: "60%", left: "65%" }}
        >
          <div className="overlay-header">
            <BrainCircuit size={18} strokeWidth={2} className="overlay-icon" />
            <h4 className="overlay-title">Sudo Canary Report</h4>
          </div>
          <p className="overlay-sub">Commercial District Analysis</p>
          <p className="overlay-detail">
            Projected ROI: <strong>↑ 18.7%</strong> | Foot Traffic: High
          </p>
        </div>

        {/* Emergency Alert */}
        <div
          className="overlay glass fade-in delay-3"
          style={{ top: "72%", left: "38%" }}
        >
          <div className="overlay-header">
            <AlertCircle size={18} strokeWidth={2} className="overlay-icon" />
            <h4 className="overlay-title">Priority Alerts</h4>
          </div>
          <p className="overlay-sub">District 7</p>
          <p className="overlay-detail">3 emergency reports active</p>
        </div>
      </div>

      <div className="visual-description">
        <h3>From Streets to Systems</h3>
        <p>
          Ateker uses real-world data to surface emerging priorities: live
          alerts, infrastructure progress, and system-generated recommendations
          delivered directly where action is needed.
        </p>
      </div>
    </div>
  );
};

export default Section2Visual;
