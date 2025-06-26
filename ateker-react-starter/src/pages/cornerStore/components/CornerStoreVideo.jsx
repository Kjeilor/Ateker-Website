import React, { useEffect, useState } from "react";
import {
  ShoppingCart,
  PackageCheck,
  CreditCard,
  Truck,
} from "lucide-react";
import CornerStoreVideoFile from "../../../assets/Corner Store/Videos/CornerStoreVideo.mp4";
import "../styles/CornerStoreVideo.scss";

const overlays = [
  {
    icon: <ShoppingCart size={18} />,
    title: "New Order",
    detail: "3 items from Meadow Market",
  },
  {
    icon: <CreditCard size={18} />,
    title: "Payment Received",
    detail: "$45.00 • Contactless",
  },
  {
    icon: <PackageCheck size={18} />,
    title: "Order Ready",
    detail: "Pickup Confirmed — #4832",
  },
  {
    icon: <Truck size={18} />,
    title: "Out for Delivery",
    detail: "Courier: Elias | ETA 10m",
  },
];

const positions = [
  { top: "28%", left: "20%" },
  { top: "50%", left: "65%" },
  { top: "70%", left: "38%" },
  { top: "35%", left: "50%" },
];

const CornerStoreVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % overlays.length);
    }, 5000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="corner-store-video">
      <div className="container">
        <div className="video-wrapper">
          <video
            src={CornerStoreVideoFile}
            autoPlay
            muted
            loop
            playsInline
            className="store-video"
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
              const o = overlays[(currentIndex + i) % overlays.length];
              return (
                <div className="overlay-card glass fade-in" key={i}>
                  {o.icon}
                  <div className="card-content">
                    <h5>{o.title}</h5>
                    <p>{o.detail}</p>
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

export default CornerStoreVideo;
