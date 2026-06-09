// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Ateker Logo (white).png";
import "./footer.scss";
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Ateker" className="footer-logo__img" />
            </Link>
            <p className="footer-tagline">
              Systems infrastructure for human-centered institutions.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Products</h4>
              <Link to="/sudo-canary">Sudo Canary</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/docs">Docs</Link>
              <Link to="/unichart">Unichart</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/enterprise">Enterprise</Link>
            </div>
            <div className="link-group">
              <h4>Research</h4>
              <Link to="/roadmap">Roadmap</Link>
              <Link to="/whitepapers">Whitepapers</Link>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/newsroom">Newsroom</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/investors">Investors</Link>
              <Link to="/what-is-new">What Is New</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ateker. All rights reserved.</p>
          <div className="policy-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
