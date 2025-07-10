import React from "react";
import IconBubble from "./components/IconBubble";
import { Puzzle, BrainCircuit, CheckCircle } from "lucide-react";
import "./styles/Section2.scss";
import Section2Visual from "./components/Section2Visual";

const dataSteps = [
  {
    title: "Connect the Signals",
    description:
      "Unify real-time data from infrastructure, commerce, and public services to reveal a complete, system-wide view.",
    icon: <Puzzle size={28} strokeWidth={2.2} />,
    color: "blue",
  },
  {
    title: "Simulate the Scenarios",
    description:
      "The Canary Engine models potential futures from your data, revealing risks, outcomes, and priorities to inform critical decisions.",
    icon: <BrainCircuit size={28} strokeWidth={2.2} />,
    color: "green",
  },
  {
    title: "Act with Clarity",
    description:
      "Leverage intuitive dashboards, alerts, and specialized tools for confident, immediate action across all agencies and stakeholders.",
    icon: <CheckCircle size={28} strokeWidth={2.2} />,
    color: "purple",
  },
];

const Section2 = () => {
  return (
    <section className="data-section" id="integration">
      <div className="container">
        <h2>
          Built for the decisions that shape our population centers and
          institutions.
        </h2>
        <p className="section-intro">
          Ateker is an AI-ready ecosystem that integrates real-world signals
          with intelligent tools to deliver actionable insights. Our
          human-in-the-loop approach ensures technology supports critical local
          systems, enhancing service delivery and building stronger local
          economies.
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
