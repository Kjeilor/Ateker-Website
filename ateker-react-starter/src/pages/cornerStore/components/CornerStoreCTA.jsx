// src/pages/cornerStore/components/CornerStoreCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/CornerStoreCTA.scss";

const CornerStoreCTA = () => (
  <section className="corner-store-cta">
    <div className="container">
      <h2>Support Local. Grow Together.</h2>
      <p>
        Corner Store helps neighborhoods thrive by empowering communities to
        shop online, locally, with convenient digital tools.
      </p>
      <Link to="/get-notified" className="cta-btn alt">
        Join the Waitlist
      </Link>
    </div>
  </section>
);

export default CornerStoreCTA;
