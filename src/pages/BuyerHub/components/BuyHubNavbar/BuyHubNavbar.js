import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { axiosInstance } from "./../../../../components/axios";
import { GlobalContext } from "../../../../components/utils/GlobalState";

import Logo from "../../../../assets/img/logo.png";
import ChevronDown from "../../../../assets/img/icons/chevron-down-icon.svg";

const BuyHubNavbar = () => {
  const { user, setUser } = useContext(GlobalContext);

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
        console.log(error);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={Logo} alt="TOFA" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                {/* When user is logged in */}
                <li className="nav-item">
                  <Link
                    className="nav-link main-nav-link"
                    to="/buy-commodities"
                  >
                    Browse Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-nav-link" to="/dashboard">
                    Manage Transactions
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link main-nav-link "
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.fullName && Capitalize(user.fullName)}
                    <img className="dropdown-icon" src={ChevronDown} alt="" />
                  </Link>
                  <ul
                    className="dropdown-menu animate slideIn"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/orders">
                        <i
                          className="fas fa-shopping-cart nav-icon"
                          style={{ color: "#282828" }}
                        ></i>
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/message-center">
                        <i
                          className="fas fa-envelope nav-icon"
                          style={{ color: "#282828" }}
                        ></i>
                        Message Center
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/inquiries">
                        <i
                          className="fas fa-sticky-note nav-icon"
                          style={{ color: "#282828" }}
                        ></i>
                        Inquiries
                      </Link>
                    </li>
                    <li onClick={handleSignOut}>
                      <Link className="dropdown-item" to="/">
                        <i
                          className="fas fa-sign-out-alt nav-icon"
                          style={{ color: "#282828" }}
                        ></i>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-nav-link" to="#">
                    <i
                      className="far fa-bell"
                      style={{ color: "#282828", fontSize: "25px" }}
                    ></i>

                    <span className="notify"></span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                {/* End of When user is logged in */}
                <li className="nav-item">
                  <Link
                    className="nav-link main-nav-link"
                    to="/buy-commodities"
                  >
                    Browse Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-nav-link" to="/dashboard">
                    Manage Transactions
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link main-nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-danger nav-btn text-white"
                    to="/registration"
                    role="button"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default BuyHubNavbar;
