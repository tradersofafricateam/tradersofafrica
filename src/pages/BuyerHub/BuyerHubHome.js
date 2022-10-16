import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import BuyHubNavbar from "./components/BuyHubNavbar/BuyHubNavbar";
import { axios } from "../../components/baseUrl";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { GlobalContext } from "../../components/utils/GlobalState";

import Banner from "../../assets/img/b-home-bn2.png";

import ProductImg1 from "../../assets/img/products/p-img1.png";
import ProductImg2 from "../../assets/img/products/p-img2.png";
import ProductImg3 from "../../assets/img/products/p-img3.png";
import ProductImg4 from "../../assets/img/products/p-img4.png";

import "./BuyersHome.css";
import TrendingProduct from "./components/TrendingProduct";

const BuyerHome = () => {
  const { userLoading } = useContext(GlobalContext);
  // const [subscribeToNewsletter, setSubscribeToNewsletter] = useState({
  //   name: "",
  //   email: "",
  // });

  const sectionTitle = "Trending Products";
  const newlyAddedProducts = "Newly Added Products";

  // const handleChange = (e) => {
  //   setSubscribeToNewsletter({
  //     ...subscribeToNewsletter,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmitSubscriber = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const createSubscriber = {
  //       fullName: subscribeToNewsletter.name,
  //       email: subscribeToNewsletter.email,
  //     };
  //     const { data } = await axios.post("/auth/news-letter", createSubscriber);
  //     console.log(data);
  //     setSubscribeToNewsletter({
  //       name: "",
  //       email: "",
  //     });

  //     Store.addNotification({
  //       title: "Success!",
  //       message: "You have successfully subscribed to Tofa's Newsletter",
  //       type: "success",
  //       insert: "top",
  //       container: "top-right",
  //       animationIn: ["animate__animated", "animate__fadeIn"],
  //       animationOut: ["animate__animated", "animate__fadeOut"],
  //       dismiss: {
  //         duration: 5000,
  //         onScreen: true,
  //       },
  //       isMobile: true,
  //       breakpoint: 768,
  //     });
  //   } catch (error) {
  //     console.log(error.response.data.errors);
  //     Store.addNotification({
  //       title: "Failed!",
  //       message: "Try Again.",
  //       type: "danger",
  //       insert: "top",
  //       container: "top-right",
  //       animationIn: ["animate__animated", "animate__fadeIn"],
  //       animationOut: ["animate__animated", "animate__fadeOut"],
  //       dismiss: {
  //         duration: 5000,
  //         onScreen: true,
  //       },
  //       isMobile: true,
  //       breakpoint: 768,
  //     });
  //   }
  // };

  if (userLoading) {
    return (
      <div
        className="loader mx-auto"
        align="center"
        id="loader"
        style={{
          position: "absolute",
          top: "calc(50% - 60px)",
          left: "calc(50% - 60px)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      ></div>
    );
  }
  return (
    <div>
      {/* <ReactNotifications /> */}
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
      <TrendingProduct sectionTitle={sectionTitle} />

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
        aria-hidden="true"
      >
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
      <TrendingProduct sectionTitle={newlyAddedProducts} />

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
