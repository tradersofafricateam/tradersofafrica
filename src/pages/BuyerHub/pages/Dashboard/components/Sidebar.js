import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../Dashboard.css";
import { GlobalContext } from "../../../../../components/utils/GlobalState";
import { axiosInstance } from "./../../../../../components/axios";
import Logo from "../../../../../assets/img/logo-white.png";

const Sidebar = ({ isActive }) => {
  const { user, userLoading, setUser } = useContext(GlobalContext);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleSignOut = () => {
    axiosInstance
      .get(`/auth/signout`)
      .then((response) => {
        setUser(null);
        localStorage.setItem("user", false);
        localStorage.removeItem("joinedAt");
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  if (userLoading) {
    return <div className="loader mx-auto" align="center" id="loader"></div>;
  }

  return (
    <>
      <aside className={isActive ? "media-sidenav" : "sidenav"} id="main-sidebar">
        <div className="sidenav__close-icon">
          <i className="fas fa-times sidenav__brand-close"></i>
        </div>

        <div className="d-logo-area mb-3">
          <img className="logo" src={Logo} alt="TOFA" />
        </div>

        {/* <h2 className="sidenav_title">Dashboard</h2> */}

        <ul className="sidenav__list">
          <Link className="sidenav-link" to="/dashboard">
            <li className="sidenav__list-item">
              <i className="fas fa-home list_icon"></i>
              Overview
            </li>
          </Link>

          <Link className="sidenav-link" to="/orders">
            <li className="sidenav__list-item">
              <i className="fas fa-shopping-cart list_icon"></i>
              My Orders
            </li>
          </Link>

          <Link className="sidenav-link" to="/message-center">
            <li className="sidenav__list-item">
              <i className="fas fa-envelope list_icon position-relative"></i>
              Message Center
              <span className="icon-notification position-absolute"></span>
            </li>
          </Link>

          <Link className="sidenav-link" to="/inquiries">
            <li className="sidenav__list-item">
              <i className="fas fa-sticky-note list_icon"></i>
              My Inquiries
            </li>
          </Link>

          <Link className="sidenav-link" to="/settings">
            <li className="sidenav__list-item">
              <i className="fas fa-cog list_icon"></i>
              Settings
            </li>
          </Link>

          <Link className="sidenav-link" to="/buy-commodities">
            <li className="sidenav__list-item">
              <i className="fas fa-arrow-left list_icon"></i>
              Buyers Hub
            </li>
          </Link>
        </ul>

        <ul className="sidenav__list mt-auto">
          
          <Link className="sidenav-link" to="/">
            <li onClick={handleSignOut} className="sidenav__list-item">
              <i className="fas fa-sign-out-alt list_icon"></i>
              Logout
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
