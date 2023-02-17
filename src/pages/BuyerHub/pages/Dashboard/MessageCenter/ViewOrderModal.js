import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { axiosInstance } from "./../../../../../components/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewOrderModal = ({ orderInfo, handleApproval, loader, orderLoad }) => {
  const navigate = useNavigate();

  const [file, setFile] = useState({});
  const [fileLoader, setFileLoader] = useState(false);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const convertDateFormat = (oldDate) => {
    let date = new Date(oldDate).toString().split(" ");
    let newFormat = `${date[0]} ${date[2]}  ${date[1]}, ${date[3]}`;
    return newFormat;
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFileLoader(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      await axiosInstance.post(`/order/image/${orderInfo.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFileLoader(false);
      toast.success(`You have successfully uploaded your payment receipt`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 6800);
    } catch (error) {
      setFileLoader(false);
      console.log("error", error);
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
      toast.error(`${error.response.data.errors[0].message}`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div
      className="modal fade place-order-modal"
      id="vieworderModall"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <ToastContainer />
      {orderLoad ? (
        <div className="gooey">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
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
              <div className="overview-card row">
                <h2>Order summary</h2>
                <div className="col-lg-6">
                  <div className="os-details py-5">
                    <table className="table table-borderless table-striped">
                      <tbody>
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
                          <td className="osd-title">Shipping Term:</td>
                          <td>
                            <span>
                              {orderInfo && orderInfo.incoterm === "LOCAL" && (
                                <span>Local Delivery</span>
                              )}
                            </span>
                            <span>
                              {orderInfo && orderInfo.incoterm === "FOB" && (
                                <span>Free on Board</span>
                              )}
                            </span>
                            <span>
                              {orderInfo && orderInfo.incoterm === "CIF" && (
                                <span>Cost, Insurance, and Freight</span>
                              )}
                            </span>
                            <span>
                              {orderInfo && orderInfo.incoterm === "CFR" && (
                                <span>Cost and Freight</span>
                              )}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="osd-title">Payment Terms:</td>
                          <td>
                            <span>
                              {orderInfo && orderInfo.paymentTerm === "LC" && (
                                <span>Letter of Credit</span>
                              )}
                            </span>
                            <span>
                              {" "}
                              {orderInfo && orderInfo.paymentTerm === "CAD" && (
                                <span>Cash Against Delivery</span>
                              )}
                            </span>
                            <span>
                              {orderInfo && orderInfo.paymentTerm === "DP" && (
                                <span>Document Against Payment</span>
                              )}
                            </span>
                            <span>
                              {" "}
                              {orderInfo && orderInfo.paymentTerm === "TT" && (
                                <span>Telegraphic Transfer</span>
                              )}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="osd-title">Origin:</td>
                          <td>
                            {orderInfo.countryOfOrigin &&
                              orderInfo.countryOfOrigin}
                          </td>
                        </tr>
                        <tr>
                          <td className="osd-title">Destination Country:</td>
                          <td>{orderInfo && orderInfo.country}</td>
                        </tr>
                        <tr>
                          <td className="osd-title">Destination Port:</td>
                          <td>{orderInfo && orderInfo.port}</td>
                        </tr>
                        <tr>
                          <td className="osd-title">Date created:</td>
                          <td>
                            {orderInfo.createdAt &&
                              convertDateFormat(orderInfo.createdAt)}
                          </td>
                        </tr>
                        <tr>
                          <td className="osd-title">Total Cost:</td>
                          <td>
                            USD{" "}
                            {orderInfo.cost && numberWithCommas(orderInfo.cost)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-5 offset-1 py-5 ">
                  {orderInfo.status === "CANCELLED" ? (
                    <div className="order-history ">
                      <h5 className="modal-sub-title">Order history</h5>
                      <div className="order-history-details-ctn">
                        <div className="order-circle"></div>
                        <div className="order-history-details">
                          <h3>Order Cancelled</h3>
                          <p>
                            If you didn't request your order to be cancelled,
                            contact us <Link to=""> here</Link> to get full
                            details.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="order-history">
                      {/* <h5 className="modal-sub-title">Order history</h5> */}
                      <div className="order-history-details-ctn">
                        <div className="order-circle"></div>
                        <div className="order-history-details">
                          <h6 className="order-history-title">Order Placed</h6>
                          <p className="order-history-info">
                            Placed Order for{" "}
                            {orderInfo.quantityOrdered &&
                              numberWithCommas(orderInfo.quantityOrdered)}
                            MT of{" "}
                            {orderInfo.product
                              ? Capitalize(orderInfo.product.productName)
                              : " "}{" "}
                            to be delivered to {orderInfo && orderInfo.country}.
                          </p>
                        </div>
                      </div>
                      <div className="order-history-details-ctn">
                        <div
                          className={
                            orderInfo.status === "PENDING"
                              ? "order-circle-next"
                              : "order-circle"
                          }
                        ></div>
                        <div
                          className={
                            orderInfo.status === "PENDING"
                              ? `${"order-history-details"} ${"opacity"}`
                              : "order-history-details"
                          }
                        >
                          <h6 className="order-history-title">
                            Payment Uploaded
                          </h6>
                          <p className="order-history-info">
                            Uploaded and processed requirements in the payment
                            type of {orderInfo && orderInfo.paymentTerm}
                          </p>
                          {orderInfo.paymentTerm === "DP" ? (
                            ""
                          ) : orderInfo.paymentTerm === "CAD" ? (
                            ""
                          ) : (
                            <div>
                              {orderInfo.paymentReceipt ? (
                                <a
                                  className="custom-file-upload"
                                  href={orderInfo.paymentReceipt.image}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View receipt
                                </a>
                              ) : (
                                <form className="m-0" onSubmit={handleSubmit}>
                                  <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                      <label
                                        htmlFor="uploadImage"
                                        className="custom-file-upload me-2"
                                      >
                                        {/* <i className="fas fa-file-upload list_icon me-2"></i> */}
                                        Upload Payment Proof
                                      </label>
                                      {file && file.name}
                                      <input
                                        className="file-upload"
                                        id="uploadImage"
                                        onChange={handleChange}
                                        name="file"
                                        type="file"
                                      />
                                    </div>
                                    <div className="col-auto">
                                      {!fileLoader ? (
                                        <button type="submit">Submit</button>
                                      ) : (
                                        <button>
                                          <span
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                          ></span>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </form>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="order-history-details-ctn">
                        <div
                          className={
                            orderInfo.status === "PENDING"
                              ? "order-circle-wait"
                              : orderInfo.paymentReceipt ||
                                orderInfo.status === "PROCESSING"
                              ? "order-circle-next"
                              : "order-circle"
                          }
                        ></div>
                        <div
                          className={
                            orderInfo.status === "PENDING" ||
                            orderInfo.status === "PROCESSING"
                              ? `${"order-history-details"} ${"opacity"}`
                              : "order-history-details"
                          }
                        >
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
                        <div
                          className={
                            orderInfo.status === "PENDING" ||
                            orderInfo.status === "PROCESSING"
                              ? "order-circle-wait"
                              : orderInfo.status === "SHIPPED"
                              ? "order-circle-next"
                              : "order-circle"
                          }
                        ></div>
                        <div
                          className={
                            orderInfo.status === "PENDING" ||
                            orderInfo.status === "PROCESSING" ||
                            orderInfo.status === "SHIPPED"
                              ? `${"order-history-details"} ${"opacity"}`
                              : "order-history-details"
                          }
                        >
                          <h6>Order Delivered</h6>
                          <p>
                            Order for{" "}
                            {orderInfo.quantityOrdered &&
                              numberWithCommas(orderInfo.quantityOrdered)}
                            MT of{" "}
                            {orderInfo.product
                              ? Capitalize(orderInfo.product.productName)
                              : " "}{" "}
                            has been delivered to{" "}
                            {orderInfo && orderInfo.country}.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div>
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
      )}
    </div>
  );
};

export default ViewOrderModal;
