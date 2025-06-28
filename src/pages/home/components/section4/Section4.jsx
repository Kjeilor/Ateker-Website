import React from "react";
import { Link } from "react-router-dom";
import "./styles/Section4.scss";

const Section4 = () => {
  return (
    <section className="cta-section" id="get-notified">
      <div className="container">
        <h2>Stay Informed. Shape the Future.</h2>
        <p className="cta-subtitle">
          Be the first to know when Ateker launches new tools that help population centers and institutions make smarter, data-driven decisions.
        </p>
        <Link to="/get-notified" className="cta-button">
          Get Notified
        </Link>
      </div>
    </section>
  );
};

export default Section4;

