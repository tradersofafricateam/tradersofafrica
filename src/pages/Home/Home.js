import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import HomeImg1 from "../../assets/img/lp-1.png";
import HomeImg2 from "../../assets/img/lp-2.png";
import HomeImg3 from "../../assets/img/lp-3.png";
import ProductBag from "../../assets/img/grain-sack-icon.svg";
import Request from "../../assets/img/female-services-support-icon.svg";
import User from "../../assets/img/group-icon.svg";
import Partner from "../../assets/img/young-businessman-icon.svg";
import Logistic from "../../assets/img/truck-icon.svg";
import Farmer from "../../assets/img/farmer-icon.svg";
import Transaction from "../../assets/img/money-icon.svg";
import SellerIcon from "../../assets/img/sellerIcon.svg";
import BuyerIcon from "../../assets/img/shopper-icon.svg";
import ProductFocus1 from "../../assets/img/pf-1.png";
import ProductFocus2 from "../../assets/img/pf-2.png";
// import ProductFocus3 from "../../assets/img/pf-3.png";
import ChevronRight from "../../assets/img/chevron-right.svg";
import PlainMap from "../../assets/img/tst.jpg";
import ColouredMap from "../../assets/img/map.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Partners from "../../components/Partners/Partners";

import AOS from "aos";
import "aos/dist/aos.css";
import { useGetTofaPayStatistics } from "../../hooks/useGetTofaPayStatistics";
import { useGetMarketplaceStatistics } from "../../hooks/useGetMarketplaceStatistics";
import { numberWithCommas } from "../../helpers/helpFunctions";
import { getSourceProStatistics } from "../../hooks/useSourceProStatistics";

