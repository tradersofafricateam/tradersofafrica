import React from "react";
import { Iconly } from "react-iconly";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

import TrackImg from "../../../../../assets/img/track-illus.png";
import OrdersImg from "../../../../../assets/img/orders-illus.png";
import ProductImgTable from "../../../../../assets/img/products/p-img1.png";
import UserAvatar from "../../../../../assets/img/logo.jpg";
import ProductImg3 from "../../../../../assets/img/products/p-img3.png";

import "../Dashboard.css";

const MessageCenter = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="menu-icon">
          <i className="fas fa-bars header__menu"></i>
        </div>

        <header className="header">
          <div className="header__message">
            <h2>Message Center</h2>
          </div>
          <div className="header__search">
            <form>
              <div className="custom__search">
                <Iconly
                  name="Search"
                  set="light"
                  primaryColor="#5C5C5C"
                  size="medium"
                />
                <input
                  type="text"
                  className="form-control custom-style"
                  id=""
                  placeholder="Search for orders, inquiries and more"
                />
              </div>
            </form>

            <div className="notify-wrap position-relative">
              <Iconly
                name="Notification"
                set="bulk"
                primaryColor="#282828"
                size="medium"
              />
              <span className="icon-notification position-absolute"></span>
            </div>
          </div>
        </header>

        <Sidebar />

        <main className="main">
          <div className="chat-container">
            <div className="main-overview no-margin">
              <div className="overview-card no-padding">
                <div className="chat-wrap">
                  <div className="chat-header d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 position-relative">
                        <img
                          className="chat-rep-img"
                          src={UserAvatar}
                          alt="..."
                        />
                        <span className="online-status position-absolute"></span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>TOFA SourcePro</h2>
                        <p>Salami Johnson</p>
                      </div>
                    </div>
                    <div className="chat-action">
                      {/* <Link to="/message-center"><Iconly className="chat-icon" name='Camera' set='light' primaryColor='#5C5C5C' size='medium' /></Link>
                      <Link to="/message-center"><Iconly className="chat-icon" name='PaperUpload' set='light' primaryColor='#5C5C5C' size='medium' /></Link> */}
                      <Link to="/message-center">
                        <Iconly
                          className="chat-icon"
                          name="MoreCircle"
                          set="light"
                          primaryColor="#5C5C5C"
                          size="medium"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="chat-area">
                    <div className="message-area">

                      <div className="chat-order-request-msg receiver">
                        <div class="order-msg d-flex">
                          <div class="flex-shrink-0">
                            <img src={ProductImgTable} alt="..." />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h2>New Order</h2>
                            <p className="cp-name">Dried Hibiscus</p>
                            <p className="cp-price">
                              <span>USD</span> 500 <span>/ MT</span>
                            </p>
                          </div>
                        </div>
                        <button data-bs-toggle="modal" data-bs-target="#vieworderModal" className="order_msg-btn">View Order</button>
                        <button className="order_msg-btn">Place Order</button>
                        <p className="chat-timestamp">11:20 am</p>
                      </div>

                      <div className="chat-msg sender">
                        <p>
                          Very Random text between tofa sourcepro and the buyer
                          trying to conclude a transaction, Very Random text
                          between tofa sourcepro and the buyer trying
                        </p>
                        <p className="chat-timestamp">11:20 am</p>
                      </div>
                      <div className="chat-msg receiver">
                        <p>
                          Very Random text between tofa sourcepro and the buyer
                          trying to conclude a transaction, Very Random text
                          between tofa sourcepro and the buyer trying to
                          conclude a transaction.
                        </p>
                        <p className="chat-timestamp">11:25 am</p>
                      </div>
                      <div className="chat-msg sender">
                        <p>
                          Very Random text between tofa sourcepro and the buyer
                          trying to conclude a transaction, Very Random text
                          between tofa sourcepro and the buyer trying
                        </p>
                        <p className="chat-timestamp">11:20 am</p>
                      </div>
                      <div className="chat-msg receiver">
                        <p>Very Random</p>
                        <p className="chat-timestamp">11:25 am</p>
                      </div>
                      <div className="chat-msg sender">
                        <p>Okay</p>
                        <p className="chat-timestamp">11:20 am</p>
                      </div>
                    </div>

                    <div className="message-input">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#orderModal"
                        className="msg-center-btn btn-primary me-2"
                        align="right"
                      >
                        Start Order
                      </button>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#disputeModal"
                        className="msg-center-btn btn-primary me-2"
                        align="right"
                      >
                        Raise Dispute
                      </button>
                      <form className="chat-form">
                        <div className="chat-input-area d-flex justify-content-between">
                          <textarea
                            class="form-control"
                            id=""
                            placeholder="Type your message here..."
                          ></textarea>
                          <Link to="/message-center">
                            <Iconly
                              className="chat-icon"
                              name="PaperUpload"
                              set="light"
                              primaryColor="#5C5C5C"
                              size="medium"
                            />
                          </Link>
                          <Link to="/message-center">
                            <Iconly
                              className="send-icon ms-3"
                              name="Send"
                              set="bulk"
                              primaryColor="#5C5C5C"
                              size="medium"
                            />
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Order Modal */}
            <div
              className="modal fade place-order-modal"
              id="orderModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      New Order Request
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
                      <div className="col-lg-12">
                        <form className="w-100">
                          <p className="mb-5">Send an order request, our agents will help you draft your order</p>
                          <button className="mt-3">Send Order Request</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of New Order MOdal */}

            {/* Raise Dispute Modal */}
            <div
              className="modal fade place-order-modal"
              id="disputeModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Raise a Dispute
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
                      <div className="col-lg-12">
                        <form className="w-100">
                          <div class="mb-3">
                            <label for="exampleInputEmail1">Dispute Type</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Dispute Type</option>
                              <option value="1">Cashew</option>
                              <option value="2">Cocoa</option>
                              <option value="3">Paddy Rice</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label for="exampleInputEmail1">
                              Dispute Details
                            </label>
                            <textarea
                              class="form-control"
                              id=""
                              rows="3"
                              placeholder=""
                            ></textarea>
                          </div>

                          <p className="modal-info">
                            For local delivery please proceed to chat with a
                            SourcPro agent to continue
                          </p>

                          <button className="mt-3">Submit Dispute</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Raise Dispute Modal */}
            
            {/* View Order */}
            <div className="modal fade place-order-modal" id="vieworderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-8">
                        <h5 className="modal-sub-title">Product information</h5>
                        <form>

                          <div class="mb-3">
                            <label for="exampleInputEmail1">Product Requirements</label>
                            <textarea class="form-control" id="" rows="3" value="Jute bag packaging, KOR 48 - 50" placeholder="Enter product requirements like etc" disabled></textarea>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              
                            <label for="exampleInputPassword1">Quantity</label>
                              <div className="custom-input form-control">
                                <div className="row">
                                  <div className="col-lg-7 col">
                                    <input type="number" className="form-control custom-style" value="100" id="" placeholder="Enter quantity" />
                                  </div>
                                  <div className="col-lg-5 col">
                                    <div className="form-unit">
                                      metric tons
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                            <div className="col-lg-6 mb-3">
                            <label for="exampleInputPassword1">Shipping Terms</label>
                              <select className="form-select" aria-label="Default select example" >
                                <option selected>FOB</option>
                                <option value="1">FOB</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                              
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              <label for="exampleInputPassword1">Country of Origin</label>
                              <select className="form-select" aria-label="Default select example" >
                                <option selected>Nigeria</option>
                                <option value="1">Nigeria</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col-lg-6 mb-3">
                              <label for="exampleInputPassword1">Payment Terms</label>
                              <select className="form-select" aria-label="Default select example" >
                                <option selected>Letter of Credit</option>
                                <option value="1">Letter of Credit</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              <label for="exampleInputPassword1">Destination Country</label>
                              <select className="form-select" aria-label="Default select example" >
                                <option selected>India</option>
                                <option value="1">India</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col-lg-6 mb-3">
                              <label for="exampleInputPassword1">Destination Port</label>
                              <input type="text" class="form-control" value="Port of India" id="" placeholder="Enter destination port" />
                            </div>
                          </div>

                        </form>
                      </div>
                      <div className="col-lg-4">
                        <h5 className="modal-sub-title">Order Summary</h5>
                        <div className="order-summary">

                          <div class="d-flex mb-2">
                            <div class="flex-shrink-0">
                              <img className="s-product-img" src={ProductImg3} alt="..."/>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h2 className="s-product-name">Raw Cashew Kernels W320</h2>
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

                            <p><span>Total Cost:</span>USD 115,000</p>

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
            {/* End of View Order Modal */}

          </div>
        </main>
      </div>
    </div>
  );
};

export default MessageCenter;
