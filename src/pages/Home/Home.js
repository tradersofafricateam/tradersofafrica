import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import SupplierIcon from "../../assets/img/suppliers-icon.svg";
import ProductIcon from "../../assets/img/product-icon.svg";
// import CoverageIcon from "../../assets/img/cc-icon.svg";
import CurrencyIcon from "../../assets/img/currency-icon.svg";
import CountryIcon from "../../assets/img/cp-icon.svg";
// import ColouredMap from "../../assets/img/map-col2.svg";
import HomeImg1 from "../../assets/img/lp-1.png";
import HomeImg2 from "../../assets/img/lp-2.png";
import HomeImg3 from "../../assets/img/lp-3.png";
import ProductFocus1 from "../../assets/img/pf-1.png";
import ProductFocus2 from "../../assets/img/pf-2.png";
import ProductFocus3 from "../../assets/img/pf-3.png";
// import QuoteImg from "../../assets/img/quote.svg";
import ChevronRight from "../../assets/img/chevron-right.svg";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Partners from "../../components/Partners/Partners";
// import Testimonials from "../../components/Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGetTofaPayStatistics } from "../../hooks/useGetTofaPayStatistics";
import { useGetMarketplaceStatistics } from "../../hooks/useGetMarketplaceStatistics";
import { numberWithCommas } from "../../helpers/helpFunctions";

const Home = () => {
  const { getAllTofapayStatistics, tofapayStatistics } =
    useGetTofaPayStatistics();
  const { getAllMarketplaceStatistics, marketplaceStatistics } =
    useGetMarketplaceStatistics();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getAllTofapayStatistics();
    getAllMarketplaceStatistics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="main-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-text">
                {/* <h2>Small Business Communities</h2> */}
                <h1>
                  A Pan African Hub <br />
                  Facilitating African Trade
                </h1>
                <p>
                  With a Global Breadth and African Depth, We are Bridging{" "}
                  <br />
                  the Gaps in Trade with and within Africa.
                </p>
              </div>
              <Link to="/our-story">
                <button className="btn btn-danger hero-cta">
                  Learn more
                  <img className="hvr-icon" src={ChevronRight} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="lp-what-we-do">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-sm-12 col-xs-12 mb-5">
              <h2>What we do</h2>
              <p>
                Our mission and core business are clearly represented by our
                name
                <span> Traders of Africa</span>. We pride ourselves as African
                trade harbingers.
              </p>
              <p>
                Through our industry expertise and experience, we strive to
                continually facilitate trade with and within Africa by providing
                a safe platform dedicated to solving issues of trust and
                acceptable payment terms for both buyers and African suppliers.
              </p>
              <a className="hvr-icon-forward mb-5" href="/what-we-do">
                <button className="btn btn-danger">
                  Read more{" "}
                  <img className="hvr-icon" src={ChevronRight} alt="" />
                </button>
              </a>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 mt-5" align="right">
              <div className="our-business">
                <h4>Our business at a glance</h4>
                <div className="metic-ctn">
                  <div className="metric-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tofapay.tradersofafrica.com"
                    >
                      <h6>TOFAPAY</h6>
                    </a>
                    <div className="metric-content">
                      <img src={CurrencyIcon} alt="" />
                      <div className="metric">
                        <h6>
                          {" "}
                          {tofapayStatistics?.totalQuantitySupplied &&
                            numberWithCommas(
                              tofapayStatistics.totalQuantitySupplied
                            )}{" "}
                          KG
                        </h6>
                        <h5>Total Quantity Supplied</h5>
                      </div>
                    </div>
                    <div className="metric-content">
                      <img src={ProductIcon} alt="" />
                      <div className="metric">
                        <h6>
                          {" "}
                          {tofapayStatistics?.totalNumberOfProducts &&
                            numberWithCommas(
                              tofapayStatistics.totalNumberOfProducts
                            )}
                        </h6>
                        <h5>Products</h5>
                      </div>
                    </div>
                    <div className="metric-content">
                      <img src={SupplierIcon} alt="" />
                      <div className="metric">
                        <h6>
                          {tofapayStatistics?.totalNumberOfSuppliers &&
                            numberWithCommas(
                              tofapayStatistics.totalNumberOfSuppliers
                            )}
                        </h6>
                        <h5>Farmers</h5>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="metric-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://marketplase.tradersofafrica.com"
                    >
                      <h6>MARKETPLACE</h6>
                    </a>
                    <div className="metric-content">
                      <img src={ProductIcon} alt="" />
                      <div className="metric">
                        <h6>
                          {marketplaceStatistics?.products &&
                            numberWithCommas(marketplaceStatistics?.products)}
                        </h6>
                        <h5>Products</h5>
                      </div>
                    </div>
                    <div className="metric-content">
                      <img src={SupplierIcon} alt="" />
                      <div className="metric">
                        <h6>
                          {marketplaceStatistics?.sellers &&
                            numberWithCommas(marketplaceStatistics?.sellers)}
                        </h6>
                        <h5>Registered Sellers</h5>
                      </div>
                    </div>
                    <div className="metric-content">
                      <img src={CountryIcon} alt="" />
                      <div className="metric">
                        <h6>
                          {marketplaceStatistics?.buyers &&
                            numberWithCommas(marketplaceStatistics?.buyers)}
                        </h6>
                        <h5>Registered Buyers</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lp Services */}
      <section id="lp-our-services">
        <div className="container">
          <div
            className="row mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <div className="col-lg-6" align="center">
              <img className="img-fluid lp-img1" src={HomeImg1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="lp-service-info">
                <h2>Visibility and Access</h2>
                <p>
                  We are showcasing African products to buyers all over the
                  world, while providing access to local and international
                  markets for African suppliers.
                </p>
                <div className="line" />
              </div>
            </div>
          </div>
          <div
            className="row mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <div className="col-lg-6 order-last order-lg-first">
              <div className="lp-service-info">
                <h2>Training and Mentorship </h2>
                <p>
                  Dedicated to building a strong network of credible African
                  traders who have the capacity to meet the global demand for
                  African products, through partnerships.
                </p>
                <div className="line" />
              </div>
            </div>
            <div className="col-lg-6" align="center">
              <img className="img-fluid lp-img2" src={HomeImg2} alt="" />
            </div>
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <div className="col-lg-6" align="center">
              <img className="img-fluid lp-img3" src={HomeImg3} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="lp-service-info">
                <h2>Market Intelligence</h2>
                <p>
                  Through our activities and technology, we are able to provide
                  reliable data across several African products.
                </p>
                <div className="line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Focus */}
      <section id="lp-product">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="row mb-5">
            <div className="col-lg-12">
              <h2>Products we are focused on</h2>
              <p>
                Over the years, Trader of Africa has built the expertise needed
                to establish ourselves as leaders across many different kinds of
                African products. Our main focus is on the following categories.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="product-box">
                <img className="img-fluid" src={ProductFocus1} alt="" />
                <div className="title-bar">
                  <h2>Agro-Commodities</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="product-box">
                <img className="img-fluid" src={ProductFocus2} alt="" />
                <div className="title-bar">
                  <h2>Textile</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="product-box">
                <img className="img-fluid" src={ProductFocus3} alt="" />
                <div className="title-bar">
                  <h2>Finished Goods</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonials /> */}
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
