import React from "react";
import { useState } from "react";
import "./password.css";
import backIcon from "../../../assets/img/back-icon.svg";
import { useNavigate } from "react-router-dom";
import "../BuyerMain.css";
import LogoWhite from "../../../assets/img/icons/logo-white.png";
import { axios } from "../../../components/baseUrl";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCancel = () => {
    setShowMessage(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const forgotPassword = {
        email: email,
      };
      const { data } = await axios.post(
        `/auth/forgot-password`,
        forgotPassword
      );
      console.log(data);
      setShowMessage(true);
      setMessage(`A password reset link has been sent to ${email}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-100" id="password-page">
      <section className="row m-0 ">
        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="map-img">
            <a href="/">
              <img className="auth-logo" src={LogoWhite} alt="Tofa Logo" />
            </a>
          </div>
        </div>

        <div className="col-lg-6 p-0">
          <div className="row mr-1 mt-3 return">
            <div className="col-lg-6 col-3 back">
              <p className="back-txt">
                <button
                  className="back-icon-button d-flex"
                  onClick={() => navigate(-1)}
                >
                  <img src={backIcon} />
                  <a href="#">Back</a>
                </button>
              </p>
            </div>
            <div className="col-lg-6 col-9 return-to" id="header-text">
              <p className="info-txt">
                <a href="/login" style={{ color: "rgb(201, 79, 5)" }}>
                  Return to login
                </a>
              </p>
            </div>
          </div>
          <main className="password-content">
            <div className="mt-3">
              <h3>Reset Password</h3>
              <p className="mt-1">
                Please enter the e-mail address associated with your TOFA
                account. We will send you a link to this e-mail address to reset
                your password
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
                />
              </div>

              <div className=" mt-4">
                <button
                  className="btn btn-white button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Send
                </button>
              </div>
              <Modal
                title=""
                visible={showMessage ? true : false}
                footer={null}
                onCancel={handleCancel}
              >
                {message}
              </Modal>
            </form>
          </main>
        </div>
      </section>
    </section>
  );
}
