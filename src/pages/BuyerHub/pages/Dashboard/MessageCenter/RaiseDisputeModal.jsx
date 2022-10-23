import React from "react";

export const RaiseDisputeModal = () => {
  return (
    <div
      className="modal fade place-order-modal"
      id="disputeModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
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
                    <label for="exampleInputEmail1">Dispute Details</label>
                    <textarea
                      class="form-control"
                      id=""
                      rows="3"
                      placeholder=""
                    ></textarea>
                  </div>

                  <p className="modal-info">
                    For local delivery please proceed to chat with a SourcPro
                    agent to continue
                  </p>

                  <button className="mt-3">Submit Dispute</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
