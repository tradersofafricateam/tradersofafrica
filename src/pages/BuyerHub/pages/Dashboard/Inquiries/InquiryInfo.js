import React from "react";

const InquiryInfo = ({ inquiryInfo, inquiryLoad }) => {
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
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {inquiryLoad ? (
          <div className="gooey">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Inquiry Details
                </h5>
              </div>
              <div className="modal-body">
                <div className="col-lg-12">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td className="osd-title">Product Name:</td>
                        <td>
                          {inquiryInfo.productName
                            ? Capitalize(inquiryInfo.productName)
                            : " "}
                        </td>
                      </tr>

                      <tr>
                        <td className="osd-title">Quantity:</td>
                        <td>
                          {inquiryInfo.quantityRequired &&
                            numberWithCommas(inquiryInfo.quantityRequired)}
                        </td>
                      </tr>
                      <tr>
                        <td className="osd-title">Shipping Term:</td>
                        <td>
                          <span>
                            {inquiryInfo &&
                              inquiryInfo.termsOfTrade === "LOCAL" && (
                                <span>Local Delivery</span>
                              )}
                          </span>
                          <span>
                            {inquiryInfo &&
                              inquiryInfo.termsOfTrade === "FOB" && (
                                <span>Free on Board</span>
                              )}
                          </span>
                          <span>
                            {inquiryInfo &&
                              inquiryInfo.termsOfTrade === "CIF" && (
                                <span>Cost, Insurance, and Freight</span>
                              )}
                          </span>
                          <span>
                            {inquiryInfo &&
                              inquiryInfo.termsOfTrade === "CFR" && (
                                <span>Cost and Freight</span>
                              )}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="osd-title">Payment Terms:</td>
                        <td>
                          <span>
                            {inquiryInfo &&
                              inquiryInfo.paymentTerms === "LC" && (
                                <span>Letter of Credit</span>
                              )}
                          </span>
                          <span>
                            {" "}
                            {inquiryInfo &&
                              inquiryInfo.paymentTerms === "CAD" && (
                                <span>Cash Against Delivery</span>
                              )}
                          </span>
                          <span>
                            {inquiryInfo &&
                              inquiryInfo.paymentTerms === "DP" && (
                                <span>Document Against Payment</span>
                              )}
                          </span>
                          <span>
                            {" "}
                            {inquiryInfo &&
                              inquiryInfo.paymentTerms === "TT" && (
                                <span>Telegraphic Transfer</span>
                              )}
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="osd-title">Destination:</td>
                        <td>{inquiryInfo && inquiryInfo.destinationPort}</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Date created:</td>
                        <td>
                          {inquiryInfo.createdAt &&
                            convertDateFormat(inquiryInfo.createdAt)}
                        </td>
                      </tr>
                      <tr>
                        <td className="osd-title">Product requirement:</td>
                        <td>{inquiryInfo && inquiryInfo.productDescription}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryInfo;
