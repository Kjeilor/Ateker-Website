// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";

import Home from "../pages/home/Home.jsx";
import SudoCanary from "../pages/sudoCanary/SudoCanary.jsx";
import HowItWorks from "../pages/howItWorks/HowItWorks.jsx";
import Docs from "../pages/docs/Docs.jsx";
import Unichart from "../pages/unichart/Unichart.jsx";
import Roadmap from "../pages/roadmap/Roadmap.jsx";
import WhitePaper from "../pages/whitePapers/WhitePaper.jsx";
import GetNotified from "../pages/getNotified/GetNotified.jsx";
import About from "../pages/about/About.jsx";
import Pricing from "../pages/pricing/Pricing.jsx";
import Careers from "../pages/careers/Careers.jsx";
import Newsroom from "../pages/newsroom/Newsroom.jsx";
import Enterprise from "../pages/enterprise/Enterprise.jsx";
import Investors from "../pages/investors/Investors.jsx";
import WhatIsNew from "../pages/whatIsNew/WhatIsNew.jsx";
import Terms from "../pages/terms/Terms.jsx";
import Privacy from "../pages/privacy/Privacy.jsx";
import NotFound from "../components/404/NotFound.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="sudo-canary" element={<SudoCanary />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="docs" element={<Docs />} />
      <Route path="roadmap" element={<Roadmap />} />
      <Route path="unichart" element={<Unichart />} />
      <Route path="whitepapers" element={<WhitePaper />} />
      <Route path="get-notified" element={<GetNotified/>} />
      <Route path="careers" element={<Careers />} />
      <Route path="newsroom" element={<Newsroom />} />
      <Route path="enterprise" element={<Enterprise />} />
      <Route path="investors" element={<Investors />} />
      <Route path="what-is-new" element={<WhatIsNew />} />
      <Route path="terms" element={<Terms/>} />
      <Route path="privacy" element={<Privacy/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
 