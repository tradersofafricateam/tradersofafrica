import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import "../Dashboard.css";
import "./UserSettings.css";
import { axiosInstance } from "../../../../../components/axios";
import SearchInput from "../components/SearchInput";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CardSkeleton from "../../CardSkeleton";

const UserSettings = () => {
  const [user, setUser] = useState();
  const [userLoading, setUserLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [passLoader, setPassLoader] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [formattedErrors, setFormattedErrors] = useState({});
  const [createdAt, setCreatedAt] = useState("");

  const [editProfile, setEditProfile] = useState({
    fullName: "",
    country: "",
    phoneNumber: "",
    email: "",
  });

  const getUser = () => {
    axiosInstance
      .get(`/auth/current-user`)
      .then((response) => {
        setUser(response.data.currentUser);

        setEditProfile({
          fullName: response.data.currentUser.fullName,
          email: response.data.currentUser.email,
          phoneNumber: response.data.currentUser.phoneNumber,
        });
        setUserLoading(false);
      })
      .catch((error) => {
        setUserLoading(false);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        }
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const [editPassword, setEditPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    const accountCreated = JSON.parse(localStorage.getItem("joinedAt"));
    if (accountCreated) {
      setCreatedAt(accountCreated);
    }
  }, []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const convertDateFormat = (oldDate) => {
    let date = new Date(oldDate).toString().split(" ");
    let newFormat = `${date[0]} ${date[2]}  ${date[1]}, ${date[3]}`;
    return newFormat;
  };

  const handleChange = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setEditPassword({ ...editPassword, [e.target.name]: e.target.value });
  };

  const handlePasswordToggle = (e) => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await axiosInstance.post(`/buyer-hub/profile`, {
        fullName: editProfile.fullName,
        country: editProfile.country,
        phoneNumber: editProfile.phoneNumber,
      });
      setLoader(false);
      toast.success(`Your profile has been successful updated`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    } catch (error) {
      setLoader(false);
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
      }
      toast.error(`${error.response.data.errors[0].message}`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    }
  };

  const handleUserPasswordChange = async (e) => {
    e.preventDefault();
    setPassLoader(true);
    try {
      const editUserPassword = {
        oldPassword: editPassword.currentPassword,
        newPassword: editPassword.newPassword,
      };
      await axiosInstance.post(`/buyer-hub/password`, editUserPassword);
      setPassLoader(false);
      toast.success(`Your password has been successfully changed.`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 6800);
    } catch (error) {
      setPassLoader(false);
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
      }
      toast.error(`${error.response.data.errors[0].message}`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    }
  };

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  if (userLoading) {
    return <CardSkeleton />;
  }

  return (
    <div>
      <ToastContainer />
      <div className="grid-container">
        {/* <div className="menu-icon">
          <i className="fas fa-bars header__menu"></i>
        </div> */}
        <div
          className={isActive ? "media-menuu-icon" : "menuu-icon"}
          onClick={handleClick}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>

        <header className="header">
          <div className="header__message me-5">
            <h2>Settings</h2>
          </div>
          <div className="header__search">
            <SearchInput placeholder="Search for orders, order status and more" />
            {/* <div className="notify-wrap position-relative">
              <i
                className="far fa-bell"
                style={{ color: "#282828", fontSize: "25px" }}
              ></i>
              <span className="icon-notification position-absolute"></span>
            </div> */}
          </div>
          <div className="user-area ms-auto">
            {user ? (
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 user-area-art">
                  {" "}
                  {user.fullName && user.fullName.charAt(0).toUpperCase()}
                </div>
                <div className="flex-grow-1 ms-2">
                  {user.fullName && user.fullName.length > 15 ? (
                    <p>{Capitalize(user.fullName.slice(0, 15))}...</p>
                  ) : (
                    <p>{Capitalize(user.fullName)}</p>
                  )}
                </div>
              </div>
            ) : (
              <div> </div>
            )}
          </div>
        </header>

        <Sidebar isActive={isActive} />

        <main className="main">
          <div className="main-overview">
            <div className="overview-card">
              <div className="seller-setting-form">
                <h2>
                  My Profile{" "}
                  <span>
                    Joined Since {createdAt && convertDateFormat(createdAt)}
                  </span>
                </h2>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Full name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="fullname"
                          name="fullName"
                          value={editProfile.fullName}
                          onChange={handleChange}
                          disabled />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          name="email"
                          value={editProfile.email}
                          onChange={handleChange}
                          disabled />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          aria-describedby="emailHelp"
                          name="phoneNumber"
                          value={editProfile.phoneNumber}
                          onChange={handleChange}
                          disabled />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          aria-describedby="emailHelp"
                          name="country"
                          value={editProfile.country}
                          onChange={handleChange}
                          disabled />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <h4
                      className="user-setting-change-pwd"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Change Password
                    </h4>
                  </div>
                  {/* Change Password Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body">
                          <div className="modal-padding">
                            <h2>Change Password</h2>
                            <div className="mt-3">
                              <label htmlFor="password" className="form-label">
                                Current password
                              </label>
                              <div className="passwordToggle form-control input">
                                <input
                                  className="password-input"
                                  type={inputType}
                                  name="currentPassword"
                                  value={editPassword.currentPassword}
                                  onChange={handlePasswordChange}
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
                            </div>
                            {formattedErrors.oldPassword && (
                              <p className="errors">
                                {formattedErrors.oldPassword}
                              </p>
                            )}
                            <div className="mt-3">
                              <label htmlFor="password" className="form-label">
                                New password
                              </label>
                              <div className="passwordToggle form-control input">
                                <input
                                  className="password-input"
                                  type={inputType}
                                  name="newPassword"
                                  value={editPassword.newPassword}
                                  onChange={handlePasswordChange}
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
                            </div>
                            {formattedErrors.newPassword && (
                              <p className="errors" style={{ color: "red" }}>
                                {formattedErrors.newPassword}
                              </p>
                            )}
                            {!passLoader ? (
                              <button
                                onClick={handleUserPasswordChange}
                                className="btn btn-primary changepassword my-4"
                              >
                                Change Password
                              </button>
                            ) : (
                              <button className="btn btn-primary changepassword my-4">
                                <span
                                  className="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!loader ? (
                    <button
                      onClick={handleEditProfile}
                      className="btn btn-primary savechanges my-4"
                    >
                      Save Changes
                    </button>
                  ) : (
                    <button className="btn btn-primary savechanges my-4">
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserSettings;
