import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export const NewOrderModal = () => {
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  return (
    <div
      className="modal fade place-order-modal"
      id="orderModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
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
  );
};
