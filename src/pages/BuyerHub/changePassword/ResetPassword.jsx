import React from "react";
import { useState } from "react";
import LogoWhite from "../../../assets/img/icons/logo-white.png";
import "./password.css";
import { useNavigate, useParams } from "react-router-dom";
import "../BuyerMain.css";
import { axios } from "../../../components/baseUrl";

import { Iconly } from "react-iconly";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const { resetToken } = useParams();
  console.log(resetToken);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [inputType, setInputType] = useState("password");
  const [confirmInputType, setConfirmInputType] = useState("password");
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const handlePasswordChange = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);
  };
  const handlePasswordToggle = (e) => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };
  const handleConfirmPasswordToggle = (e) => {
    confirmInputType === "password"
      ? setConfirmInputType("text")
      : setConfirmInputType("password");
  };
  const navigate = useNavigate();
  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordError(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput.confirmPassword !== passwordInput.password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (passwordInput.confirmPassword !== passwordInput.password) {
      setConfirmPasswordError("Confirm password is not matched");
    }
    try {
      const changePassword = {
        password: passwordInput.password,
      };
      await axios.post(`/auth/reset-password/${resetToken}`, changePassword);
      setLoading(false);
      setPasswordInput({
        password: "",
        confirmPassword: "",
      });
      Store.addNotification({
        title: "Successful!",
        message: `Your Password has been updated successfully`,
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
        navigate(`/login`);
      }, 5800);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
      Store.addNotification({
        title: "Failed!",
        message: error.response.data.errors[0].message,
        type: "danger",
        insert: "top",
        container: "top-left",
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
    <>
      <section className="w-100">
        <ReactNotifications />
        <section className="row m-0">
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
                <button
                  className="back-btn d-flex"
                  onClick={() => navigate(-1)}
                >
                  <Iconly
                    className="me-2 auth-back-btn"
                    name="ChevronLeft"
                    set="light"
                    size="medium"
                    color="#282828"
                  />
                  Back
                </button>
              </div>
              <div className="col-lg-6 col-9 return-to" id="header-text">
                <a href="/login" style={{ color: "rgb(201, 79, 5)" }}>
                  Return to login
                </a>
              </div>
            </main>
            <div className="password-content">
              <div className="mt-3">
                <h2>Set New Password</h2>
                <p className="mt-1 mb-4">
                  Input your new desired password in the input fields below to
                  create a new password. We strongly advise to store it safely.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="password-form">
                <div className="mt-2">
                  <label htmlFor="password" className="form-label">
                    Enter new password
                  </label>
                  <div className="passwordToggle form-control input">
                    <input
                      className="password-input"
                      type={inputType}
                      name="password"
                      value={passwordInput.password}
                      onChange={handlePasswordChange}
                      onKeyUp={handleValidation}
                      placeholder="Enter your new password"
                    />
                    <span
                      className={"password-icon"}
                      onClick={handlePasswordToggle}
                    >
                      {inputType === "password" ? (
                        <Iconly
                          className="mt-1 pt-1"
                          name="Hide"
                          set="light"
                          size="medium"
                          color="#5C5C5C"
                        />
                      ) : (
                        <Iconly
                          className="mt-1 pt-1"
                          name="Show"
                          set="light"
                          size="medium"
                          color="#5C5C5C"
                        />
                      )}
                    </span>
                  </div>
                  <p className="error-message">{passwordError}</p>
                </div>
                <div className="mt-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm New Password
                  </label>
                  <div className="passwordToggle form-control input">
                    <input
                      className="password-input"
                      type={inputType}
                      name="confirmPassword"
                      value={passwordInput.confirmPassword}
                      onChange={handlePasswordChange}
                      onKeyUp={handleValidation}
                      placeholder="Enter your new password"
                    />
                    <span
                      className={"password-icon"}
                      onClick={handleConfirmPasswordToggle}
                    >
                      {confirmInputType === "password" ? (
                        <Iconly
                          className="mt-1 pt-1"
                          name="Hide"
                          set="light"
                          size="medium"
                          color="#5C5C5C"
                        />
                      ) : (
                        <Iconly
                          className="mt-1 pt-1"
                          name="Show"
                          set="light"
                          size="medium"
                          color="#5C5C5C"
                        />
                      )}
                    </span>
                  </div>
                  <p className="error-message">{confirmPasswordError}</p>
                </div>

                <div className=" mt-4">
                  {!loading ? (
                    <button className="btn btn-white button">
                      Change Password
                    </button>
                  ) : (
                    <button className="btn btn-white button">
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
    </>
  );
}
