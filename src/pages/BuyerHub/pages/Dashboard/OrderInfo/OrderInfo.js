import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import { axiosInstance } from "./../../../../../components/axios";

import CardSkeleton from "./../../CardSkeleton";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const ViewOrderModal = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState({});
  const [fileLoader, setFileLoader] = useState(false);
  const [orderLoad, setOrderLoad] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});

  const { orderId } = useParams();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const convertDateFormat = (oldDate) => {
    let date = new Date(oldDate).toString().split(" ");
    let newFormat = `${date[0]} ${date[2]}  ${date[1]}, ${date[3]}`;
    return newFormat;
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const viewOrderInfo = async () => {
    setOrderLoad(true);
    await axiosInstance
      .get(`/order/${orderId}`)
      .then((response) => {
        setOrderInfo(response.data.data);
        setOrderLoad(false);
      })
      .catch((error) => {
        setOrderLoad(false);
        console.log(error);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        }
      });
  };

  useEffect(() => {
    viewOrderInfo();
  }, [orderId]);

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

  const handleApproval = async () => {
    try {
      setLoader(true);
      await axiosInstance.get(`/order/approve/${orderInfo.id}`);
      setLoader(false);
      toast.success(`You have successfully approved this order`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    } catch (error) {
      setLoader(false);
      console.log(error);
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

  if (orderLoad) {
    return <CardSkeleton />;
  }

  return (
    <div>
      <ToastContainer />
      <div className="container py-4">
        <div>
          <div>
            <div className="row">
              <div className="col-lg-12">
                <h5 className="modal-sub-title">Order Summary</h5>
                <div className="order-summary row">
                  <div className="os-details py-5 col-lg-6">
                    <table className="table table-borderless">
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
                      </tbody>
                    </table>

                    <div className="line"></div>

                    <p>
                      <span>Total Cost:</span>USD{" "}
                      {orderInfo.cost && numberWithCommas(orderInfo.cost)}
                    </p>

                    <div className="line"></div>
                  </div>
                  {orderInfo.status === "PENDING" && (
                    <div className="order-history  col-lg-6">
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
                        </div>
                      </div>
                      <div className="order-history-details-ctn">
                        <div className="order-circle"></div>
                        <div className="order-history-details">
                          <h6>Payment Uploaded</h6>
                          <p>
                            Uploaded and processed requirements in the payment
                            type of {orderInfo && orderInfo.paymentTerm}
                          </p>
                          {orderInfo.paymentReceipt ? (
                            <a
                              href={orderInfo.paymentReceipt.image}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View receipt
                            </a>
                          ) : (
                            <form className="m-0" onSubmit={handleSubmit}>
                              <div className="d-flex upload-di">
                                <label htmlFor="uploadImage">
                                  <p className="my-0">
                                    Upload payment receipt{" "}
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                      >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z" />
                                      </svg>
                                    </span>
                                  </p>
                                </label>
                                {file && file.name}
                                <input
                                  type="file"
                                  id="uploadImage"
                                  name="file"
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
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {orderInfo.status === "PROCESSING" && (
                    <div className="order-history  col-lg-6">
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
                        </div>
                      </div>
                      <div className="order-history-details-ctn">
                        <div className="order-circle"></div>
                        <div className="order-history-details">
                          <h6>Payment Successful</h6>
                          <p>
                            Uploaded and processed requirements in the payment
                            type of {orderInfo && orderInfo.paymentTerm} with
                            TOFA has been confirmed
                          </p>
                          <p>
                            {" "}
                            {orderInfo.paymentReceipt && (
                              <a
                                href={orderInfo.paymentReceipt.image}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View receipt
                              </a>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="order-history-details-ctn">
                        <div className="order-circle"></div>
                        <div className="order-history-details">
                          <h6>Order Processing</h6>
                          <p>
                            Order for{" "}
                            {orderInfo.quantityOrdered &&
                              numberWithCommas(orderInfo.quantityOrdered)}
                            MT of{" "}
                            {orderInfo.product
                              ? Capitalize(orderInfo.product.productName)
                              : " "}{" "}
                            has been proccessed and ready for shipping.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {orderInfo.status === "SHIPPED" && (
                    <div className="order-history  col-lg-6">
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

                          {orderInfo.paymentReceipt && (
                            <a
                              href={orderInfo.paymentReceipt.image}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View receipt
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="order-history-details-ctn">
                        <div className="order-circle"></div>
                        <div className="order-history-details">
                          <h6>Payment Successful</h6>
                          <p>
                            Uploaded and processed requirements in the payment
                            type of {orderInfo && orderInfo.paymentTerm} with
                            TOFA has been confirmed
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
                            has been processed
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
                    </div>
                  )}
                  {orderInfo.status === "DELIVERED" && (
                    <div className="order-history  col-lg-6">
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

                          {orderInfo.paymentReceipt && (
                            <a
                              href={orderInfo.paymentReceipt.image}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View receipt
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="order-history-details-ctn">
                        <div className="order-circle"></div>
                        <div className="order-history-details">
                          <h6>Payment Successful</h6>
                          <p>
                            Uploaded and processed requirements in the payment
                            type of {orderInfo && orderInfo.paymentTerm} with
                            TOFA has been confirmed
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
                            has been delivered to{" "}
                            {orderInfo && orderInfo.country}.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {orderInfo.status === "CANCELLED" && (
                    <div className="order-history  col-lg-6">
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
                  )}
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
