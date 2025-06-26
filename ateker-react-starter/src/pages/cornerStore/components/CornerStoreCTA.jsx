// src/pages/cornerStore/components/CornerStoreCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/CornerStoreCTA.scss";

const CornerStoreCTA = () => (
  <section className="corner-store-cta">
    <div className="container">
      <h2>Support Local. Grow Together.</h2>
      <p>
        Corner Store empowers communities to shop locally with the ease and
        convenience of digital tools — helping neighborhoods thrive.
      </p>
      <Link to="/get-notified" className="cta-btn alt">
        Join the Waitlist
      </Link>
    </div>
  </section>
);

export default CornerStoreCTA;