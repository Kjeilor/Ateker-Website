// src/pages/about/components/AboutValues.jsx
import React from "react";
import { Users, Globe, Brain, Heart } from "lucide-react";
import "../styles/AboutValues.scss";

const values = [
  {
    icon: <Users size={28} />,
    title: "Community-Centered",
    description: "Our platforms are built to elevate voices, businesses, and institutions that shape local life.",
  },
  {
    icon: <Brain size={28} />,
    title: "Intelligent by Design",
    description: "We integrate predictive engines and real-time data to drive proactive, informed action.",
  },
  {
    icon: <Globe size={28} />,
    title: "Infrastructure-Driven",
    description: "We build systems that integrate with and strengthen existing civic and economic foundations.",
  },
  {
    icon: <Heart size={28} />,
    title: "Long-Term Value",
    description: "We’re committed to solutions that create lasting impact across generations.",
  },
];

const AboutValues = () => {
  return (
    <section className="about-values">
      <div className="container">
        <h2>Our Values</h2>
        <div className="values-grid">
          {values.map((value, i) => (
            <div className="value-card" key={i}>
              <div className="icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
