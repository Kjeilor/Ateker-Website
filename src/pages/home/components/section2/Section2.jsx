import React from "react";
import IconBubble from "./components/IconBubble";
import { Puzzle, BrainCircuit, CheckCircle } from "lucide-react";
import "./styles/Section2.scss";
import Section2Visual from "./components/Section2Visual";

const dataSteps = [
  {
    title: "Connect the Signals",
    description:
      "Ingest real-time data from infrastructure, commerce, and public services — unifying what's happening across the system.",
    icon: <Puzzle size={28} strokeWidth={2.2} />,
    color: "blue",
  },
  {
    title: "Simulate the Scenarios",
    description:
      "The Canary Engine models potential futures from your data — revealing risks, outcomes, and priorities before decisions are made.",
    icon: <BrainCircuit size={28} strokeWidth={2.2} />,
    color: "green",
  },
  {
    title: "Act with Clarity",
    description:
      "Dashboards, alerts, and tools designed for confident, immediate action across agencies and stakeholders.",
    icon: <CheckCircle size={28} strokeWidth={2.2} />,
    color: "purple",
  },
];

const Section2 = () => {
  return (
    <section className="data-section" id="integration">
      <div className="container">
        <h2>
          Built for the decisions that shape our population centers and institutions
        </h2>
        <p className="section-intro">
          Ateker integrates with the systems that support our urban infrastructure, models
          outcomes, reveals risk, improving service delivery, and supporting
          better decisions through real-time insight.
        </p>

        <div className="data-flow-cards">
          {dataSteps.map((step, index) => (
            <div className="data-card" key={index}>
              <IconBubble icon={step.icon} color={step.color} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <Section2Visual />
      </div>
    </section>
  );
};

export default Section2;