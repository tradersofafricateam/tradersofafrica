import React, { useState, useEffect, useMemo } from "react";
import { axios } from "../../../../components/baseUrl";
import { useNavigate, useParams } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import Select from "react-select";
import countryList from "react-select-country-list";

const OrderModal = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [loader, setLoader] = useState(false);
  const [priceSelected, setPriceSelected] = useState("");

  const { productId } = useParams();
  const navigate = useNavigate();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [foreignOrderDetails, setForeignOrderDetails] = useState({
    port: "",
    quantity: "1",
    countryOfOrigin: "",
    shipping: "",
    paymentTerm: "",
    productRequirement: "",
  });

  const [country, setCountry] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleOrderChange = (e) => {
    setForeignOrderDetails({
      ...foreignOrderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const selectCountryHandler = (e) => {
    const value = e.target.value;
    const valueArray = value.split(",");

    const selectedCountry = valueArray[0];
    const selectedCountryPrice = valueArray[1];

    setForeignOrderDetails({
      ...foreignOrderDetails,
      countryOfOrigin: selectedCountry,
    });

    setPriceSelected(selectedCountryPrice);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const createForeignOrder = {
        productID: productInfo.id,
        quantity: foreignOrderDetails.quantity,
        country: country.label,
        countryOfOrigin: foreignOrderDetails.countryOfOrigin,
        shipping: foreignOrderDetails.shipping,
        paymentTerm: foreignOrderDetails.paymentTerm,
        cost: totalCost,
        port: foreignOrderDetails.port,
        productRequirement: foreignOrderDetails.productRequirement,
      };
      await axios.post("/order/foreign", createForeignOrder);

      setLoader(false);
      setForeignOrderDetails({
        quantity: 1,
        countryOfOrigin: "",
        paymentTerm: "",
        cost: "",
        productRequirement: "",
        shipping: "",
        port: "",
      });

      setCountry("");
      Store.addNotification({
        title: "Order Successful!",
        message: "Your order has been successfully placed",
        type: "success",
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

      navigate(`/details/${productId}`);
    } catch (err) {
      setLoader(false);
      if (!err.response.data.errors) {
        return navigate(`/no-connection`);
      }
      Store.addNotification({
        title: "Order Failed!",
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
      const { data } = await axios.get(`/product/${productId}`);
      setProductInfo(data.data);
    } catch (error) {
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
    }
  };

  useEffect(() => {
    getInfo();
  }, [productId]);

  const totalCost = priceSelected * foreignOrderDetails.quantity;
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade place-order-modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <ReactNotifications />
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mb-4" id="exampleModalLabel">
                Place order now
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
                <div className="col-lg-8">
                  <h5 className="modal-sub-title">Product information</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1">
                        Product Requirements
                      </label>
                      <textarea
                        className="form-control"
                        id=""
                        name="productRequirement"
                        value={foreignOrderDetails.productRequirement}
                        onChange={handleOrderChange}
                        required
                        rows="3"
                        placeholder="Enter product requirements like etc"
                      ></textarea>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="exampleInputPassword1">Quantity</label>
                        <div className="custom-input form-control">
                          <div className="row">
                            <div className="col-lg-7 col">
                              <input
                                type="number"
                                className="form-control custom-style"
                                id=""
                                placeholder="Enter quantity"
                                name="quantity"
                                value={foreignOrderDetails.quantity}
                                onChange={handleOrderChange}
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
                          name="shipping"
                          value={foreignOrderDetails.shipping}
                          onChange={handleOrderChange}
                          required
                        >
                          <option defaultValue="selected">
                            Select shipping terms
                          </option>
                          <option value="LOCAL">Local Delivery</option>
                          <option value="CIF">CIF</option>
                          <option value="CFR">CFR</option>
                          <option value="FOB">FOB</option>
                        </select>
                      </div>
                    </div>
                    {foreignOrderDetails.shipping === "LOCAL" ? (
                      ""
                    ) : foreignOrderDetails.shipping === "CIF" ? (
                      ""
                    ) : foreignOrderDetails.shipping === "CFR" ? (
                      ""
                    ) : (
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="exampleInputPassword1">
                            Country of Origin
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="countryOfOrigin"
                            onChange={selectCountryHandler}
                            required
                          >
                            <option defaultValue="selected">
                              Select country of origin
                            </option>
                            {productInfo.CountryTraded &&
                              productInfo.CountryTraded.map((country, id) => {
                                return (
                                  <option
                                    key={id}
                                    value={`${Capitalize(
                                      country.countryName
                                    )},${country.price}`}
                                  >
                                    {Capitalize(country.countryName)}
                                  </option>
                                );
                              })}
                          </select>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <label htmlFor="exampleInputPassword1">
                            Payment Terms
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="paymentTerm"
                            value={foreignOrderDetails.paymentTerm}
                            onChange={handleOrderChange}
                            required
                          >
                            <option defaultValue="selected">
                              Select payment terms
                            </option>
                            <option value="LC">Letter of Credit</option>
                            <option value="CAD">Cash Against Delivery</option>
                            <option value="DP">Document Against Payment</option>
                            <option value="TT">Telegraphic Transfer</option>
                          </select>
                        </div>
                      </div>
                    )}
                    {foreignOrderDetails.shipping === "LOCAL" ? (
                      ""
                    ) : foreignOrderDetails.shipping === "CIF" ? (
                      ""
                    ) : foreignOrderDetails.shipping === "CFR" ? (
                      ""
                    ) : (
                      <div className="row">
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

                        <div className="col-lg-6 mb-3">
                          <label htmlFor="exampleInputPassword1">Port</label>
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            name="port"
                            placeholder="Enter destination port"
                            value={foreignOrderDetails.port}
                            onChange={handleOrderChange}
                            required
                          />
                        </div>
                      </div>
                    )}

                    <p className="modal-info">
                      For local, CIF and CFR shipping delivery, please proceed
                      to chat with a SourcPro agent on the message center
                    </p>
                    {foreignOrderDetails.shipping === "LOCAL" ? (
                      ""
                    ) : foreignOrderDetails.shipping === "CIF" ? (
                      ""
                    ) : foreignOrderDetails.shipping === "CFR" ? (
                      ""
                    ) : (
                      <div className="col-lg-12">
                        {!loader ? (
                          <button type="submit" className="mt-3">
                            Place Order
                          </button>
                        ) : (
                          <button type="submit" className="mt-3">
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          </button>
                        )}
                      </div>
                    )}
                  </form>
                </div>

                {foreignOrderDetails.shipping === "LOCAL" ? (
                  ""
                ) : foreignOrderDetails.shipping === "CIF" ? (
                  ""
                ) : foreignOrderDetails.shipping === "CFR" ? (
                  ""
                ) : (
                  <div className="col-lg-4">
                    <h5 className="modal-sub-title">Order Summary</h5>
                    <div className="order-summary">
                      <div className="d-flex mb-2">
                        <div className="flex-shrink-0">
                          <img
                            src={
                              productInfo.productImages &&
                              productInfo.productImages.filter(
                                (image) => image.isMain === true
                              )[0].image
                            }
                            alt=""
                            style={{
                              width: "80px",
                              height: "80px",
                            }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h2 className="s-product-name">
                            {productInfo.productName
                              ? Capitalize(productInfo.productName)
                              : ""}
                          </h2>
                          <h3 className="s-product-price">
                            <span className="s-mp-currency">
                              {productInfo.currency}
                            </span>{" "}
                            {productInfo.minPricePerUnit} -{" "}
                            {productInfo.maxPricePerUnit}
                            <span className="s-mp-unit"> / MT</span>
                          </h3>
                        </div>
                      </div>

                      <div className="os-details">
                        <table className="table table-borderless">
                          <tbody>
                            <tr>
                              <td className="osd-title">Quantity:</td>
                              <td>{foreignOrderDetails.quantity} MT</td>
                            </tr>
                            <tr>
                              <td className="osd-title">Shipping Terms:</td>
                              <td>{foreignOrderDetails.shipping}</td>
                            </tr>
                            <tr>
                              <td className="osd-title">Price / MT:</td>
                              <td>
                                {productInfo.currency} {priceSelected}
                              </td>
                            </tr>
                            <tr>
                              <td className="osd-title">Origin:</td>
                              <td>
                                {" "}
                                {Capitalize(
                                  foreignOrderDetails.countryOfOrigin
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td className="osd-title">Destination:</td>
                              <td>{country.label}</td>
                            </tr>
                            <tr>
                              <td className="osd-title">Payment Terms:</td>
                              <td>{foreignOrderDetails.paymentTerm}</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="line"></div>

                        <p>
                          <span>Total Cost:</span> {productInfo.currency}{" "}
                          {numberWithCommas(totalCost)}
                        </p>

                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
