// src/pages/home/components/section3/Section3.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Truck, Megaphone, CheckCircle, Package } from "lucide-react";

import storebookImg from "../../../../assets/Home/storebook-image.jpg";
import channelBlueImg from "../../../../assets/Home/channel-blue-image.jpg";
import sudoCanaryImg from "../../../../assets/Home/sudo-canary-image.jpg";
import cornerStoreImg from "../../../../assets/Home/corner-store-image.jpg";

import "./styles/Section3.scss";

const products = [
  {
    id: "sudo-canary",
    name: "Sudo Canary",
    tagline: "Simulate the Future. Govern Smarter.",
    description:
      "Sudo Canary is a predictive simulation engine for population centers. It weighs live data across infrastructure and institutions to model impact, explore scenarios, and guide better decisions.",
    image: sudoCanaryImg,
    overlay: {
      icon: <CheckCircle size={16} />,
      text: "Simulation Successful",
    },
  },
  {
    id: "channel-blue",
    name: "Channel Blue",
    tagline: "Make the Local Conversation Visible.",
    description:
      "Channel Blue acts as a virtual town square, aiming to capture community feedback, local interactions, and public sentiment to surface the trends that matter most to institutions and residents alike.",
    image: channelBlueImg,
    overlay: {
      icon: <Megaphone size={16} />,
      text: "Vote on Community Action",
    },
  },
  {
    id: "storebook",
    name: "Storebook",
    tagline: "Give Small Businesses a Digital Edge.",
    description:
      "Storebook provides plug-and-play online infrastructure for local businesses, lowering the barrier to digital commerce while feeding key data into broader decision systems.",
    image: storebookImg,
    overlay: {
      icon: <Truck size={16} />,
      text: "Order Fulfilled",
    },
  },
  {
    id: "corner-store",
    name: "Corner Store",
    tagline: "Facilitate Local Trade. Strengthen Local Economies.",
    description:
      "Corner Store is a community-first digital marketplace connecting buyers with nearby merchants, while enabling circular economies and giving residents more control over how and where they shop.",
    image: cornerStoreImg,
    overlay: {
      icon: <Package size={16} />,
      text: "Order Shipped",
    },
  },
];

const Section3 = () => {
  return (
    <section className="suite-section" id="products">
      <div className="container">
        <h2>Product Suite</h2>
        <p className="suite-subtitle">
          Building the decision infrastructure for responsive, data-powered
          population centers and institutions.
        </p>

        <div className="suite-list">
          {products.map((product, index) => (
            <div
              className={`suite-item ${index % 2 !== 0 ? "reverse" : ""}`}
              key={product.id}
            >
              <div className="suite-image">
                <img src={product.image} alt={`${product.name} visual`} />
                <div className="product-overlay">
                  {product.overlay.icon}
                  <span>{product.overlay.text}</span>
                </div>
              </div>
              <div className="suite-content">
                <h3>{product.name}</h3>
                <h4>{product.tagline}</h4>
                <p>{product.description}</p>
                <Link to={`/${product.id}`} className="learn-more-btn">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
