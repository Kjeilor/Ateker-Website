import React from "react";
import { Link } from "react-router-dom";
import "../styles/ChannelBlueCTA.scss";

const ChannelBlueCTA = () => {
  return (
    <section className="channelblue-cta">
      <div className="container">
        <h2>Channel the voice of your community</h2>
        <p>
          Equip your city with a responsive platform to listen, learn, and act — from high-frequency signals to urgent concerns.
        </p>
        <Link to="/get-notified" className="cta-btn alt">
          Join the Waitlist
        </Link>
      </div>
    </section>
  );
};

export default ChannelBlueCTA;
