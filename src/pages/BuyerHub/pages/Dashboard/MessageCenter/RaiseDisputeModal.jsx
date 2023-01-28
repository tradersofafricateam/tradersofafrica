import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "../../../../../components/baseUrl";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export const RaiseDisputeModal = () => {
  const navigate = useNavigate();
  const [createDispute, setCreateDispute] = useState({
    subject: "",
    complaint: "",
  });

  const handleChange = (e) => {
    setCreateDispute({
      ...createDispute,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const disputeCreate = {
        subject: createDispute.subject,
        complaint: createDispute.complaint,
      };
      const { data } = await axios.post("/dispute", disputeCreate);
      console.log(data);
      setCreateDispute({
        subject: "",
        complaint: "",
      });

      Store.addNotification({
        title: "Success!",
        message: "You have successfully created a dispute",
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
      setTimeout(() => {
        window.location.reload();
      }, 5500);
      navigate("/message-center");
    } catch (error) {
      console.log(error.response.data.errors);
      Store.addNotification({
        title: "Failed!",
        message: "Try Again.",
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
  return (
    <div
      className="modal fade place-order-modal"
      id="disputeModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <ReactNotifications />
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
                <form className="w-100" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Dispute Type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="subject"
                      value={createDispute.subject}
                      onChange={handleChange}
                    >
                      <option defaultValue="selected">
                        Select Dispute Type
                      </option>
                      <option value="1">Cashew</option>
                      <option value="2">Cocoa</option>
                      <option value="3">Paddy Rice</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Dispute Details</label>
                    <textarea
                      className="form-control"
                      id=""
                      rows="3"
                      placeholder=""
                      name="complaint"
                      value={createDispute.complaint}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <p className="modal-info">
                    For local delivery please proceed to chat with a SourcPro
                    agent to continue
                  </p>

                  <button className="mt-3" type="submit">
                    Submit Dispute
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
