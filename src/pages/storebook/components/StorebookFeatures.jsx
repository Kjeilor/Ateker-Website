// src/pages/storebook/components/StorebookFeatures.jsx
import React from "react";
import { Wrench, Globe, Briefcase, BarChart3 } from "lucide-react";
import "../styles/StorebookFeatures.scss";

const StorebookFeatures = () => (
  <section className="storebook-features">
    <div className="container">
      <h2>Built for Small Businesses</h2>
      <p className="features-subtitle">
        Tools for solopreneurs, local merchants, and physical storefronts.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <Wrench size={32} />
          <h4>No-Code Setup</h4>
          <p>Launch your online presence in minutes without writing a line of code.</p>
        </div>
        <div className="feature-card">
          <Globe size={32} />
          <h4>Built-In Web Presence</h4>
          <p>Get a storefront, order system, and branded landing page — no plugins needed.</p>
        </div>
        <div className="feature-card">
          <Briefcase size={32} />
          <h4>Inventory & Fulfillment</h4>
          <p>Track orders, restock products, and fulfill purchases from a single dashboard.</p>
        </div>
        <div className="feature-card">
          <BarChart3 size={32} />
          <h4>Actionable Insights</h4>
          <p>Understand customer behavior with built-in analytics and smart reporting.</p>
        </div>
      </div>
    </div>
  </section>
);

export default StorebookFeatures;
