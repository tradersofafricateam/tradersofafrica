import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav">
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
                <Link
                  className="nav-link main-nav-link"
                  aria-current="page"
                  to="/our-story"
                >
                  Our Story
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link main-nav-link" to="/what-we-do">
                  What we do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link main-nav-link" to="/our-impact">
                  Our Impact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link main-nav-link"
                  to="/market-intelligence"
                >
                  Market Intelligence
                </Link>
              </li>
              {/* <li className="nav-item">
                      <Link className="nav-link main-nav-link" href="./market-intelligence.html">Sell Commodities</Link>
                  </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-danger nav-btn-sec"
                  to="/buyers-hub"
                  role="button"
                >
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-danger nav-btn"
                  to="/buy-commodities"
                  role="button"
                >
                  Buy Commodities
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
