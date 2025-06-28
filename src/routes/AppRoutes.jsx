// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";

import Home from "../pages/home/Home.jsx";
import ChannelBlue from "../pages/channelBlue/ChannelBlue.jsx";
import Storebook from "../pages/storebook/Storebook.jsx";
import SudoCanary from "../pages/sudoCanary/SudoCanary.jsx";
import CornerStore from "../pages/cornerStore/CornerStore.jsx";
import GetNotified from "../pages/getNotified/GetNotified.jsx";
import About from "../pages/about/About.jsx";
import Pricing from "../pages/pricing/Pricing.jsx";
import Careers from "../pages/careers/Careers.jsx";
import Newsroom from "../pages/newsroom/Newsroom.jsx";
import Enterprise from "../pages/enterprise/Enterprise.jsx";
import Terms from "../pages/terms/Terms.jsx";
import Privacy from "../pages/privacy/Privacy.jsx";
import NotFound from "../components/404/NotFound.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="channel-blue" element={<ChannelBlue />} />
      <Route path="storebook" element={<Storebook />} />
      <Route path="sudo-canary" element={<SudoCanary />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="corner-store" element={<CornerStore />} />
      <Route path="get-notified" element={<GetNotified/>} />
      <Route path="careers" element={<Careers />} />
      <Route path="newsroom" element={<Newsroom />} />
      <Route path="enterprise" element={<Enterprise />} />
      <Route path="terms" element={<Terms/>} />
      <Route path="privacy" element={<Privacy/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
