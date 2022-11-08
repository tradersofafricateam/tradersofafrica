import React, { useState, useEffect, useMemo, useContext } from "react";
import { axios } from "../../../../components/baseUrl";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../../../components/utils/GlobalState";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import Select from "react-select";
import countryList from "react-select-country-list";

import ProductImg3 from "../../../../assets/img/products/p-img3.png";

const OrderModal = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(GlobalContext);
  const [priceSelected, setPriceSelected] = useState("");

  const { productId } = useParams();
  const navigate = useNavigate();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [foreignOrderDetails, setForeignOrderDetails] = useState({
    port: "",
  });

  const [localOrderDetails, setLocalOrderDetails] = useState({
    productID: "",
    quantity: "1",
    countryOfOrigin: "",
    address: "",
    paymentTerm: "",
    grade: "",
    cost: "",
    productRequirement: "",
    specification: "",
  });

  const [country, setCountry] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleOrderChange = (e) => {
    setLocalOrderDetails({
      ...localOrderDetails,
      [e.target.name]: e.target.value,
    });

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

    setLocalOrderDetails({
      ...localOrderDetails,
      countryOfOrigin: selectedCountry,
    });

    setForeignOrderDetails({
      ...foreignOrderDetails,
      countryOfOrigin: selectedCountry,
    });

    setPriceSelected(selectedCountryPrice);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(country.label);
      const createForeignOrder = {
        productID: productInfo.id,
        quantity: localOrderDetails.quantity,
        country: country.label,
        countryOfOrigin: localOrderDetails.countryOfOrigin,
        shipping: localOrderDetails.shipping,
        paymentTerm: localOrderDetails.paymentTerm,
        cost: totalCost,
        port: foreignOrderDetails.port,
        productRequirement: localOrderDetails.productRequirement,
      };
      console.log("foreign order data being sent out", createForeignOrder);
      const {
        data: { data },
      } = await axios.post("/order/foreign", createForeignOrder);
      console.log("create product reponse", data);
      setLocalOrderDetails({
        productID: "",
        quantity: 1,
        countryOfOrigin: "",
        address: "",
        paymentTerm: "",
        grade: "",
        cost: "",
        productRequirement: "",
        specification: "",
      });
      setForeignOrderDetails({
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
          duration: 1500,
          onScreen: true,
        },
        isMobile: true,
        breakpoint: 768,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      navigate(`/details/${productId}`);
    } catch (error) {
      console.log(error.response.data.errors);
      Store.addNotification({
        title: "Order Failed!",
        message: "Try Again.",
        type: "danger",
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
    }
  };

  const handleLocalSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(country.label);
      const createLocalOrder = {
        productID: productInfo.id,
        quantity: localOrderDetails.quantity,
        country: country.label,
        countryOfOrigin: localOrderDetails.countryOfOrigin,
        address: localOrderDetails.address,
        shipping: localOrderDetails.shipping,
        paymentTerm: localOrderDetails.paymentTerm,
        grade: productInfo.parentCategory,
        cost: totalCost,
        specification: productInfo.productName,
        productRequirement: localOrderDetails.productRequirement,
      };

      console.log("local order data being sent out", createLocalOrder);
      const {
        data: { data },
      } = await axios.post("/order/local", createLocalOrder);
      console.log("create product reponse", data);
      Store.addNotification({
        title: "Order Successful!",
        message: "Your order has been successfully placed.",
        type: "success",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500,
          onScreen: true,
        },
        isMobile: true,
        breakpoint: 768,
      });
      setTimeout(() => {
        // navigate(-1);
        window.location.reload();
      }, 1800);
    } catch (error) {
      console.log(error.response.data.errors);
      Store.addNotification({
        title: "Order Failed!",
        message: "Try Again.",
        type: "danger",
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
    }
  };

  const getInfo = async () => {
    try {
      const { data } = await axios.get(`/product/${productId}`);
      setProductInfo(data.data);
      console.log(data.data, "modal specific product");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, [productId]);

  const totalCost = priceSelected * localOrderDetails.quantity;
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade place-order-modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <ReactNotifications />
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mb-4" id="exampleModalLabel">
                {/* {productInfo.productName
                  ? Capitalize(productInfo.productName)
                  : ""} */}
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
                  <form
                    onSubmit={
                      localOrderDetails.shipping === "LOCAL"
                        ? handleLocalSubmit
                        : handleSubmit
                    }
                  >
                    <div class="mb-3">
                      <label for="exampleInputEmail1">
                        Product Requirements
                      </label>
                      <textarea
                        class="form-control"
                        id=""
                        name="productRequirement"
                        value={localOrderDetails.productRequirement}
                        onChange={handleOrderChange}
                        required
                        rows="3"
                        placeholder="Enter product requirements like etc"
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
                                name="quantity"
                                value={localOrderDetails.quantity}
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
                        <label for="exampleInputPassword1">
                          Shipping Terms
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="shipping"
                          value={localOrderDetails.shipping}
                          onChange={handleOrderChange}
                          required
                        >
                          <option selected>Select shipping terms</option>
                          <option value="LOCAL">Local Delivery</option>
                          <option value="CIF">CIF</option>
                          <option value="CFR">CFR</option>
                          <option value="CIP">CIP</option>
                          {/* <option value="CPT">CPT</option>
                          <option value="DDP">DDP</option>
                          <option value="DAT">DAT</option>
                          <option value="DAP">DAP</option>
                          <option value="EXW">EXW</option> */}
                          <option value="FOB">FOB</option>
                          <option value="FAS">FAS</option>
                          <option value="FCA">FCA</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label for="exampleInputPassword1">
                          Country of Origin
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="countryOfOrigin"
                          onChange={selectCountryHandler}
                          required
                        >
                          <option selected>Select country of origin</option>
                          {productInfo.CountryTraded &&
                            productInfo.CountryTraded.map((country, id) => {
                              return (
                                <option
                                  key={id}
                                  value={`${Capitalize(country.countryName)},${
                                    country.price
                                  }`}
                                >
                                  {Capitalize(country.countryName)}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label for="exampleInputPassword1">Payment Terms</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="paymentTerm"
                          value={localOrderDetails.paymentTerm}
                          onChange={handleOrderChange}
                          required
                        >
                          <option selected>Select payment terms</option>
                          <option value="LC">Letter of Credit</option>
                          <option value="CAD">Cash Against Delivery</option>
                          <option value="DP">Document Against Payment</option>
                          <option value="TT">Telegraphic Transfer</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label for="exampleInputPassword1">
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
                      {localOrderDetails.shipping === "LOCAL" ? (
                        <div className="col-lg-6 mb-3">
                          <label for="exampleInputPassword1">
                            Destination Address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            name="address"
                            placeholder="Enter destination port"
                            value={localOrderDetails.address}
                            onChange={handleOrderChange}
                            required
                          />
                        </div>
                      ) : (
                        <div className="col-lg-6 mb-3">
                          <label for="exampleInputPassword1">Port</label>
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            name="port"
                            placeholder="Enter destination port"
                            value={foreignOrderDetails.port}
                            onChange={handleOrderChange}
                            required
                          />
                        </div>
                      )}
                    </div>

                    <p className="modal-info">
                      For local delivery please proceed to chat with a SourcPro
                      agent to continue
                    </p>

                    <div className="col-lg-12">
                      <button type="submit" className="mt-3">
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <h5 className="modal-sub-title">Order Summary</h5>
                  <div className="order-summary">
                    <div class="d-flex mb-2">
                      <div class="flex-shrink-0">
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
                      <div class="flex-grow-1 ms-3">
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
                      <table class="table table-borderless">
                        <tr>
                          <td className="osd-title">Quantity:</td>
                          <td>{localOrderDetails.quantity} MT</td>
                        </tr>
                        <tr>
                          <td className="osd-title">Shipping Terms:</td>
                          <td>{localOrderDetails.shipping}</td>
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
                            {Capitalize(localOrderDetails.countryOfOrigin)}
                          </td>
                        </tr>
                        <tr>
                          <td className="osd-title">Destination:</td>
                          <td>{country.label}</td>
                        </tr>
                        <tr>
                          <td className="osd-title">Payment Terms:</td>
                          <td>{localOrderDetails.paymentTerm}</td>
                        </tr>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
