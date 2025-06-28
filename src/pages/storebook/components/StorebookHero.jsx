// src/pages/storebook/components/StorebookHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import StorebookHeroImage from "../../../assets/Storebook/StorebookHero.png";
import "../styles/StorebookHero.scss";

const StorebookHero = () => {
  return (
    <section className="storebook-hero">
      <div className="container">
        <div className="hero-content">
          <div className="text-block">
            <h1>Storebook</h1>
            <p>
              Create a powerful online storefront, no coding or plugins needed.
              A complete, business-ready platform designed for real growth.
            </p>
            <Link to="/get-notified" className="cta-btn">
              Get Started
            </Link>
          </div>
          <div className="hero-image">
            <img
              src={StorebookHeroImage}
              alt="Illustration of Storebook platform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorebookHero;
