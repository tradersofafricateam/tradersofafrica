import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import UserAvatar from "../../../../../assets/img/erhun.png";
import "../Dashboard.css";
import { GlobalContext } from "../../../../../components/utils/GlobalState";
import axios from "axios";

const Sidebar = () => {
  const { user } = useContext(GlobalContext);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleSignOut = () => {
    axios
      .get(`/auth/signout`)
      .then((response) => {
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <aside className="sidenav position-fixed">
        <div className="sidenav__close-icon">
          <i className="fas fa-times sidenav__brand-close"></i>
        </div>

        <div className="user-area">
          {user ? (
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 user-area-art">
                {" "}
                {user.fullName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-grow-1 ms-3">
                <p>{Capitalize(user.fullName)}</p>
              </div>
            </div>
          ) : (
            <div> </div>
          )}
        </div>

        <h2 className="sidenav_title">Dashboard</h2>

        <ul class="sidenav__list">
          <li className="sidenav__list-item">
            <Link className="sidenav-link" to="/dashboard">
              <Iconly
                className="list_icon"
                name="Home"
                set="light"
                size="small"
              />
              Overview
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link className="sidenav-link" to="/orders">
              <Iconly
                className="list_icon"
                name="Paper"
                set="light"
                size="small"
              />
              My Orders
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link className="sidenav-link" to="/message-center">
              <Iconly
                className="list_icon position-relative"
                name="Message"
                set="light"
                size="small"
              />
              Message Center
              <span className="icon-notification position-absolute"></span>
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link className="sidenav-link" to="/inquiries">
              <Iconly
                className="list_icon"
                name="Folder"
                set="light"
                size="small"
              />
              My Inquiries
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link className="sidenav-link" to="/settings">
              <Iconly
                className="list_icon"
                name="Setting"
                set="light"
                size="small"
              />
              Settings
            </Link>
          </li>
          <li onClick={handleSignOut} className="sidenav__list-item">
            <Link className="sidenav-link" to="/">
              <Iconly
                className="nav-icon"
                name="Logout"
                set="line"
                size="small"
                style={{ marginRight: "15px" }}
              />
              Logout
            </Link>
          </li>
        </ul>

        <ul class="sidenav__list mt-auto">
          <li className="sidenav__list-item">
            <Link className="sidenav-link" to="/buy-commodities">
              <Iconly
                className="list_icon"
                name="ArrowLeft"
                set="light"
                size="small"
              />
              Back to Buyers Hub
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
