import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import "../Dashboard.css";
import "./UserSettings.css";
import { axiosInstance } from "../../../../../components/axios";
import SearchInput from "../components/SearchInput";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserSettings = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [passLoader, setPassLoader] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [formattedErrors, setFormattedErrors] = useState({});
  const [createdAt, setCreatedAt] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");
  const [editProfile, setEditProfile] = useState({
    fullName: "",
    country: "",
  });
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
        phoneNumber: editPhoneNumber,
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
          <div className="header__message">
            <h2>Settings</h2>
          </div>
          <div className="header__search">
            <SearchInput
              
              placeholder="Search for orders, order status and more"
            />
            {/* <div className="notify-wrap position-relative">
              <i
                className="far fa-bell"
                style={{ color: "#282828", fontSize: "25px" }}
              ></i>
              <span className="icon-notification position-absolute"></span>
            </div> */}
          </div>
        </header>

        <Sidebar isActive={isActive} />

        <main className="main">
          <div className="main-overview">
            <div className="overview-card">
              <div className="seller-setting-form">
                <form>
                  <div className="seller-setting-formgroup">
                    <div className="form-group-right">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="fullname"
                          name="fullName"
                          value={editProfile.fullName}
                          onChange={handleChange}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          className="form-control"
                          type="text"
                          id="country"
                          name="country"
                          value={editProfile.country}
                          onChange={handleChange}
                          placeholder="Enter country"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <PhoneInput
                          name="editPhoneNumber"
                          className="form-control"
                          defaultCountry="NG"
                          value={editPhoneNumber}
                          onChange={setEditPhoneNumber}
                          placeholder="+123909989898"
                        />
                      </div>
                      <div className="mt-3">
                        <label htmlFor="password" className="form-label">
                          Current password
                        </label>
                        <div className="passwordToggle form-control input">
                          <input
                            className="password-input"
                            placeholder="Enter current password"
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
                        <p className="errors">{formattedErrors.oldPassword}</p>
                      )}
                      <div className="mt-3">
                        <label htmlFor="password" className="form-label">
                          New password
                        </label>
                        <div className="passwordToggle form-control input">
                          <input
                            className="password-input"
                            type={inputType}
                            placeholder="Enter new password"
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
                    </div>
                  </div>
                  <div className="seller-footer">
                    <div className="seller-seting-submit mx-2">
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
                    </div>
                    <div className="seller-seting-joindate">
                      <p>Joined Since</p>
                      <p>{createdAt && convertDateFormat(createdAt)}</p>
                    </div>
                  </div>
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
