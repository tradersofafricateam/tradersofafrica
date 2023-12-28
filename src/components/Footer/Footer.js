import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import LogoMark from "../../assets/img/mark-white.png";

import Twitter from "../../assets/img/twitter.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Linkedin from "../../assets/img/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="container">
            <div className="row footer-content">
              <div className="col-lg-4 col-12">
                <img className="ft-logo" src={LogoMark} alt="TOFA" />
                <p className="tagline">
                  © 2023 Traders of Africa. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-2 col-6">
                <ul>
                  <h5 className="footer-headers">Company</h5>
                  <li>
                    <Link to="/our-story" className="text">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/what-we-do" className="text">
                      What we do
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-impact" className="text">
                      Our Impact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6">
                <ul>
                  <h5 className="footer-headers">Our Solutions</h5>
                  <li>
                    <Link to="/buy-commodities" className="text">
                      Buyers Hub
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://marketplase.tradersofafrica.com"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.quicklogisticshub.com/"
                      className="text"
                    >
                      Quick Logistic Hub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-12">
                <ul>
                  <h5 className="footer-headers">Contact Us</h5>
                  <li>7/9 Adebisi Oyenola Street, Idado Estate, Lekki Lagos</li>
                  <li>info@tradersofafrica.com</li>
                </ul>
                <div className="mt-2">
                  <a
                    href="https://twitter.com/tradersofafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="social-icon" src={Twitter} alt="Twitter" />
                  </a>
                  <a
                    href="https://web.facebook.com/tradersofafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="social-icon"
                      src={Facebook}
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/tradersofafrica.tofa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="social-icon"
                      src={Instagram}
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tradersofafrica/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="social-icon"
                      src={Linkedin}
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottom-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <h6 className="copyright">
                    {" "}
                    ©2022 Traders of Africa. All Rights Reserved
                  </h6>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
