import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import LogoWhite from "../../assets/img/icons/logo-white.png";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../BuyerHub/BuyerMain.css";
import { axiosInstance } from "../../components/axios";

import { GlobalContext } from "../../components/utils/GlobalState";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { setUser } = useContext(GlobalContext);
  const [inputType, setInputType] = useState("password");
  const { buyerId, token } = useParams();
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handlePasswordToggle = (e) => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };
  useEffect(() => {
    (async () => {
      if (buyerId && token) {
        await axiosInstance.post("/auth/verify-email", {
          buyerId,
          token,
        });
        toast.success(`Your email has been successfully verified`, {
          position: "top-right",
          autoClose: 6000,
          pauseHover: true,
          draggable: true,
        });
      }
    })();
  }, []);

  const handleChange = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const loginDetails = {
        email: loginDetail.email,
        password: loginDetail.password,
      };
      const {
        data: { data },
      } = await axiosInstance.post("/auth/signin-buyer", loginDetails);
      setLoading(false);
      setUser(data.user);
      localStorage.setItem("user", true);
      localStorage.setItem("token", data.token);
      localStorage.setItem("joinedAt", JSON.stringify(data.user.createdAt));
      navigate("/buy-commodities");
    } catch (err) {
      setLoading(false);
      console.log(err);
      localStorage.setItem("user", false);
      if (!err.response.data.errors) {
        return navigate(`/no-connection`);
      }

      if (err.response.data.errors[0].field) {
        setError(
          err.response.data.errors.reduce(function(obj, err) {
            obj[err.field] = err.message;
            return obj;
          }, {})
        );
      } else {
        setError(err.response.data.errors[0]);
      }
    }
  };

  return (
    <>
      <div className="section-body">
        <ToastContainer />
        <section className="w-100" id="auth-page">
          <div className="row m-0">
            <div className="col-lg-6 d-none d-lg-block p-0">
              <div className="map-img">
                <Link to="/">
                  <img className="auth-logo" src={LogoWhite} alt="Tofa Logo" />
                </Link>
              </div>
            </div>

            <div className="col-lg-6 p-0" id="buyer-section">
              <main className="row auth-header" id="header-info">
                <div className="col-lg-6 col-3">
                  <button
                    className="back-btn d-flex"
                    onClick={() => navigate(-1)}
                  >
                    <i className="fas fa-chevron-left me-2 auth-back-btn"></i>
                    Back
                  </button>
                </div>
                <div className="col-lg-6 col-9 return-to" id="header-text">
                  <p className="info-txt m-0">
                    Don't have an account? <a href="/registration">Signup</a>
                  </p>
                </div>
              </main>

              <section className="all-content">
                <h2>Welcome back</h2>

                <form onSubmit={handleSubmit} className="buyer-form">
                  <div>
                    <label
                      htmlFor="fullname"
                      className="form-label"
                      placeholder="enter email"
                    >
                      E-mail address
                    </label>
                    <input
                      className="form-control input"
                      type="email"
                      name="email"
                      value={loginDetail.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div style={{ color: "red" }}>
                    {" "}
                    <p className="errors">{error.email}</p>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="passwordToggle form-control input">
                      <input
                        className="password-input"
                        type={inputType}
                        name="password"
                        value={loginDetail.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                      <span
                        className={"password-icon"}
                        onClick={handlePasswordToggle}
                      >
                        {inputType === "password" ? (
                          <i
                            className="far fa-eye-slash mt-1 pt-1"
                            style={{ color: "#5C5C5C" }}
                          ></i>
                        ) : (
                          <i
                            className="far fa-eye mt-1 pt-1"
                            style={{ color: "#5C5C5C" }}
                          ></i>
                        )}
                      </span>
                    </div>
                    <div style={{ color: "red" }}>
                      {" "}
                      <p className="errors">{error.password}</p>
                    </div>
                  </div>
                  <div style={{ color: "red" }}>
                    {" "}
                    <p className="errors">{error.message}</p>
                  </div>
                  <div className="row ">
                    <div className="col-lg-6 col-sm-6">
                      <div className=" d-flex align/items/center">
                        <input id="remember_me" type="checkbox" />
                        <label
                          htmlFor="remember_me"
                          className="checkbox-label mt-2"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="mt-2">
                        <p className="forgot-pwd">
                          <a href="/forgotpassword">Forgot Password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 login-btn">
                    {!loading ? (
                      <button
                        type="submit"
                        className="login-btn btn btn-danger button"
                      >
                        Login
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
      </div>
    </>
  );
}
