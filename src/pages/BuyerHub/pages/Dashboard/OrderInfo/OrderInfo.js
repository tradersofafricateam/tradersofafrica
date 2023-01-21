import React, { useState } from "react";
import { axios } from "../../../../../components/baseUrl";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const ViewOrderModal = ({ orderInfo, Capitalize }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState();
  const [fileLoader, setFileLoader] = useState(false);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const convertDateFormat = (oldDate) => {
    let date = new Date(oldDate).toString().split(" ");
    return date[2] + " " + date[1] + "," + " " + date[3];
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFileLoader(true);
    const formData = new FormData();
    formData.append("file", file);
    // formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(`/order/image/${orderInfo.id}`, formData, config)
      .then((response) => {
        console.log(response.data);
        setFileLoader(false);
        Store.addNotification({
          title: "Successful!",
          message: "You have successfully uploaded your payment receipt",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
          isMobile: true,
          breakpoint: 768,
        });
      })
      .catch((error) => {
        setFileLoader(false);
        console.log("error", error);
        Store.addNotification({
          title: "Failed, Try again!",
          message: error.response.data.errors[0].message,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
          isMobile: true,
          breakpoint: 768,
        });
      });
  }

  console.log("orderInfo", orderInfo);

  const handleApproval = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get(`/order/approve/${orderInfo.id}`);
      setLoader(false);
      console.log("response", data);
      Store.addNotification({
        title: "Successful!",
        message: "You have successfully approved this order",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
        isMobile: true,
        breakpoint: 768,
      });
    } catch (error) {
      setLoader(false);
      console.log("error", error);
      Store.addNotification({
        title: "Failed, Try again!",
        message: error.response.data.errors[0].message,
        type: "danger",
        insert: "top",
        container: "top-right",
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

  return (
    <div
      className="modal fade place-order-modal"
      id="vieworderModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <ReactNotifications />
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
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
                <h5 className="modal-sub-title">Order Summary</h5>
                <div className="order-summary">
                  <div className="os-details">
                    <table class="table table-borderless">
                      <tr>
                        <td className="osd-title">Product Name:</td>
                        <td>
                          {orderInfo.product
                            ? Capitalize(orderInfo.product.productName)
                            : " "}
                        </td>
                      </tr>
                      <tr>
                        <td className="osd-title">Order :</td>
                        <td>{orderInfo && orderInfo.orderNumber}</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Quantity:</td>
                        <td>
                          {orderInfo.quantityOrdered &&
                            numberWithCommas(orderInfo.quantityOrdered)}
                        </td>
                      </tr>
                      <tr>
                        <td className="osd-title">Incoterm:</td>
                        <td>{orderInfo && orderInfo.incoterm}</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Shipping Term:</td>
                        <td>{orderInfo && orderInfo.shippingType}</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Payment Terms:</td>
                        <td>{orderInfo && orderInfo.paymentTerm}</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Origin:</td>
                        <td>
                          {orderInfo.countryOfOrigin &&
                            orderInfo.countryOfOrigin}
                        </td>
                      </tr>
                      <tr>
                        <td className="osd-title">Destination:</td>
                        <td>{orderInfo && orderInfo.country}</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Date created:</td>
                        <td>
                          {orderInfo.createdAt &&
                            convertDateFormat(orderInfo.createdAt)}
                        </td>
                      </tr>
                    </table>

                    <div className="line"></div>

                    <p>
                      <span>Total Cost:</span>USD{" "}
                      {orderInfo.cost && numberWithCommas(orderInfo.cost)}
                    </p>

                    <div className="line"></div>
                  </div>
                  <div className="order-history">
                    <h5 className="modal-sub-title">Order history</h5>
                    <div className="order-history-details-ctn">
                      <div className="order-circle"></div>
                      <div className="order-history-details">
                        <h6>Order Placed</h6>
                        <p>
                          Placed Order for{" "}
                          {orderInfo.quantityOrdered &&
                            numberWithCommas(orderInfo.quantityOrdered)}
                          MT of{" "}
                          {orderInfo.product
                            ? Capitalize(orderInfo.product.productName)
                            : " "}{" "}
                          to be delivered to {orderInfo && orderInfo.country}.
                        </p>
                        <form className="m-0" onSubmit={handleSubmit}>
                          <div className="d-flex upload-di">
                            <label htmlFor="uploadImage">
                              <p className="my-0">Upload payment receipt</p>
                            </label>
                            <input
                              type="file"
                              id="uploadImage"
                              onChange={handleChange}
                              className="m-0"
                            />
                          </div>
                          {!fileLoader ? (
                            <button type="submit">upload</button>
                          ) : (
                            <button>
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
                    <div className="order-history-details-ctn">
                      <div className="order-circle"></div>
                      <div className="order-history-details">
                        <h6>Payment Successful</h6>
                        <p>
                          Uploaded and processed requirements in the payment
                          type of {orderInfo && orderInfo.paymentTerm} with the
                          supplier and it has been confirmed
                        </p>
                      </div>
                    </div>
                    <div className="order-history-details-ctn">
                      <div className="order-circle"></div>
                      <div className="order-history-details">
                        <h6>Order Processed</h6>
                        <p>
                          Order for{" "}
                          {orderInfo.quantityOrdered &&
                            numberWithCommas(orderInfo.quantityOrdered)}
                          MT of{" "}
                          {orderInfo.product
                            ? Capitalize(orderInfo.product.productName)
                            : " "}{" "}
                          has been shipped
                        </p>
                      </div>
                    </div>
                    <div className="order-history-details-ctn">
                      <div className="order-circle"></div>
                      <div className="order-history-details">
                        <h6>Order Shipped</h6>
                        <p>
                          Order for{" "}
                          {orderInfo.quantityOrdered &&
                            numberWithCommas(orderInfo.quantityOrdered)}
                          MT of{" "}
                          {orderInfo.product
                            ? Capitalize(orderInfo.product.productName)
                            : " "}{" "}
                          has been shipped
                        </p>
                      </div>
                    </div>
                    <div className="order-history-details-ctn">
                      <div className="order-circle"></div>
                      <div className="order-history-details">
                        <h6>Order Delivered</h6>
                        <p>
                          Order for{" "}
                          {orderInfo.quantityOrdered &&
                            numberWithCommas(orderInfo.quantityOrdered)}
                          MT of{" "}
                          {orderInfo.product
                            ? Capitalize(orderInfo.product.productName)
                            : " "}{" "}
                          has been delivered to {orderInfo && orderInfo.country}
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!orderInfo.buyerApproved && (
                <div className="col-lg-12">
                  {!loader ? (
                    <button className="mt-3" onClick={handleApproval}>
                      Approve Order
                    </button>
                  ) : (
                    <button className="mt-3" onClick={handleApproval}>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderModal;
