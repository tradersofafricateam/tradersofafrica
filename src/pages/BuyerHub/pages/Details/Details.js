import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer/Footer";
import BuyHubNavbar from "../../components/BuyHubNavbar/BuyHubNavbar";
import OrderModal from '../OrderModal/OrderModal'

import "./Details.css";

import BackIcon from "../../../../assets/img/icons/back-icon.svg";

import ProductImg1 from "../../../../assets/img/products/p-img1.png";
import ProductImg2 from "../../../../assets/img/products/p-img2.png";
import ProductImg3 from "../../../../assets/img/products/p-img3.png";
import ProductImg4 from "../../../../assets/img/products/p-img4.png";

const Details = () => {
  return (
    <div>
      <BuyHubNavbar />
      <div>
        <section id="product-details">
          <div className="container">
            <div className="row mb-2">
              <div className="col-lg-12">
                <p className="back-text">
                  <Link to="/buy-commodities">
                  <img src={BackIcon} className="back-icon" alt="..." />
                  Browse Products
                  </Link>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5">
                <div className="mp-wrap">
                  <div className="main-product-pic"></div>
                  <div className="product-thumbnail">
                    <div className="d-flex justify-content-between">
                      <div className="pt-box"></div>
                      <div className="pt-box"></div>
                      <div className="pt-box"></div>
                      <div className="pt-box"></div>
                      <div className="pt-box"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="main-product-details">
                  <h2 className="m-product-name">Raw Cashew Kernels W320</h2>
                  <h3 className="m-product-price">
                    <span className="mp-currency">USD</span> 1050 - 1250
                    <span className="mp-unit"> / MT</span>
                  </h3>

                  <div className="m-product-info-wrap d-flex justify-content-start">
                    <p className="m-product-info">
                      <span>Minimum Order: </span>100 MT
                    </p>
                    <p className="m-product-info">
                      <span>Capacity: </span>10,000 MT / Monthly
                    </p>
                    <p className="m-product-info">
                      <span>Lead time: </span>2 - 4 Weeks
                    </p>
                  </div>

                  <div className="m-product-spec-box">
                    <h3 className="m-product-spec-title">
                      Product Specification
                      <a className="spec-link" href="#product-description">
                      See full Specification
                    </a>
                    </h3>
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td className="mps-title">Quality:</td>
                          <td>46, 47, 48 KOR</td>
                        </tr>
                        <tr>
                          <td className="mps-title">Packaging Type:</td>
                          <td>100KG Jute bag</td>
                        </tr>
                        <tr>
                          <td className="mps-title">Incoterms:</td>
                          <td>FOB, Local Delivery</td>
                        </tr>
                        <tr>
                          <td className="mps-title">Origin:</td>
                          <td>Nigeria, Ghana, Benin, Tanzania</td>
                        </tr>
                      </tbody>
                    </table>
                    
                  </div>

                  <div className="m-product-cta">
                    <button className="order-cta" data-bs-toggle="modal" data-bs-target="#exampleModal">Place Order</button>
                    <button className="inquiry-cta">Make Inquiry</button>
                  </div>

                  <OrderModal />

                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product-description">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12">
                <div className="m-product-spec-box">
                  <h3 className="m-product-spec-title2 mb-1">
                    Product Specification
                  </h3>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td className="mps-title">Quality:</td>
                        <td>46, 47, 48 KOR</td>
                      </tr>
                      <tr>
                        <td className="mps-title">Packaging Type:</td>
                        <td>100KG Jute bag</td>
                      </tr>
                      <tr>
                        <td className="mps-title">Incoterms:</td>
                        <td>FOB, Local Delivery</td>
                      </tr>
                      <tr>
                        <td className="mps-title">Origin:</td>
                        <td>Nigeria, Ghana, Benin, Tanzania</td>
                      </tr>
                      <tr>
                        <td className="mps-title">Colour:</td>
                        <td>
                          White, Creamy-white, Light yellow, Light gray, Light
                          brown, Creamy-yellow, Dark brown)
                        </td>
                      </tr>
                      <tr>
                        <td className="mps-title">Type:</td>
                        <td>White, Scorched, Second Scorched Nut</td>
                      </tr>
                      <tr>
                        <td className="mps-title">Form & Cut:</td>
                        <td>Kernels</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="m-product-spec-box">
                  <h3 className="m-product-spec-title2 mb-1">
                    Product Description
                  </h3>
                  <p className="mp-desc">
                    Tridge has developed partnerships with Vietnam’s top
                    suppliers to provide high-quality cashew nuts to markets
                    worldwide. Vietnam has been producing cashews throughout the
                    country since the early 1980s. Cashew nuts are grown in
                    various regions in Vietnam, including Binh Phuoc, Dak Nong,
                    Dong Nai, Binh Duong provinces. Particularly, Binh Phuoc
                    province is known as the leading region for the growth of
                    cashew nuts, constituting over 50% of the entire cashew nuts
                    production in Vietnam.
                  </p>
                  <p className="mp-desc">
                    Tridge can provide two types of cashew nuts for export:
                    kernel and processed nuts. With kernel cashew nuts, there
                    are various sizes ranging from W180 to W500. For processed
                    nuts, salt-roasted cashew is most popular. Moreover, Tridge
                    can provide organic cashew kernel, which is gaining
                    popularity in the market. he cashew nuts in Vietnam are
                    based on size, color, and degree of rupture ... See More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="b-trending">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1>You might be interested in</h1>
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
      </div>
      <Footer />
    </div>
  );
};

export default Details;