const Home = () => {
  const { getAllTofapayStatistics, tofapayStatistics } =
    useGetTofaPayStatistics();
  const { getAllMarketplaceStatistics, marketplaceStatistics } =
    useGetMarketplaceStatistics();
  const { sourceProStatistics, getAllSourceProStatistics } =
    getSourceProStatistics();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getAllTofapayStatistics();
    getAllMarketplaceStatistics();
    getAllSourceProStatistics();
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

      {/* Metrics for subsidaries */}
      {/* <section id="lp-what-we-do">
        <div className="container ">
          <div className="metric_heading">
            <h1>Our business at a glance</h1>
          </div>
          <div className="row our_business">
            <div className="col-lg-4" align="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://marketplase.tradersofafrica.com"
              >
                <h5 className="metric_title">Market place</h5>{" "}
              </a>
              <div className="metric_wrapper">
                <div className="metric_content">
                  <h6>
                    {" "}
                    {marketplaceStatistics?.products &&
                      numberWithCommas(marketplaceStatistics?.products)}
                  </h6>
                  <p>Products</p>
                  <div className="metric_icon">
                    <GiFruitBowl />
                  </div>
                </div>
                <div className="metric_content">
                  <h6>
                    {" "}
                    {marketplaceStatistics?.sellers &&
                      numberWithCommas(marketplaceStatistics?.sellers)}
                  </h6>
                  <p>Sellers</p>
                  <div className="metric_icon">
                    <FaBasketShopping />
                  </div>
                </div>
                <div className="metric_content">
                  <h6>
                    {marketplaceStatistics?.buyers &&
                      numberWithCommas(marketplaceStatistics?.buyers)}
                  </h6>
                  <p>Buyers</p>
                  <div className="metric_icon">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" align="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tofapay.tradersofafrica.com"
              >
                <h5 className="metric_title">Tofa Pay</h5>{" "}
              </a>
              <div className="metric_wrapper">
                <div className="metric_content">
                  <h6>
                    {" "}
                    {tofapayStatistics?.totalQuantitySupplied &&
                      numberWithCommas(
                        tofapayStatistics.totalQuantitySupplied
                      )}{" "}
                    <span className="metric_unit">/TONS</span>
                  </h6>
                  <p>Transaction Volume</p>
                  <div className="metric_icon">
                    <GiMoneyStack />
                  </div>
                </div>
                <div className="metric_content">
                  <h6>
                    {tofapayStatistics?.totalNumberOfProducts &&
                      numberWithCommas(tofapayStatistics.totalNumberOfProducts)}
                  </h6>
                  <p>Products</p>
                  <div className="metric_icon">
                    <GiCorn />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" align="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.quicklogisticshub.com/"
              >
                <h5 className="metric_title">Quick Logistics Hub</h5>{" "}
              </a>
              <div className="metric_wrapper">
                <div className="metric_content">
                  <h6>200+</h6>
                  <p>Logistic Providers</p>
                  <div className="metric_icon">
                    <MdDeliveryDining />
                  </div>
                </div>
                <div className="metric_content">
                  <h6>7,000+</h6>
                  <p>Users</p>
                  <div className="metric_icon">
                    <FaUser />
                  </div>
                </div>
                <div className="metric_content">
                  <h6>4,000+</h6>
                  <p>
                    Request<span> /wkly</span>{" "}
                  </p>
                  <div className="metric_icon">
                    <GrDeliver />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" align="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tradersofafrica.com/buy-commodities"
              >
                <h5 className="metric_title">Source Pro</h5>{" "}
              </a>
              <div className="metric_wrapper">
                <div className="metric_content">
                  <h6>
                    {" "}
                    {sourceProStatistics?.totalQuantity
                      ? numberWithCommas(sourceProStatistics.totalQuantity)
                      : 0}{" "}
                    <span className="metric_unit">/TONS</span>
                  </h6>
                  <p>Transaction volume</p>
                  <div className="metric_icon">
                    <GiMoneyStack />
                  </div>
                </div>
                <div className="metric_content">
                  <h6>
                    {" "}
                    {sourceProStatistics?.totalUniqueCompanies
                      ? numberWithCommas(
                          sourceProStatistics?.totalUniqueCompanies
                        )
                      : 0}
                  </h6>
                  <p>Partners</p>
                  <div className="metric_icon">
                    <FaUser />
                  </div>
                </div>
                <div className="metric_content">
                  <h6>
                    {" "}
                    {sourceProStatistics?.totalUniqueProducts
                      ? sourceProStatistics?.totalUniqueProducts
                      : 0}
                  </h6>
                  <p>Products </p>
                  <div className="metric_icon">
                    <GiFruitBowl />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Metrics for subsidaries */}
      <section id="lp-what-we-do">
        <div className="container ">
          <div className="row">
            <div className=" col-md-6 col-12">
              <div className="">
                <h2>Our business at a glance</h2>
                <div className="row">
                  <div className="col-12 mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://marketplase.tradersofafrica.com"
                      className="metric__link"
                    >
                      <h4 className="metric__heading">
                        Market Place <span className="span-1"></span>
                      </h4>{" "}
                    </a>
                    <div className="row">
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            <img src={ProductBag} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {marketplaceStatistics?.products &&
                                numberWithCommas(
                                  marketplaceStatistics?.products
                                )}
                            </h4>
                            <h6 className="metric__title">PRODUCTS</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={SellerIcon} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {marketplaceStatistics?.sellers &&
                                numberWithCommas(
                                  marketplaceStatistics?.sellers
                                )}
                            </h4>

                            <h6 className="metric__title">SELLERS</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            <img src={BuyerIcon} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {marketplaceStatistics?.buyers &&
                                numberWithCommas(marketplaceStatistics?.buyers)}
                            </h4>
                            <h6 className="metric__title">BUYERS</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.quicklogisticshub.com/"
                      className="metric__link"
                    >
                      <h4 className="metric__heading">
                        Quick Logistics Hub <span className="span-3"></span>
                      </h4>{" "}
                    </a>
                    <div className="row">
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            <img src={Request} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">4,000+</h4>
                            <h6 className="metric__title">
                              {" "}
                              Request
                              <span className="metric__unit"> /wkly</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={User} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">7,000+</h4>
                            <h6 className="metric__title">Users</h6>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-4">
                        <div className="metri__container">
                          <div className="metric__icon">
                            <img src={Logistic} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">200+</h4>
                            <h6 className="metric__title">Providers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.tradersofafrica.com/buy-commodities"
                      className="metric__link"
                    >
                      <h4 className="metric__heading">
                        Source Pro <span className="span-2"></span>
                      </h4>
                    </a>
                    <div className="row">
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={Partner} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {sourceProStatistics?.totalUniqueCompanies
                                ? numberWithCommas(
                                    sourceProStatistics?.totalUniqueCompanies
                                  )
                                : 0}
                            </h4>
                            <h6 className="metric__title">Partners</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={Transaction} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {sourceProStatistics?.totalQuantity
                                ? numberWithCommas(
                                    sourceProStatistics.totalQuantity
                                  )
                                : 0}{" "}
                              <span className="metric__unit">/TONS</span>
                            </h4>
                            <h6 className="metric__title">Transaction</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={ProductBag} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {sourceProStatistics?.totalUniqueProducts
                                ? sourceProStatistics?.totalUniqueProducts
                                : 0}{" "}
                            </h4>
                            <h6 className="metric__title">PRODUCTS</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tofapay.tradersofafrica.com"
                      className="metric__link"
                    >
                      {" "}
                      <h4 className="metric__heading">
                        Tofa Pay <span className="span-4"></span>
                      </h4>
                    </a>

                    <div className="row">
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={ProductBag} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {tofapayStatistics?.totalNumberOfProducts &&
                                numberWithCommas(
                                  tofapayStatistics.totalNumberOfProducts
                                )}
                            </h4>
                            <h6 className="metric__title">PRODUCTS</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={Transaction} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {tofapayStatistics?.totalQuantitySupplied &&
                                numberWithCommas(
                                  tofapayStatistics.totalQuantitySupplied
                                )}{" "}
                              <span className="metric__unit">/TONS</span>
                            </h4>
                            <h6 className="metric__title">Transaction</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="metri__container">
                          <div className="metric__icon">
                            {" "}
                            <img src={Farmer} alt="" />
                          </div>
                          <div className="metric_first">
                            <h4 className="metric__number">
                              {" "}
                              {tofapayStatistics?.totalNumberOfSuppliers &&
                                numberWithCommas(
                                  tofapayStatistics.totalNumberOfSuppliers
                                )}{" "}
                            </h4>
                            <h6 className="metric__title">Farmers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-5">
              <img
                className=" map__african__tofa img-fluid "
                src={ColouredMap}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="lp-what-we-do">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6" align="center">
              <img className="img-fluid lp-img1" src={PlainMap} alt="" />
            </div>
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
            <div className="col-lg-6" align="center">
              <img className="img-fluid lp-img1" src={HomeImg1} alt="" />
            </div>
          </div>
          <div
            className="row mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <div className="col-lg-6" align="center">
              <img className="img-fluid lp-img2" src={HomeImg2} alt="" />
            </div>
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
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
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
            <div className="col-lg-6" align="center">
              <img className="img-fluid lp-img3" src={HomeImg3} alt="" />
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
                <img
                  className="img-fluid"
                  src="https://newtofaapibucket.s3.us-west-2.amazonaws.com/public/4CE87823-C97D-41C2-A2AF-B9F10C966261.jpeg"
                  alt=""
                />
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
