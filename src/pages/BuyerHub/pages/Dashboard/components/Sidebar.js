import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "../Dashboard.css";
import { GlobalContext } from "../../../../../components/utils/GlobalState";
import axios from "axios";

const Sidebar = ({ isActive }) => {
  const { user, userLoading, setUser } = useContext(GlobalContext);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleSignOut = () => {
    axios
      .get(`/auth/signout`)
      .then((response) => {
        setUser(null);
        localStorage.setItem("user", false);
        localStorage.removeItem("joinedAt");
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
      <aside className={isActive ? "media-sidenav" : "sidenav"}>
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
                {user.fullName.length > 15 ? (
                  <p>{Capitalize(user.fullName.slice(0, 15))}...</p>
                ) : (
                  <p>{Capitalize(user.fullName)}</p>
                )}
              </div>
            </div>
          ) : (
            <div> </div>
          )}
        </div>

        <h2 className="sidenav_title">Dashboard</h2>

        <ul className="sidenav__list">
          <Link className="sidenav-link" to="/dashboard">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Home"
                set="light"
                size="small"
              />
              Overview
            </li>
          </Link>

          <Link className="sidenav-link" to="/orders">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Paper"
                set="light"
                size="small"
              />
              My Orders
            </li>
          </Link>

          <Link className="sidenav-link" to="/message-center">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon position-relative"
                name="Message"
                set="light"
                size="small"
              />
              Message Center
              <span className="icon-notification position-absolute"></span>
            </li>
          </Link>

          <Link className="sidenav-link" to="/inquiries">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Folder"
                set="light"
                size="small"
              />
              My Inquiries
            </li>
          </Link>

          <Link className="sidenav-link" to="/settings">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Setting"
                set="light"
                size="small"
              />
              Settings
            </li>
          </Link>

          <Link className="sidenav-link" to="/">
            <li onClick={handleSignOut} className="sidenav__list-item">
              <Iconly
                className="nav-icon"
                name="Logout"
                set="line"
                size="small"
                style={{ marginRight: "15px" }}
              />
              Logout
            </li>
          </Link>
        </ul>

        <ul className="sidenav__list mt-auto">
          <Link className="sidenav-link" to="/buy-commodities">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="ArrowLeft"
                set="light"
                size="small"
              />
              Back to Buyers Hub
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
