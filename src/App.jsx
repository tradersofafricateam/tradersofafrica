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
import Order from "./pages/BuyerHub/pages/Dashboard/Orders/Orders";
import OrderInfo from "./pages/BuyerHub/pages/Dashboard/OrderInfo/OrderInfo";
import MessageCenter from "./pages/BuyerHub/pages/Dashboard/MessageCenter/MessageCenter";
import Inquiries from "./pages/BuyerHub/pages/Dashboard/Inquiries/Inquiries";
import UserSettings from "./pages/BuyerHub/pages/Dashboard/UserSettings/UserSettings";
import BuyerRegistration from "./pages/BuyerHub/BuyerRegistration";
import Login from "./pages/BuyerHub/login";
import ForgotPassword from "./pages/BuyerHub/changePassword/ForgotPassword";
import ResetPassword from "./pages/BuyerHub/changePassword/ResetPassword";
import EmailVerification from "./pages/BuyerHub/emailVerification";
import ProtectedRoutes from "./components/utils/ProtectedRoutes";
import GlobalState from "./components/utils/GlobalState";

import { SkeletonTheme } from "react-loading-skeleton";
import Internet from "./pages/BuyerHub/pages/Internet";

function App() {
  return (
    <SkeletonTheme baseColor="#dddddd" highlightColor="#ffffff">
      <Router>
        <GlobalState>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/our-story" element={<Story />} exact />
            <Route path="/what-we-do" element={<Wedo />} exact />
            <Route path="/our-impact" element={<Impact />} exact />
            <Route path="/market-intelligence" element={<Market />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/academy" element={<Academy />} exact />
            <Route
              path="/buy-commodities"
              element={<BuyerHome />}
              exact
            ></Route>
            <Route exact path="/registration" element={<BuyerRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/:buyerId/:token" element={<Login />} />
            <Route
              path="/passwordreset/:resetToken"
              element={<ResetPassword />}
            />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/verify-email/:email"
              element={<EmailVerification />}
            />
            <Route path="/no-connection" element={<Internet />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} exact />
              <Route path="/order-info" element={<OrderInfo />} exact />
              <Route path="/message-center" element={<MessageCenter />} exact />
              <Route path="/orders" element={<Order />} exact />
              <Route path="/details/:productId" element={<Details />} exact />
              <Route path="/inquiries" element={<Inquiries />} exact />
              <Route path="/settings" element={<UserSettings />} exact />
            </Route>
          </Routes>
        </GlobalState>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
