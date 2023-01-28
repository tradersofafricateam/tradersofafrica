import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BuyerRegistration.css";
// import backIcon from "../../assets/img/back-icon.svg";
import LogoWhite from "../../assets/img/icons/logo-white.png";
import "../BuyerHub/BuyerMain.css";
import { axios } from "../../components/baseUrl";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Iconly } from "react-iconly";

export default function BuyerRegistration() {
  const [registerDetail, setRegisterDetail] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [phoneValue, setPhoneValue] = useState("");
  const [formattedErrors, setFormattedErrors] = useState({});
  const [customError, setCustomError] = useState("");
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("password");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRegisterDetail({ ...registerDetail, [e.target.name]: e.target.value });
  };

  const handlePasswordToggle = (e) => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const buyerRegistration = {
        fullName: registerDetail.fullname,
        email: registerDetail.email,
        password: registerDetail.password,
        phoneNumber: phoneValue,
      };
      const {
        data: { data },
      } = await axios.post(`/auth/register-buyer`, buyerRegistration);
      setLoading(false);
      navigate(`/verify-email/${data.email}`);
    } catch (error) {
      setLoading(false);
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
      if (error.response.data.errors[0].field) {
        console.log(error.response.data.errors);
        setFormattedErrors(
          error.response.data.errors.reduce(function(obj, err) {
            obj[err.field] = err.message;
            return obj;
          }, {})
        );
      } else {
        console.log(error.response.data.errors[0].message);
        setCustomError(error.response.data.errors[0].message);
      }

      console.log(error.response.data.errors);
    }
  };

  return (
    <section className="w-100" id="buyer-page">
      <div className="row g-0 m-0">
        <div className="col-lg-6 d-none d-lg-block map">
          <div className="map-img">
            <a href="/">
              <img className="auth-logo" src={LogoWhite} alt="Tofa Logo" />
            </a>
          </div>
        </div>

        <div className="col-lg-6 sign-up" id="buyer-section">
          <main className="row auth-header" id="header-info">
            <div className="col-lg-6 col-3">
              <button className="back-btn d-flex" onClick={() => navigate(-1)}>
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
              <p className="info-txt m-0">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </main>

          <section className="all-content">
            <h2>Register</h2>

            <form className="buyer-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  className="form-control input"
                  type="text"
                  name="fullname"
                  value={registerDetail.fullname}
                  onChange={handleChange}
                  placeholder="Enter your Full Name"
                />
              </div>
              {formattedErrors.fullName && (
                <p className="errors">{formattedErrors.fullName}</p>
              )}
              <div className="mt-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  className="form-control input"
                  type="email"
                  name="email"
                  value={registerDetail.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              {formattedErrors.email && (
                <p className="errors">{formattedErrors.email}</p>
              )}
              <div className="mt-3">
                <label htmlFor="email" className="form-label">
                  Phone Number
                </label>
                <PhoneInput
                  placeholder="(Eg +123 080000000)"
                  onChange={setPhoneValue}
                  value={phoneValue}
                  name="phoneValue"
                  className="form-control input"
                  defaultCountry="NG"
                />
              </div>
              {formattedErrors.phoneNumber && (
                <p className="errors">{formattedErrors.phoneNumber}</p>
              )}
              <div className="mt-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="passwordToggle form-control input">
                  <input
                    className="password-input"
                    type={inputType}
                    name="password"
                    value={registerDetail.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
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
              </div>
              {formattedErrors.password && (
                <p className="errors">{formattedErrors.password}</p>
              )}
              {customError && <p className="errors">{customError}</p>}

              <div className="mt-3 login-btn">
                {!loading ? (
                  <button
                    type="submit"
                    className="login-btn btn btn-danger button"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="login-btn btn btn-danger button"
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
          </section>
        </div>
      </div>
    </section>
  );
}
