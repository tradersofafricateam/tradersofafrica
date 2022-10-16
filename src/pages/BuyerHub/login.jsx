import React from "react";
import { useState, useEffect } from "react";
import "./login.css";
import backIcon from "../../assets/img/back-icon.svg";
import LogoWhite from "../../assets/img/icons/logo-white.png";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import "../BuyerHub/BuyerMain.css";
import { axios } from "../../components/baseUrl";
import Icon, { EyeOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";

export default function Login() {
  const ShowPasswordIcon = (props) => {
    return <Icon component={ShowPasswordSvg} {...props} />;
  };

  const ShowPasswordSvg = () => (
    <svg
      width="23"
      height="23"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2541 19.0657C13.0347 19.5949 13.986 19.9149 14.9984 19.9149C17.6816 19.9149 19.8648 17.712 19.8648 15.0046C19.8648 13.9832 19.5477 13.0233 19.0233 12.2357L17.6938 13.5771C17.9134 13.9955 18.0353 14.4877 18.0353 15.0046C18.0353 16.6906 16.6693 18.0689 14.9984 18.0689C14.4861 18.0689 13.9982 17.9458 13.5835 17.7243L12.2541 19.0657ZM23.036 8.18689C24.8045 9.81133 26.3047 12.0019 27.4268 14.6354C27.5244 14.8692 27.5244 15.14 27.4268 15.3615C24.8167 21.4901 20.1698 25.1574 14.9984 25.1574H14.9862C12.6322 25.1574 10.3758 24.3821 8.38773 22.9668L6.02156 25.3543C5.83861 25.5389 5.60687 25.625 5.37513 25.625C5.1434 25.625 4.89946 25.5389 4.72871 25.3543C4.42379 25.0466 4.375 24.5543 4.61894 24.1975L4.65553 24.1482L22.6945 5.94714C22.7189 5.92252 22.7433 5.89791 22.7555 5.8733L22.7555 5.87329C22.7799 5.84868 22.8043 5.82407 22.8165 5.79946L23.9629 4.64266C24.3289 4.28578 24.9021 4.28578 25.2558 4.64266C25.6217 4.99955 25.6217 5.59025 25.2558 5.94714L23.036 8.18689ZM10.123 15.0094C10.123 15.3294 10.1595 15.6493 10.2083 15.9447L5.69554 20.498C4.47587 19.0705 3.41475 17.3476 2.57318 15.3663C2.47561 15.1448 2.47561 14.874 2.57318 14.6402C5.18328 8.51166 9.83023 4.85667 14.9895 4.85667H15.0016C16.7458 4.85667 18.4411 5.27509 20.0023 6.06269L15.9286 10.173C15.6359 10.1238 15.3188 10.0869 15.0016 10.0869C12.3062 10.0869 10.123 12.2897 10.123 15.0094Z"
        fill="#1F1F1F"
        fillOpacity="0.35"
      />
    </svg>
  );
  const [inputType, setInputType] = useState("password");
  const [newUserMessage, setNewUserMessage] = useState(false);
  const { buyerId, token } = useParams();
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/buy-commodities";

  const handleCancel = () => {
    setNewUserMessage(false);
  };
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
        const { data: data } = await axios.post("/auth/verify-email", {
          buyerId,
          token,
        });
        console.log(data);
        setNewUserMessage(true);
      }
    })();
  }, []);

  const handleChange = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginDetails = {
        email: loginDetail.email,
        password: loginDetail.password,
      };
      const {
        data: { data },
      } = await axios.post("/auth/signin-buyer", loginDetails);
      localStorage.setItem("user", JSON.stringify(loginDetails.email));
      console.log("login response", data);
      navigate("/buy-commodities");
    } catch (err) {
      localStorage.setItem("user", false);
      if (err.response.data.errors[0].field) {
        setError(
          err.response.data.errors.reduce(function(obj, err) {
            obj[err.field] = err.message;
            return obj;
          }, {})
        );
        console.log(err.response.data.errors);
      } else {
        setError(err.response.data.errors[0]);
      }
    }
  };

  return (
    <>
      <div className="section-body">
        <section className="w-100" id="auth-page">
          <div className="row m-0">
            <div className="col-lg-6 d-none d-lg-block p-0">
              <div className="map-img">
                <a href="/">
                  <img className="auth-logo" src={LogoWhite} alt="Tofa Logo" />
                </a>
              </div>
            </div>

            <div className="col-lg-6 p-0" id="buyer-section">
              <main className="row mr-1 mt-3 return" id="header-info">
                <div className="col-lg-6 col-3">
                  <button
                    className="back-icon-button d-flex"
                    onClick={() => navigate(-1)}
                  >
                    <img src={backIcon} />
                    <a href="#">Back</a>
                  </button>
                </div>
                <div className="col-lg-6 col-9 return-to" id="header-text">
                  <p className="info-txt m-0">
                    Don't have an account? <a href="/registration">Signup</a>
                  </p>
                </div>
              </main>

              <section className="all-content">
                <h3 style={{ color: "#dd4f05" }}>Login</h3>

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
                          <ShowPasswordIcon />
                        ) : (
                          <EyeOutlined
                            style={{ opacity: "0.35", fontSize: "19px" }}
                          />
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
                          I agree to terms & condition{" "}
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
                  <div className="mt-3">
                    <button type="submit" className="btn btn-danger button">
                      Login
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Modal
        title=""
        visible={newUserMessage ? true : false}
        footer={null}
        onCancel={handleCancel}
      >
        <h3>Your Email has been confirmed successful</h3>
      </Modal>
    </>
  );
}
