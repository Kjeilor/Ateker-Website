// src/pages/cornerStore/CornerStore.jsx
import React from "react";
import CornerStoreHero from "./components/CornerStoreHero";
import CornerStoreFeatures from "./components/CornerStoreFeatures";
import CornerStoreVideo from "./components/CornerStoreVideo";
import CornerStoreCTA from "./components/CornerStoreCTA";

const CornerStore = () => {
  return (
    <div className="corner-store-page">
      <CornerStoreHero />
      <CornerStoreFeatures />
      <CornerStoreVideo />
      <CornerStoreCTA />
    </div>
  );
};

export default CornerStore;
