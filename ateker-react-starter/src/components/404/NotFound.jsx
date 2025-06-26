// src/components/404/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import "./styles/NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="icon-wrap">
          <AlertTriangle size={48} strokeWidth={2.5} />
        </div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn’t exist or was moved.</p>
        <Link to="/" className="cta-btn">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
