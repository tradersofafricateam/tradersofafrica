import React, { useEffect, useState, useMemo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Iconly } from "react-iconly";
import Footer from "../../../../components/Footer/Footer";
import BuyHubNavbar from "../../components/BuyHubNavbar/BuyHubNavbar";
import OrderModal from "../OrderModal/OrderModal";
import { axios } from "../../../../components/baseUrl";
import { useParams } from "react-router-dom";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Select from "react-select";
import countryList from "react-select-country-list";
import "./Details.css";

import { GlobalContext } from "../../../../components/utils/GlobalState";
import TrendingProduct from "../../components/TrendingProduct";
import CommodityInsight from "../../components/CommodityInsight";
import CardSkeleton from "../CardSkeleton";

const Details = () => {
  const { user, userLoading } = useContext(GlobalContext);
  const [productInfo, setProductInfo] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [customError, setCustomError] = useState("");
  const { productId } = useParams();
  const navigate = useNavigate();
  const productInterest = "You might be interested in";

  const [inquiry, setInquiry] = useState({
    productDescription: "",
    quantityRequired: "1",
    termsOfTrade: "",
    paymentTerms: "",
  });

  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    setInquiry({
      ...inquiry,
      [e.target.name]: e.target.value,
    });
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // const shuffleArray = (array) => {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  // };

  const displayImageHandler = (imageIndex) => {
    const newProductImages = productImages.map((image, index) => {
      image.isMain = false;
      if (index === imageIndex) {
        image.isMain = true;
      }
      return image;
    });
    setProductImages(newProductImages);
    setCurrentImage(newProductImages[imageIndex]);
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const createInquiry = {
        productName: productInfo.productName,
        productDescription: inquiry.productDescription,
        quantityRequired: inquiry.quantityRequired,
        destinationPort: country.label,
        termsOfTrade: inquiry.termsOfTrade,
        paymentTerms: inquiry.paymentTerms,
      };
      await axios.post("/rfq", createInquiry);
      setLoader(false);
      setInquiry({
        productDescription: "",
        quantityRequired: "1",
        termsOfTrade: "",
        paymentTerms: "",
      });
      setCountry("");
      Store.addNotification({
        title: "Inquiry Successful!",
        message: "Your inquiry has been successfully sent.",
        type: "success",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
        isMobile: true,
        breakpoint: 768,
      });
    } catch (err) {
      setLoader(false);
      if (!err.response.data.errors) {
        return navigate(`/no-connection`);
      }
      setCustomError(err.response.data.errors[0].message);

      Store.addNotification({
        title: "Failed!",
        message: err.response.data.errors[0].message,
        type: "danger",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
        isMobile: true,
        breakpoint: 768,
      });
    }
  };

  const getInfo = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/product/${productId}`);
      setProductInfo(data.data);
      setProductImages(data.data.productImages);
      const mainImage = data.data.productImages.filter(
        (image) => image.isMain === true
      )[0];
      setCurrentImage(mainImage);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, [productId]);

  if (isLoading || userLoading) {
    return <CardSkeleton />;
  }
  return (
    <div>
      <ReactNotifications />
      <BuyHubNavbar />
      <div>
        <section id="product-details">
          <div className="container">
            <div className="row mb-2">
              <div className="col-lg-12">
                <p className="back-text">
                  <Link to="/buy-commodities">
                    <Iconly
                      className="list_icon me-3"
                      primaryColor=""
                      name="ArrowLeft"
                      set="light"
                      size="small"
                    />
                    Browse Products
                  </Link>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5">
                <div className="mp-wrap">
                  <div className="main-product-pic">
                    {" "}
                    <img
                      src={currentImage.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="product-thumbnail">
                    <div className="d-flex justify-content-start flex-wrap">
                      {productImages &&
                        productImages.slice(0, 5).map((image, index) => (
                          <div
                            key={index}
                            className="pt-box"
                            onClick={() => displayImageHandler(index)}
                          >
                            <img
                              src={image.image}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="main-product-details">
                  <h2 className="m-product-name">
                    {productInfo.productName &&
                      Capitalize(productInfo.productName)}
                  </h2>
                  <h3 className="m-product-price">
                    <span className="mp-currency">{productInfo.currency}</span>{" "}
                    {productInfo.minPricePerUnit} -{" "}
                    {productInfo.maxPricePerUnit}
                    <span className="mp-unit"> / MT</span>
                  </h3>

                  <div className="m-product-info-wrap d-flex justify-content-start">
                    <p className="m-product-info">
                      <span>Minimum Order: </span>
                      {productInfo.minOrdersAllowed} MT
                    </p>
                    <p className="m-product-info">
                      <span>Capacity: </span>
                      {productInfo.supplyCapacity} MT / Monthly
                    </p>
                    <p className="m-product-info">
                      <span>Lead time: </span>
                      {productInfo.minDuration} - {productInfo.maxDuration}
                    </p>
                  </div>

                  <div className="m-product-spec-box">
                    <h3 className="m-product-spec-title">
                      Product Specification
                      <a className="spec-link" href="#product-description">
                        See full Specification
                      </a>
                    </h3>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td className="mps-title">
                            {productInfo.productSpecification &&
                              Capitalize(
                                Object.entries(
                                  productInfo.productSpecification
                                )[0][0]
                              )}
                            :
                          </td>
                          <td>
                            {productInfo.productSpecification &&
                              Capitalize(
                                Object.entries(
                                  productInfo.productSpecification
                                )[0][1]
                              )}
                          </td>
                        </tr>

                        <tr>
                          <td className="mps-title">Sub-category:</td>
                          <td>{productInfo.subCategory}</td>
                        </tr>
                        <tr>
                          <td className="mps-title">Origin:</td>
                          <td>
                            {productInfo.CountryTraded &&
                              productInfo.CountryTraded.map(
                                (country, index) => (
                                  <span key={index}>
                                    {Capitalize(country.countryName)},{" "}
                                  </span>
                                )
                              )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="m-product-cta">
                    <button
                      className="order-cta"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Place Order
                    </button>
                    <a className="spec-link" href="#inquiry-form">
                      <button className="inquiry-cta">Make Inquiry</button>
                    </a>
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
                  <table className="table table-striped">
                    <tbody>
                      {productInfo.productSpecification &&
                        Object.entries(productInfo.productSpecification)
                          .slice(1, productInfo.productSpecification.length)
                          .map((specification) => (
                            <tr>
                              <td className="mps-title">
                                {Capitalize(specification[0])}:
                              </td>
                              <td>{Capitalize(specification[1])}</td>
                            </tr>
                          ))}
                      <tr>
                        <td className="mps-title">Sub-category:</td>
                        <td>{productInfo.subCategory}</td>
                      </tr>

                      <tr>
                        <td className="mps-title">Origin:</td>
                        <td>
                          {" "}
                          {productInfo.CountryTraded &&
                            productInfo.CountryTraded.filter(
                              (country) => country.countryName !== null
                            ).map((country, index) => (
                              <span key={index}>
                                {Capitalize(country.countryName)},{" "}
                              </span>
                            ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Product Description */}
                <div className="m-product-spec-box">
                  <h3 className="m-product-spec-title2 mb-1">
                    Product Description
                  </h3>
                  <p className="mp-desc">{productInfo.productDescription}</p>
                </div>

                {/* Product Certification */}
                <div className="m-product-spec-box">
                  <h3 className="m-product-spec-title2 mb-1 mt-5">
                    Product Certification
                  </h3>

                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inquiry-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="m-product-spec-box">
                  <h3 className="m-product-spec-title2 mb-1">
                    Product Inquiry
                  </h3>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="modal-contact-info">
                        <h4 className="contact-head">Contact information</h4>
                        <p>{user.fullName}</p>
                        {/* <p>Dory International Trading Company</p> */}
                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="inq-form-wrap">
                        <form onSubmit={handleInquirySubmit}>
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
                                Quantity
                              </label>
                              <div className="custom-input form-control">
                                <div className="row">
                                  <div className="col-lg-7 col">
                                    <input
                                      type="number"
                                      className="form-control custom-style"
                                      id=""
                                      placeholder="Enter quantity"
                                      name="quantityRequired"
                                      value={inquiry.quantityRequired}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  <div className="col-lg-5 col">
                                    <div className="form-unit">metric tons</div>
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
                                <option value="LC">Letter of Credit</option>
                                <option value="CAD">
                                  Cash Against Delivery
                                </option>
                                <option value="DP">
                                  Document Against Payment
                                </option>
                                <option value="TT">Telegraphic Transfer</option>
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
                          <p
                            className="errors"
                            style={{ color: "red", fontSize: "11px" }}
                          >
                            {customError && customError}
                          </p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CommodityInsight productInfo={productInfo} />
        <TrendingProduct sectionTitle={productInterest} />
      </div>
      <Footer />
    </div>
  );
};

export default Details;
