// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CanvasBackground from "../canvas/CanvasBackground";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToTop from "../scroll /ScrollToTop";

import "./layout.scss";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="layout">
      {isHome && <CanvasBackground />}
      <Header />
      <main className="display">
        <ScrollToTop />
        <Outlet className="outlets"/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
