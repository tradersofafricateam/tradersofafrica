import React from "react";

import "./Impact.css";

import PlayBtnW from "../../assets/img/white-play-btn.svg";
import SupplierIcon from "../../assets/img/suppliers-icon.svg";
import ProductIcon from "../../assets/img/product-icon.svg";
import CoverageIcon from "../../assets/img/cc-icon.svg";
import CurrencyIcon from "../../assets/img/currency-icon.svg";
import CountryIcon from "../../assets/img/cp-icon.svg";
import TraineeIcon from "../../assets/img/trainee-icon.svg";
import AfricaIcon from "../../assets/img/africa-icon.svg";
import ColouredMap from "../../assets/img/map-col2.svg";
import CapacityImg from "../../assets/img/cb-img2.png";

import AmeyahLogo from "../../assets/img/ameyaw.png";
import CnbcLogo from "../../assets/img/cnbc.png";
import MoranLogo from "../../assets/img/moran.png";
import TechpointLogo from "../../assets/img/techpoint.png";
import Hwmialogo from "../../assets/img/hwmia.png";

import ChevronRight from "../../assets/img/chevron-right.svg";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Impact = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* Impact Top */}
        <section id="imp-hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>Customer Stories</h2>
                <p className="cutomer-quote">
                  The aim of TOFA Academy is to Build a Network of Credible
                  Suppliers all over Africa in Order to Meet Both Local and
                  Global Demand.
                </p>
                <p className="customer-name">Ajibike, 50 Million Women Speak</p>
                <div className="d-flex justify-content-start play-icon-wrap">
                  <img src={PlayBtnW} alt="" />
                  <p className="play-icon-text">
                    <a href="/"> Watch video</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traction */}
        <section id="traction-wrap">
          <div className="container">
            <div className="row mb-5 pb-5">
              <div className="col-lg-7">
                <h2>Building the Future of Africa</h2>
                <p>
                  The big mission for Traders of Africa is to facilitate trade
                  across all <span>54 countries</span> <br />
                  in Africa, through strategic partnerships. Currently, we
                  operate in{" "}
                  <span>
                    Nigeria, Benin, <br />
                    Togo, Cameroon and Mali.
                  </span>{" "}
                </p>
                <h3>Our business at a glance</h3>
                <div className="d-flex flex-wrap justify-content-start">
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={SupplierIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">16,000</h4>
                        <p className="metric-name">Online Suppliers</p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={ProductIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">13,857+</h4>
                        <p className="metric-name">Listed Products</p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={CoverageIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">15</h4>
                        <p className="metric-name">Country Coverage</p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={CurrencyIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">$11,600,000</h4>
                        <p className="metric-name">Volume Traded</p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={SupplierIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">1,000,000+</h4>
                        <p className="metric-name">Offline Suppliers</p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={CountryIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">5</h4>
                        <p className="metric-name">Country Presence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <img className="img-fluid" src={ColouredMap} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <img className="img-fluid" src={CapacityImg} alt="" />
              </div>
              <div className="col-lg-7 padding-left">
                <h2>Capacity Building</h2>
                <p>
                  As we expand, we will continue to work with smallholder
                  farmers, aggregators, and individuals to provide them with
                  training, financing and off-take through TOFA Academy.{" "}
                </p>
                <p>
                  We are building a strong network of credible agro traders who
                  can meet the ever increasing demand, both locally and
                  globally. See our numbers below.
                </p>
                <div className="d-flex flex-wrap justify-content-start mt-5">
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={CurrencyIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">$200,000</h4>
                        <p className="metric-name">Funding Provided</p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={TraineeIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">300</h4>
                        <p className="metric-name">Trainees</p>
                      </div>
                    </div>
                  </div>
                  <div className="metric-wrap">
                    <div className="d-flex justify-content-start">
                      <img src={AfricaIcon} alt="" />
                      <div className="metric-desc">
                        <h4 className="metric-value">3</h4>
                        <p className="metric-name">African Countries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tofa Tribe Community */}
        <section id="tofa-tribe">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>
                  Be a Part of <br />
                  our Community
                </h2>
                <p>
                  As a member of our TOFA Tribe, you will be trained on the best
                  practices with regards to <br />
                  agro commodities trading in commercial quantities. Gain access
                  to funding, off-take, <br />
                  and mentorship to boost your supply capacity and grow your
                  agribusiness.{" "}
                </p>
                <p>
                  <a href="/">
                    Get Started <img src={ChevronRight} alt="" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature */}
        <section id="tf-feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>We Have Been Featured in</h2>
                <div className="d-flex flex-wrap justify-content-around">
                  <img src={AmeyahLogo} alt={1} />
                  <img src={CnbcLogo} alt={2} />
                  <img src={MoranLogo} alt={3} />
                  <img src={TechpointLogo} alt={4} />
                  <img src={Hwmialogo} alt={5} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Impact;
