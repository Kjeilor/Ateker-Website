// src/pages/sudoCanary/components/SudoCanaryFeatures.jsx
import React from "react";
import { BrainCog, Map, BarChart3, Settings2 } from "lucide-react";
import "../styles/SudoCanaryFeatures.scss";

const features = [
  {
    icon: <BrainCog size={28} />,
    title: "Predictive Modeling",
    desc: "Simulate different courses of action and understand projected outcomes using real-world data.",
  },
  {
    icon: <Map size={28} />,
    title: "Geospatial Insights",
    desc: "Overlay simulations on geographic areas to support region-specific planning and action.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Data-Driven Decisions",
    desc: "Leverage analytics to compare impact scenarios and recommend optimal strategies.",
  },
  {
    icon: <Settings2 size={28} />,
    title: "Scenario Customization",
    desc: "Adjust variables to reflect evolving conditions and policy goals at any time.",
  },
];

const SudoCanaryFeatures = () => (
  <section className="sudo-canary-features">
    <div className="container">
      <h2>Designed for Decision-Makers</h2>
      <p className="subtitle">Tools to model, simulate, and plan at scale.</p>
      <div className="features-grid">
        {features.map((item, i) => (
          <div className="feature-card" key={i}>
            {item.icon}
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SudoCanaryFeatures;
