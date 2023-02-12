import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./password.css";
import "../BuyerMain.css";
import LogoWhite from "../../../assets/img/icons/logo-white.png";

import { axiosInstance } from "../../../components/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const forgotPassword = {
        email: email,
      };
      await axiosInstance.post(`/auth/forgot-password`, forgotPassword);
      setLoading(false);
      setEmail("");
      toast.success(`A password reset link has been sent to ${email}`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
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
    <section className="w-100" id="password-page">
      <ToastContainer />
      <section className="row m-0 ">
        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="map-img">
            <a href="/">
              <img className="auth-logo" src={LogoWhite} alt="Tofa Logo" />
            </a>
          </div>
        </div>

        <div className="col-lg-6 p-0">
          <main className="row auth-header" id="header-info">
            <div className="col-lg-6 col-3">
              <button className="back-btn d-flex" onClick={() => navigate(-1)}>
                <i className="fas fa-chevron-left me-2 auth-back-btn"></i>
                Back
              </button>
            </div>
            <div className="col-lg-6 col-9 return-to" id="header-text">
              <Link to="/login" style={{ color: "rgb(201, 79, 5)" }}>
                Return to login
              </Link>
            </div>
          </main>
          <div className="password-content">
            <div className="mt-3">
              <h2>Reset Password</h2>
              <p className="mt-1 mb-4">
                Please enter the e-mail address associated with your account. We
                will send you a link to this e-mail address to reset your
                password
              </p>
            </div>
            <form onSubmit={handleSubmit} className="password-form">
              <div className="mt-2">
                <label htmlFor="password" className="form-label">
                  Enter Email
                </label>
                <input
                  className="form-control input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className=" mt-4">
                {!loading ? (
                  <button
                    className="btn btn-white button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Reset Password
                  </button>
                ) : (
                  <button
                    className="btn btn-white button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
