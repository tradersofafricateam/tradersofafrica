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
              <div className="col-lg-6 col-12">
                <img className="ft-logo" src="img/mark-white.png" alt="" />
                <img className="ft-logo" src={LogoMark} alt="TOFA" />
                <p className="tagline">
                  Traders of Africa is a Pan African Hub for Facilitating Trade{" "}
                  <br />
                  with and within Africa through Technology
                </p>
                <a href="https://twitter.com/tradersofafrica">
                  <img className="social-icon" src={Twitter} alt="Twitter" />
                </a>
                <a href="/">
                  <img className="social-icon" src={Facebook} alt="Facebook" />
                </a>
                <a href="/">
                  <img
                    className="social-icon"
                    src={Instagram}
                    alt="Instagram"
                  />
                </a>
                <a href="/">
                  <img className="social-icon" src={Linkedin} alt="LinkedIn" />
                </a>
              </div>
              <div className="col-lg-2 col-6">
                <ul>
                  <h5 className="footer-headers">Company</h5>
                  <li>
                    <Link to="/" className="text">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      What we do
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      Our Impact
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      Market Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      Partnerships
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6">
                <ul>
                  <h5 className="footer-headers">Our Solutions</h5>
                  <li>
                    <Link to="/" className="text">
                      Buyers Hub
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      TOFA Academy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      SourcePro
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      Trade Finance
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6">
                <ul>
                  <h5 className="footer-headers">Help &amp; Support</h5>
                  <li>
                    <Link to="/" className="text">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text">
                      How to trade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-wrap">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
