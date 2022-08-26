import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Wedo from "./pages/WhatWeDo/WhatWeDo";
import Story from "./pages/Story/Story";
import Impact from "./pages/Impact/Impact";
import Market from "./pages/Market/Market";
import Contact from "./pages/Contact/Contact";
import Academy from "./pages/Academy/Academy";
import BuyerHome from "./pages/BuyerHub/BuyerHubHome";
import Details from "./pages/BuyerHub/pages/Details/Details";
import Dashboard from "./pages/BuyerHub/pages/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/our-story" element={<Story />} exact />
          <Route path="/what-we-do" element={<Wedo />} exact />
          <Route path="/our-impact" element={<Impact />} exact />
          <Route path="/market-intelligence" element={<Market />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/academy" element={<Academy />} exact />
          <Route path="/buyers-hub" element={<BuyerHome />} exact></Route>
          <Route path="/details" element={<Details />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
