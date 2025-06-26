import React, { useEffect, useState } from "react";
import {
  Users,
  Mic,
  MessagesSquare,
  Gavel,
  ThumbsUp,
} from "lucide-react";
import ChannelBlueVideoFile from "../../../assets/Channel Blue/Videos/ChannelBlueVideo.mp4";
import "../styles/ChannelBlueVideo.scss";

const overlays = [
  {
    icon: <Mic size={20} />,
    title: "Town Hall Started",
    detail: "Moderator: C. Dela Cruz",
  },
  {
    icon: <Gavel size={20} />,
    title: "Policy Vote Open",
    detail: "Proposal #04: Street Vendors Act",
  },
  {
    icon: <MessagesSquare size={20} />,
    title: "Feedback Collected",
    detail: "87 community comments logged",
  },
  {
    icon: <Users size={20} />,
    title: "Group Discussion",
    detail: "Residents in South District engaged",
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "Poll Concluded",
    detail: "86% approval on proposal #03",
  },
];

const positions = [
  { top: "25%", left: "15%" },
  { top: "50%", left: "60%" },
  { top: "70%", left: "30%" },
  { top: "40%", left: "45%" },
  { top: "62%", left: "20%" },
];

const ChannelBlueVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % overlays.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="channel-blue-video">
      <div className="container">
        <div className="video-wrapper">
          <video
            src={ChannelBlueVideoFile}
            autoPlay
            muted
            loop
            playsInline
            className="channel-video"
          />

          {/* Desktop overlays */}
          {overlays.map((o, i) => (
            <div
              key={i}
              className={`overlay-card glass fade-in desktop-only delay-${i + 1}`}
              style={positions[i]}
            >
              {o.icon}
              <div className="card-content">
                <h5>{o.title}</h5>
                <p>{o.detail}</p>
              </div>
            </div>
          ))}

          {/* Mobile stacked overlays */}
          <div className="overlay-stack mobile-only">
            {[...Array(3)].map((_, i) => {
              const item = overlays[(currentIndex + i) % overlays.length];
              return (
                <div className="overlay-card glass fade-in" key={i}>
                  {item.icon}
                  <div className="card-content">
                    <h5>{item.title}</h5>
                    <p>{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelBlueVideo;
