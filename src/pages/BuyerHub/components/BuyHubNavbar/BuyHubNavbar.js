import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../../assets/img/logo.png";
import Notify from "../../../../assets/img/icons/notification-icon.svg";
import Message from "../../../../assets/img/icons/message-icon.svg";
import ChevronDown from "../../../../assets/img/icons/chevron-down-icon.svg";

const BuyHubNavbar = () => {
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
              <li className="nav-item">
                <Link className="nav-link main-nav-link" to="/">
                  Browse Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link main-nav-link" to="/dashboard">
                  Manage Transactions
                </Link>
              </li>
              {/* When user is logged in */}
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link main-nav-link "
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Erhun Abbe
                  <img className="dropdown-icon" src={ChevronDown} alt="" />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
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
                  <img className="" src={Notify} alt="" />
                  <span className="notify"></span>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link main-nav-link" to="/">
                  <img className="" src={Message} alt="" />
                  <span className="msgs">5</span>
                </Link>
              </li> */}
              {/* End of When user is logged in */}
              <li className="nav-item">
                <Link className="nav-link main-nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-danger nav-btn text-white"
                  to="/"
                  role="button"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BuyHubNavbar;
