// src/pages/cornerStore/components/CornerStoreHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import CornerStoreImg from "../../../assets/Corner Store/Corner Store Hero.png";
import "../styles/CornerStoreHero.scss";

const CornerStoreHero = () => (
  <section className="corner-store-hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Corner Store</h1>
          <p>Connect local buyers and sellers in a shared digital economy.</p>
          <Link to="/get-notified" className="cta-btn">
            Join the Waitlist
          </Link>
        </div>
        <div className="hero-image">
          <img src={CornerStoreImg} alt="Corner Store Hero" />
        </div>
      </div>
    </div>
  </section>
);

export default CornerStoreHero;
