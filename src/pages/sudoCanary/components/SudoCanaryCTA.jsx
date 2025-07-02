// src/pages/sudoCanary/components/SudoCanaryCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/SudoCanaryCTA.scss";

const SudoCanaryCTA = () => (
  <section className="sudo-canary-cta">
    <div className="container">
    <h2>Build Responsively. Decide Intelligently.</h2>
    <p>
      Sudo Canary enables forward-thinking institutions to test for outcomes before
      acting, reducing risk and improving urban planning.
    </p>
    <Link to="/get-notified" className="cta-btn alt">
      Get Notified
    </Link>
    </div>
  </section>
);

export default SudoCanaryCTA;
