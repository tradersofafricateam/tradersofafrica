import React from "react";
import { Link } from "react-router-dom";

import "./WhatWeDo.css";

import ChevronRightOrg from "../../assets/img/chevron-right-org.svg";
import BuyersHub from "../../assets/img/bh-img.png";
import SuppliersMarket from "../../assets/img/sm-img.jpg";

import SourcePro from "../../assets/img/sp2.png";
import TradeFinance from "../../assets/img/network.png";
import TofaAcademy from "../../assets/img/tcb-img.png";
import TopImg from "../../assets/img/intell-img2.png";
import OrangeCheck from "../../assets/img/check-orange.svg";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import Partners from "../../components/Partners/Partners";

const Wedo = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* What we do top */}
        {/* <section id="what-we-do-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Our Solutions</h2>
                <p>
                  Through our journey, we have developed workable solutions{" "}
                  <br />
                  to the challenges we face in facilitating trade.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Market Intelligence Top */}
        <section id="intel-top">
          <img className="intell-img" src={TopImg} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>Backed by Technology</h2>
                <p>Our data are reliably informed by the large network of people and partners we have across the various countries in Africa. This data is updated regularly to provide key information about products made in Africa. </p>
                <h3><img src={OrangeCheck} alt="" />Monitoring &amp; Real-time Reporting</h3>
                <h3><img src={OrangeCheck} alt="" />Product Mapping</h3>
                <h3><img src={OrangeCheck} alt="" />Seasonality Data</h3>
                <h3><img src={OrangeCheck} alt="" />Updated Commodity Prices</h3>
                <h3><img src={OrangeCheck} alt="" />Instant Payments across Africa</h3>
              </div>
              <div className="col-lg-6">
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section id="solution-wrap-1">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12">
                <h2>Providing Visibility and Access to African Products</h2>
                <p>
                  Traders of Africa has provided a unified platform for buyers
                  and suppliers of <br />
                  African products. We are committed to promoting goods that are
                  grown, <br />
                  produced or manufactured in Africa.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 ">
                <div className="sol-box">
                  <div className="sol-img">
                    <img className="img-fluid" src={BuyersHub} alt="" />
                  </div>
                  <h2>Buyer’s Hub</h2>
                  <p>
                    Buyers from all over the world can easily access African
                    products through our buyers hub. Browse through our
                    selection of various products, ranging from agro commodities
                    to finished goods.
                  </p>
                  <p>
                    <Link className="hvr-icon-forward" to="/buy-commodities">
                      Buy Commodities
                      <img className="hvr-icon" src={ChevronRightOrg} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sol-box">
                  <div className="sol-img">
                    <img className="img-fluid" src={SuppliersMarket} alt="" />
                  </div>
                  <h2>Online Marketplace</h2>
                  <p>
                    We have created a platform to showcase African products from
                    verified suppliers across the continent. Producers and
                    suppliers in Africa can have access to local and
                    international markets.
                  </p>
                  <p>
                    <a className="hvr-icon-forward" target="_blank" rel="noopener noreferrer" href="https://marketplace.tradersofafrica.com">
                      Visit Marketplace
                      <img className="hvr-icon" src={ChevronRightOrg} alt="" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="sourcepro-finance">
          <div className="container">
            <div className="row row-margin">
              <div className="col-lg-6">
                <h2>
                  We are at the forefront of trade <br />
                  financing across Africa
                </h2>
                <p>
                  Through Tofa Pay, we facilitate trade by financing the supply of various agro products. Genuine suppliers of African products who have confirmed orders backed by an acceptable payment term can request for funds. 
                </p>
                <p>
                  We can also undertake to pay on behalf of factories and processors across Africa which will assist them in managing their cashflow as well as build integrity with their suppliers.
                </p>
                {/* <p>
                  <a className="hvr-icon-forward" href="/">
                    Contact us{" "}
                    <img className="hvr-icon" src={ChevronRightOrg} alt="" />
                  </a>
                </p> */}
              </div>
              <div className="col-lg-6" align="center">
                <img className="img-fluid tf-img" src={TradeFinance} alt="" />
              </div>
            </div>
            <div className="row row-margin">
              <div className="col-lg-6" align="left">
                <img className="img-fluid sp-img" src={SourcePro} alt="" />
              </div>
              <div className="col-lg-6 padding-top">
                <h2>Let SourcePro do the work</h2>
                <p>
                  We have amassed a team of sourcing professionals who work 24/7
                  to provide products according to our buyers’ specifications.
                  SourcePro guarantees quality, logistics and off-take solutions
                  to both buyers and suppliers.
                </p>
                {/* <p>
                  <Link className="hvr-icon-forward" to="/buy-commodities">
                    Make an Inquiry{" "}
                    <img className="hvr-icon" src={ChevronRightOrg} alt="" />
                  </Link>
                </p> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h2 className="margin-top">
                  Build Supply Capacity with
                  <br />
                  TOFA Academy
                </h2>
                <p>
                  Through dedicated partnerships in every African country, TOFA
                  Academy provides training and funding to farmers and
                  aggregators for commercial agro commodities trade.
                </p>
                <p>
                  We work closely together with SourcePro to train our cohorts
                  on all they need to know about commercial agribusiness. We're
                  also dedicated to providing the needed financing and direct
                  offtake of all products. Become a member of our TOFA Tribe,
                  where we'll mentor you for impact and monitor you for success!
                </p>
                {/* <a className="hvr-icon-forward" href="/">
                  <button className="btn btn-danger training-cta">
                    Apply now
                    <img className="hvr-icon" src={ChevronRightOrg} alt="" />
                  </button>
                </a> */}
              </div>
              <div className="col-lg-6" align="center">
                <img className="img-fluid cb-img" src={TofaAcademy} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Wedo;
