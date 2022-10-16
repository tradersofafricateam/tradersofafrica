import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import BuyHubNavbar from "./components/BuyHubNavbar/BuyHubNavbar";

import Banner from "../../assets/img/b-home-bn2.png";

import ProductImg1 from "../../assets/img/products/p-img1.png";
import ProductImg2 from "../../assets/img/products/p-img2.png";
import ProductImg3 from "../../assets/img/products/p-img3.png";
import ProductImg4 from "../../assets/img/products/p-img4.png";

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
            <div className="featured-ad-wrap">
              <div className="inq-left flex-grow-1">
                <h2>Get deals at the Best Prices</h2>
                <p>
                  Submit an inquiry and let our sourcing team find you the best
                  quality of your desired product.
                </p>
              </div>
              <div className="inq-right flex-shrink-0">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Make Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <div
        className="modal fade place-order-modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Inquiry
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <form className="w-100">
                    <div class="mb-3">
                      <label for="exampleInputEmail1">Product Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Enter Product Name"
                      />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1">
                        Product Requirements
                      </label>
                      <textarea
                        class="form-control"
                        id=""
                        rows="3"
                        placeholder="Enter product requirements"
                      ></textarea>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label for="exampleInputPassword1">Quantity</label>
                        <div className="custom-input form-control">
                          <div className="row">
                            <div className="col-lg-7 col">
                              <input
                                type="number"
                                className="form-control custom-style"
                                id=""
                                placeholder="Enter quantity"
                              />
                            </div>
                            <div className="col-lg-5 col">
                              <div className="form-unit">metric tons</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label for="exampleInputPassword1">
                          Shipping Terms
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select shipping terms</option>
                          <option value="1">FOB</option>
                          <option value="2">CIF</option>
                          <option value="3">CFR</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label for="exampleInputPassword1">Payment Terms</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select payment terms</option>
                          <option value="1">LC</option>
                          <option value="2">DP</option>
                          <option value="2">CAD</option>
                          <option value="3">TT</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label for="exampleInputPassword1">
                          Destination Country
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select destination country</option>
                          <option value="1">India</option>
                          <option value="2">China</option>
                          <option value="3">Bangladesh</option>
                        </select>
                      </div>
                    </div>

                    <button className="mt-3">Submit Inquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <section id="b-trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Newly Added Products</h1>
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
      {/* <section id="ad-space">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default BuyerHome;
