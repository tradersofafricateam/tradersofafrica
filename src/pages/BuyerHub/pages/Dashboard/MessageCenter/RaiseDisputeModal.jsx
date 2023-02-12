import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./../../../../../components/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RaiseDisputeModal = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
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
    setLoader(true);
    try {
      const disputeCreate = {
        subject: createDispute.subject,
        complaint: createDispute.complaint,
      };
      await axiosInstance.post("/dispute", disputeCreate);
      setCreateDispute({
        subject: "",
        complaint: "",
      });
      setLoader(false);
      toast.success(`You have successfully submitted a dispute`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });

      setTimeout(() => {
        window.location.reload();
      }, 5500);
      navigate("/message-center");
    } catch (error) {
      setLoader(false);
      console.log(error.response.data.errors);
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
  return (
    <div
      className="modal fade place-order-modal"
      id="disputeModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <ToastContainer />
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
                    <input
                      className="form-select"
                      name="subject"
                      value={createDispute.subject}
                      onChange={handleChange}
                    />
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
                  {loader ? (
                    <button className="mt-3" type="submit">
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  ) : (
                    <button className="mt-3" type="submit">
                      Submit Dispute
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
