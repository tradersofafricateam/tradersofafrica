import React from "react";
import ProductImg3 from "../../../../../assets/img/products/p-img3.png";

const ViewOrderModal = ({ orderInfo }) => {
  console.log("orderInfo", orderInfo);
  return (
    <div
      className="modal fade place-order-modal"
      id="vieworderModall"
      tabIndex="-1"
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
              <div className="col-lg-6">
                <h5 className="modal-sub-title">Product information</h5>
                {/* <form>
                  <div class="mb-3"></div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <label for="exampleInputPassword1">Quantity</label>
                      <div className="custom-input form-control">
                        <div className="row">
                          <div className="col-lg-7 col">
                            <input
                              type="number"
                              className="form-control custom-style"
                              value="100"
                              id=""
                              placeholder="Enter quantity"
                            />
                          </div>
                          <div className="col-lg-5 col">
                            <div className="form-unit">metric tons</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label for="exampleInputPassword1">Shipping Terms</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>FOB</option>
                        <option value="1">FOB</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
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
                      >
                        <option selected>Nigeria</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label for="exampleInputPassword1">Payment Terms</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Letter of Credit</option>
                        <option value="1">Letter of Credit</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <label for="exampleInputPassword1">
                        Destination Country
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>India</option>
                        <option value="1">India</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label for="exampleInputPassword1">
                        Destination Port
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        value="Port of India"
                        id=""
                        placeholder="Enter destination port"
                      />
                    </div>
                  </div>
                </form> */}
              </div>
              <div className="col-lg-6">
                <h5 className="modal-sub-title">Order Summary</h5>
                <div className="order-summary">
                  <div class="d-flex mb-2">
                    <div class="flex-shrink-0">
                      <img
                        className="s-product-img"
                        src={ProductImg3}
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 className="s-product-name">
                        Raw Cashew Kernels W320
                      </h2>
                      <h3 className="s-product-price">
                        <span className="s-mp-currency">USD</span> 1050 - 1250
                        <span className="s-mp-unit"> / MT</span>
                      </h3>
                    </div>
                  </div>

                  <div className="os-details">
                    <table class="table table-borderless">
                      <tr>
                        <td className="osd-title">Quantity:</td>
                        <td>100 MT</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Shipping Terms:</td>
                        <td>FOB</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Price / MT:</td>
                        <td>USD 1150</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Origin:</td>
                        <td>Nigeria</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Destination:</td>
                        <td>India</td>
                      </tr>
                      <tr>
                        <td className="osd-title">Payment Terms:</td>
                        <td>Letter of Credit</td>
                      </tr>
                    </table>

                    <div className="line"></div>

                    <p>
                      <span>Total Cost:</span>USD 115,000
                    </p>

                    <div className="line"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <button className="mt-3">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderModal;
