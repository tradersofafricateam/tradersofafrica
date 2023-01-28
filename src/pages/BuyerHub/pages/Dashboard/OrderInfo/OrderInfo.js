import React, { useState } from "react";
import { axios } from "../../../../../components/baseUrl";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import { useNavigate, Link } from "react-router-dom";

const ViewOrderModal = ({ orderInfo, Capitalize }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState({});
  const [fileLoader, setFileLoader] = useState(false);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // const convertDateFormat = (oldDate) => {
  //   let date = new Date(oldDate).toString().split(" ");
  //   return date[2] + " " + date[1] + "," + " " + date[3];
  // };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFileLoader(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      await axios.post(`/order/image/${orderInfo.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
    } catch (error) {
      setFileLoader(false);
      console.log("error", error);
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
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

  const handleApproval = async () => {
    try {
      setLoader(true);
      await axios.get(`/order/approve/${orderInfo.id}`);
      setLoader(false);
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
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
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

  // if (orderLoad) {
  //   <div
  //     className="modal fade place-order-modal"
  //     id="vieworderModal"
  //     tabindex="-1"
  //     aria-labelledby="exampleModalLabel"
  //     aria-hidden="true"
  //   >
  //     <div className="gooey">
  //       <span className="dot"></span>
  //       <div className="dots">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //       </div>
  //     </div>
  //   </div>;
  // }

  return (
    <div
      className="modal fade place-order-modal"
      id="vieworderModal"
      tabIndex="-1"
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
                      </tbody>

                      {/* <tr>
                        <td className="osd-title">Date created:</td>
                        <td>
                          {orderInfo.createdAt &&
                            convertDateFormat(orderInfo.createdAt)}
                        </td>
                      </tr> */}
                    </table>

                    <div className="line"></div>

                    <p>
                      <span>Total Cost:</span>USD{" "}
                      {orderInfo.cost && numberWithCommas(orderInfo.cost)}
                    </p>

                    <div className="line"></div>
                  </div>
                  {orderInfo.status === "PENDING" && (
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
                    <div className="order-history">
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
