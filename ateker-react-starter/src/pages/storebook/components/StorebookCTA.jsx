// src/pages/storebook/components/StorebookCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/StorebookImpact.scss";

const StorebookCTA = () => (
  <section className="storebook-impact">
    <div className="container">
      <h2>Turn foot traffic into online growth</h2>
      <p>
        Storebook gives brick-and-mortar businesses a robust online presence —
        connecting you with customers, streamlining operations, and providing
        insights that fuel smarter growth.
      </p>
      <Link to="/get-notified" className="cta-btn alt">
        Join the Waitlist
      </Link>
    </div>
  </section>
);

export default StorebookCTA;
