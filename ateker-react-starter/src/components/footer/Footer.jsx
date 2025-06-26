// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Ateker
            </Link>
            <p className="footer-tagline">
              Decision infrastructure for responsive population centers and institutions.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Products</h4>
              <Link to="/storebook">Storebook</Link>
              <Link to="/channel-blue">Channel Blue</Link>
              <Link to="/sudo-canary">Sudo Canary</Link>
              <Link to="/corner-store">Corner Store</Link>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/newsroom">Newsroom</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/enterprise">Enterprise</Link>
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
