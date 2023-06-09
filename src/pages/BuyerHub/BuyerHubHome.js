import React, { useEffect, useState, useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import BuyHubNavbar from "./components/BuyHubNavbar/BuyHubNavbar";
import { axiosInstance } from "../../components/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Select from "react-select";
import countryList from "react-select-country-list";

import "react-loading-skeleton/dist/skeleton.css";
// import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GlobalContext } from "../../components/utils/GlobalState";

import "./BuyersHome.css";
import CardSkeleton from "./pages/CardSkeleton";

const BuyerHome = () => {
  const [country, setCountry] = useState("");
  const { userLoading, user } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [succesMsg, setSuccessMsg] = useState(false);
  // const [banner, setBanner] = useState([]);
  const [product, setProduct] = useState([]);
  // const [bannerLoader, setBannerLoader] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState({
    productName: "",
    productDescription: "",
    quantityRequired: "1",
    termsOfTrade: "",
    paymentTerms: "",
  });

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getData = async () => {
    try {
      axiosInstance.get("/product").then((response) => {
        setProduct(response.data.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.message && error.message === "Network Error") {
        navigate("/no-connection");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const ref = React.useRef(null);

  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };

  // const getBanner = async () => {
  //   try {
  //     axios.get("/banner").then((response) => {
  //       setBanner(response.data.data);
  //       setBannerLoader(false);
  //       console.log("responseBanner", response);
  //     });
  //   } catch (error) {
  //     setBannerLoader(false);
  //     console.log(" bannerErrot", error);
  //     if (!error.response.data.errors) {
  //       return navigate(`/no-connection`);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getBanner();
  // }, []);

  // const filteredBanner = banner.filter(
  //   (bann) => bann.section === "Buyers Hub Slider"
  // );
  // console.log("filteredBanner", filteredBanner);

  const handleChange = (e) => {
    e.preventDefault();
    setInquiry({
      ...inquiry,
      [e.target.name]: e.target.value,
    });
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const createInquiry = {
        productName: inquiry.productName,
        productDescription: inquiry.productDescription,
        quantityRequired: inquiry.quantityRequired,
        destinationPort: country.label,
        termsOfTrade: inquiry.termsOfTrade,
        paymentTerms: inquiry.paymentTerms,
      };
      await axiosInstance.post("/rfq", createInquiry);
      setLoader(false);
      setInquiry({
        productName: "",
        productDescription: "",
        quantityRequired: "1",
        termsOfTrade: "",
        paymentTerms: "",
      });
      setCountry("");
      toast.success(`Your inquiry has been successfully submitted.`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });

      setSuccessMsg(true);
    } catch (err) {
      setLoader(false);
      setSuccessMsg(true);
      if (!err.response.data.errors) {
        return navigate(`/no-connection`);
      }
      toast.error(`${err.response.data.errors[0].message}`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    }
  };

  if (userLoading || loading) {
    return <CardSkeleton />;
  }

  return (
    <div>
      <ToastContainer />
      <BuyHubNavbar />
      {/* Hero Section */}
      <section id="b-hero-section">
        {/* <div
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
        </div> */}
        {/* <div className="slide-container">
          <Slide>
            {filteredBanner &&
              filteredBanner.map((banner, index) => (
                <div className="img-slider-ctn" key={index}>
                  <img
                    src={banner.image && banner.image}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              ))}
          </Slide>
        </div> */}
      </section>

      {/* Trending Products */}
      <section id="b-trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Trending Products</h1>
            </div>
            {/* <div className="col-lg-6" align="right">
              <i
                className="fas fa-chevron-circle-left scroll-icon me-4"
                style={{ color: "#282828", fontSize: "25px" }}
                onClick={() => scroll(-1070)}
              ></i>

              <i
                className="fas fa-chevron-circle-right scroll-icon"
                onClick={() => scroll(1070)}
                style={{ color: "#282828", fontSize: "25px" }}
              ></i>
            </div> */}
          </div>
          <div className="row main-container">
            <div className="p-container">
              {product &&
                product.map((item) => {
                  return (
                    <Link
                      className="link"
                      to={`/details/${item.id}`}
                      key={item.id}
                    >
                      <div className="product-card">
                        <div className="product-card-img">
                          <img
                            src={
                              item.productImages &&
                              item.productImages.filter(
                                (image) => image.isMain === true
                              )[0].image
                            }
                            className="img-fluid product-img"
                            alt="..."
                            style={{
                              width: "100%",

                              objectFit: "cover",
                            }}
                          />
                          <span className="badge bg-success">Updated</span>
                        </div>
                        <div className="product-card-info">
                          <h2 className="product-name">
                            {item && Capitalize(item.productName)}
                          </h2>
                          <h3 className="product-price">
                            <span className="p-currency">{item.currency}</span>{" "}
                            {item.minPricePerUnit} - {item.maxPricePerUnit}{" "}
                            <span className="p-unit">/ MT</span>
                          </h3>
                          <p className="product-spec-sum">
                            <span>Available Specs:</span>
                            <br />
                            {Object.keys(item.productSpecification).length >
                              0 &&
                              Capitalize(
                                Object.entries(item.productSpecification)[0][0]
                              )}
                            :{" "}
                            {Object.keys(item.productSpecification).length >
                              0 &&
                              Object.entries(
                                item.productSpecification
                              )[0][1].slice(0, 16)}
                          </p>
                          <p className="product-link">View Product</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
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
                {user ? (
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Make Inquiry
                  </button>
                ) : (
                  <Link to="/login">
                    <button>Make Inquiry</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inquiry Modal */}
      <div
        className="modal fade place-order-modal"
        id="exampleModal"
        tabIndex="-1"
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
              {succesMsg ? (
                <div className="text-center mt-5 mb-5">
                  We have received your product inquiry. We willl get back to
                  you shortly.
                </div>
              ) : (
                <div className="row">
                  <div className="col-lg-12">
                    <form className="w-100" onSubmit={handleInquirySubmit}>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1">Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Enter Product Name"
                          name="productName"
                          value={inquiry.productName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1">
                          Product Requirements
                        </label>
                        <textarea
                          className="form-control"
                          id=""
                          rows="3"
                          placeholder="Enter product requirements"
                          name="productDescription"
                          value={inquiry.productDescription}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="exampleInputPassword1">
                            Quantity (Metric tonnes)
                          </label>
                          <div className="custom-input form-control">
                            <div className="row">
                              <div className="col-lg-9 col">
                                <input
                                  type="text"
                                  className="form-control custom-style"
                                  id=""
                                  placeholder="Enter quantity"
                                  name="quantityRequired"
                                  value={inquiry.quantityRequired}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="col-lg-3 col">
                                <div className="form-unit">MT</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="exampleInputPassword1">
                            Shipping Terms
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="termsOfTrade"
                            value={inquiry.termsOfTrade}
                            onChange={handleChange}
                          >
                            <option defaultValue="selected">
                              Select shipping terms
                            </option>
                            <option value="FOB">FOB</option>
                            <option value="CIF">CIF</option>
                            <option value="CFR">CFR</option>
                            <option value="LOCAL">Local Delivery</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="exampleInputPassword1">
                            Payment Terms
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="paymentTerms"
                            value={inquiry.paymentTerms}
                            onChange={handleChange}
                          >
                            <option defaultValue="selected">
                              Select payment terms
                            </option>
                            <option value="LC">Letter of Credit (LC)</option>
                            <option value="DP">
                              Document Against Payment (DP)
                            </option>
                            <option value="CAD">
                              Cash Against Document (CAD)
                            </option>
                            <option value="TT">
                              Telegraphic Transfer (TT)
                            </option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="exampleInputPassword1">
                            Destination Country
                          </label>
                          <Select
                            className="custom-country-list"
                            options={options}
                            name="country"
                            value={country}
                            onChange={setCountry}
                          />
                        </div>
                      </div>
                      {!loader ? (
                        <button className="mt-3" type="submit">
                          Submit Inquiry
                        </button>
                      ) : (
                        <button className="mt-3" type="submit">
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Trending Products */}
      {/* <TrendingProduct sectionTitle="Newly Added Products" /> */}
      {/* Newsletter Space */}

      <Footer />
    </div>
  );
};

export default BuyerHome;
