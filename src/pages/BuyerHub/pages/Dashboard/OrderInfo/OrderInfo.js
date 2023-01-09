import React from "react";
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import { ReactNotifications } from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";

const ViewOrderModal = ({ orderInfo, Capitalize }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const convertDateFormat = (oldDate) => {
    let date = new Date(oldDate).toString().split(" ");
    return date[2] + " " + date[1] + "," + " " + date[3];
  };

  //   const submit = (e) => {
  //     confirmAlert({
  //       title: "Confirm Order",
  //       message: "Are you sure you're ok with Order details?",
  //       buttons: [
  //         {
  //           label: "Yes",
  //           onClick: (e) => handleSubmit(e),
  //         },
  //         {
  //           label: "No",
  //         },
  //       ],
  //     });
  //   };

  //   const handleAprrove = (productId) => {
  //   axios
  //   .delete(`/order/approve/${productId}`)
  //   .then((response) => {
  //     Store.addNotification({
  //       title: "Successful!",
  //       message: "You have successfully deleted this product",
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
  //     setTimeout(() => {
  //       Navigate(-1);
  //     }, 5800);
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     Store.addNotification({
  //       title: "Failed, Try again!",
  //       message: error.response.data.errors[0].message,
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
  //   });
  // };

  return (
    <div
      className="modal fade place-order-modal"
      id="vieworderModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
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
                </div>
              </div>
              {/* {!orderInfo.buyerApproved ? (
                <div className="col-lg-12">
                  <button className="mt-3" >Approve Order</button>
                </div>
              ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderModal;
