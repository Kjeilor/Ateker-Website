import React, { useEffect, useState } from "react";
import {
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  LoaderCircle,
} from "lucide-react";
import StorebookVideoFile from "../../../assets/Storebook/Videos/StorebookVideo.mp4";
import "../styles/StorebookVideo.scss";

const overlays = [
  {
    icon: <CreditCard size={20} />,
    title: "Transaction Processed",
    detail: "$23.50 via Tap-to-Pay",
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "New Order",
    detail: "2 items from Elm Street Bakery",
  },
  {
    icon: <Package size={20} />,
    title: "Order Fulfilled",
    detail: "Ready for pickup — #2348",
  },
  {
    icon: <Truck size={20} />,
    title: "Delivery En Route",
    detail: "ETA 12 mins",
  },
  {
    icon: <LoaderCircle size={20} />,
    title: "Inventory Synced",
    detail: "Low stock: Custom Totes",
  },
];

const StorebookVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle every 5 seconds through overlays
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % overlays.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="storebook-video">
      <div className="container">
        <div className="video-wrapper">
          <video
            src={StorebookVideoFile}
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
              style={
                [
                  { top: "20%", left: "22%" },
                  { top: "50%", left: "65%" },
                  { top: "72%", left: "38%" },
                  { top: "35%", left: "48%" },
                  { top: "60%", left: "20%" },
                ][i]
              }
            >
              {o.icon}
              <div className="card-content">
                <h5>{o.title}</h5>
                <p>{o.detail}</p>
              </div>
            </div>
          ))}

          {/* Mobile stacked notification-style overlays */}
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

export default StorebookVideo;
