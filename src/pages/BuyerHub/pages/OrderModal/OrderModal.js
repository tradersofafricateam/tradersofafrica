import React from 'react'

import ProductImg3 from "../../../../assets/img/products/p-img3.png";

const OrderModal = () => {
  return (
    <div>
      {/* Modal */}
      <div className="modal fade place-order-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Raw Cashew Kernels W320</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-8">
                  <h5 className="modal-sub-title">Product information</h5>
                  <form>

                    <div class="mb-3">
                      <label for="exampleInputEmail1">Product Requirements</label>
                      <textarea class="form-control" id="" rows="3" placeholder="Enter product requirements like etc"></textarea>
                    </div>

                    <div className="row">
                      <div className="col mb-3">
                        
                      <label for="exampleInputPassword1">Quantity</label>
                        <div className="custom-input form-control">
                          <div className="row">
                            <div className="col-lg-7">
                              <input type="number" className="form-control custom-style" id="" placeholder="Enter quantity"/>
                            </div>
                            <div className="col-lg-5">
                              <div className="form-unit">
                                metric tons
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="col mb-3">
                      <label for="exampleInputPassword1">Shipping Terms</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Select shipping terms</option>
                          <option value="1">FOB</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        
                      </div>
                    </div>

                    <div className="row">
                      <div className="col mb-3">
                        <label for="exampleInputPassword1">Country of Origin</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Select country of origin</option>
                          <option value="1">Nigeria</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col mb-3">
                        <label for="exampleInputPassword1">Payment Terms</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Select payment terms</option>
                          <option value="1">Letter of Credit</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label for="exampleInputPassword1">Destination Country</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Select destination country</option>
                          <option value="1">India</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col mb-3">
                        <label for="exampleInputPassword1">Destination Port</label>
                        <input type="text" class="form-control" id="" placeholder="Enter destination port"/>
                      </div>
                    </div>

                    <p className="modal-info">For local delivery please proceed to chat with a SourcPro agent to continue</p>

                    <button className="mt-3">Place Order</button>

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
                          <td className="osd-title">Origin:</td>
                          <td>Nigeria</td>
                        </tr>
                        <tr>
                          <td className="osd-title">Destination:</td>
                          <td>India</td>
                        </tr>
                        <tr>
                          <td className="osd-title">Shipping Terms:</td>
                          <td>FOB</td>
                        </tr>
                        <tr>
                          <td className="osd-title">Payment Terms:</td>
                          <td>Letter of Credit</td>
                        </tr>
                      </table>

                      <div className="line"></div>

                      <div className="modal-contact-info">
                        <h4 className="contact-head">Contact information</h4>
                        <p>Erhun Abbe</p>
                        <p>Dory International Trading Company</p>
                        <p>erhunabbe@gmail.com | +234 703 713 8919</p>
                      </div>

                      <div className="line"></div>

                      <p><span>Total Cost:</span>USD 65,000</p>

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
  )
}

export default OrderModal