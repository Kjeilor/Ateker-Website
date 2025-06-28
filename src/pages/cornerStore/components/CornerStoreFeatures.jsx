// src/pages/cornerStore/components/CornerStoreFeatures.jsx
import React from "react";
import { MapPin, ShoppingBasket, Wallet, Users } from "lucide-react";
import "../styles/CornerStoreFeatures.scss";

const features = [
  {
    icon: <MapPin size={28} />,
    title: "Location-Based Listings",
    text: "Products from sellers near you — sorted by distance and availability.",
  },
  {
    icon: <ShoppingBasket size={28} />,
    title: "Frictionless Checkout",
    text: "Mobile-first purchasing with local pickup, delivery, or drop-off.",
  },
  {
    icon: <Wallet size={28} />,
    title: "Seller Tools Included",
    text: "Simple tools to help merchants manage orders, payments, and listings.",
  },
  {
    icon: <Users size={28} />,
    title: "Built for Neighborhoods",
    text: "Designed to foster trust, transparency, and a sense of local ownership.",
  },
];

const CornerStoreFeatures = () => (
  <section className="corner-store-features">
    <div className="container">
      <h2>Built for Local Commerce</h2>
      <div className="features-grid">
        {features.map((feature, i) => (
          <div className="feature-card" key={i}>
            <div className="icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CornerStoreFeatures;
