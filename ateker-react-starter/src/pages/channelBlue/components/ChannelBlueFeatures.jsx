import React from "react";
import {
  MessageSquare,
  Users,
  Megaphone,
  BarChart2,
} from "lucide-react";
import "../styles/ChannelBlueFeatures.scss";

const features = [
  {
    icon: <MessageSquare size={32} />,
    title: "Open Feedback",
    text: "Gather real-time sentiment and structured feedback from your community.",
  },
  {
    icon: <Users size={32} />,
    title: "Inclusive Engagement",
    text: "Reach underserved voices and track engagement across neighborhoods.",
  },
  {
    icon: <Megaphone size={32} />,
    title: "Actionable Signals",
    text: "Identify trends, urgent concerns, and opportunities for outreach.",
  },
  {
    icon: <BarChart2 size={32} />,
    title: "Sentiment Insights",
    text: "Visualize public opinion with geographic and thematic breakdowns.",
  },
];

const ChannelBlueFeatures = () => {
  return (
    <section className="channelblue-features">
      <div className="container">
        <h2>Built for Civic Engagement</h2>
        <p className="features-subtitle">
          Tools for listening, responding, and making local voices count.
        </p>
        <div className="features-grid">
          {features.map((feat, idx) => (
            <div className="feature-card" key={idx}>
              {feat.icon}
              <h4>{feat.title}</h4>
              <p>{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelBlueFeatures;
