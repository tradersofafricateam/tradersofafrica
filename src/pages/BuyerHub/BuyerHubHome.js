import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import BuyHubNavbar from "./components/BuyHubNavbar/BuyHubNavbar";

import Banner from "../../assets/img/b-home-bn2.png";

import ProductImg1 from "../../assets/img/products/p-img1.png";
import ProductImg2 from "../../assets/img/products/p-img2.png";
import ProductImg3 from "../../assets/img/products/p-img3.png";
import ProductImg4 from "../../assets/img/products/p-img4.png";

import SafeIcon from "../../assets/img/icons/secured.svg";
import QualityIcon from "../../assets/img/icons/quality.svg";
import LogisticsIcon from "../../assets/img/icons/logistics.svg";

import "./BuyersHome.css";

const BuyerHome = () => {
  return (
    <div>
      <BuyHubNavbar />

      {/* Hero Section */}
      <section id="b-hero-section">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Banner} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      {/* <section id="b-features">
        <div className="container" align="center">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="f-title">What to expect </h2>
              <p className="f-subtitle">
                When you buy products from TOFA, your orders will be handled
                specially by our SourcePro Unit. This means that we will
                ourselves source the products you need according to your
                specifications and deliver them to you anywhere in the world.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={SafeIcon} className="b-feature-icon" alt="..." />
              <h3>Safe Transactions</h3>
              <p>
                Our watchword is "integrity." We accept <br />
                various payment terms to make you feel <br />
                safe while fulfilling all of your orders.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={QualityIcon} className="b-feature-icon" alt="..." />
              <h3>Quality Products</h3>
              <p>
                We conduct routine quality tests and <br />
                inspections to supply only high-quality <br />
                products to our buyers.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={LogisticsIcon} className="b-feature-icon" alt="..." />
              <h3>Last Mile Logistics</h3>
              <p>
                It is our job to manage all logistics <br />
                involved in fulfilling your orders and provide<br />
                 adequate documentation.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Trending Products */}
      <section id="b-trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Trending Products</h1>
            </div>
            <div className="col-lg-6" align="right">
              <Link className="subtitle" to="/">
                View more
              </Link>
            </div>
          </div>
          <div className="row main-container">
            <div className="p-container">
              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg1}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg2}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg3}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg4}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg3}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg4}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Advert Space */}
      <section id="ad-space">
        <div className="container">
          <div className="feature-ad">
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h2>Get deals at the Best Prices</h2>
                <p>
                  Submit a Request for Quote and let our sourcing team find you
                  the best quality of your desired product
                </p>
              </div>
              <div className="flex-shrink-0">
                <button>Make Request</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section id="b-trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Upcoming Products</h1>
            </div>
            <div className="col-lg-6" align="right">
              <Link className="subtitle" to="/">
                View more
              </Link>
            </div>
          </div>
          <div className="row main-container">
            <div className="p-container">
              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg1}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg2}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg3}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg4}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg3}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>

              <Link className="link" to="/details">
                <div className="product-card">
                  <div className="product-card-img">
                    <img
                      src={ProductImg4}
                      className="img-fluid product-img"
                      alt="..."
                    />
                    <span class="badge bg-success">Updated</span>
                  </div>
                  <div className="product-card-info">
                    <h2 className="product-name">Dried Hibiscus Flower</h2>
                    <h3 className="product-price">
                      <span className="p-currency">USD</span> 500 - 650{" "}
                      <span className="p-unit">/ MT</span>
                    </h3>
                    <p className="product-spec-sum">
                      <span>Available Specs:</span>
                      <br />
                      Dried, Moisture 8%, Dark Red colour
                    </p>
                    <Link className="product-link" to="/details">
                      View Product
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Space */}
      <section id="ad-space">
        <div className="container">
          <div className="e-newsletter">
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h2>Never miss an important update</h2>
                <p>
                  Subscribe to get latest information and best deals directly
                </p>
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter E-mail Address"
                  />
                </div>
                <div class="col-auto">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyerHome;
