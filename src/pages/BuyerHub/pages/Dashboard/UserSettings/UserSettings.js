import React, { useState } from "react";
import { Iconly } from "react-iconly";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import TrackImg from "../../../../../assets/img/track-illus.png";
import OrdersImg from "../../../../../assets/img/orders-illus.png";
import ProductImgTable from "../../../../../assets/img/products/p-img1.png";

import "../Dashboard.css";
import "./UserSettings.css";

const UserSettings = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div>
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
            <form>
              <div className="custom__search">
                <Iconly
                  name="Search"
                  set="light"
                  primaryColor="#5C5C5C"
                  size="medium"
                />
                <input
                  type="text"
                  className="form-control custom-style"
                  id=""
                  placeholder="Search for orders, inquiries and more"
                />
              </div>
            </form>

            <div className="notify-wrap position-relative">
              <Iconly
                name="Notification"
                set="bulk"
                primaryColor="#282828"
                size="medium"
              />
              <span className="icon-notification position-absolute"></span>
            </div>
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
                          placeholder="Erhuan Abhe"
                        />
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          className="form-control"
                          type="text"
                          id="country"
                          placeholder="Nigeria"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          className="form-control"
                          type="number"
                          id="phonenumber"
                          placeholder="+234-567-890-123"
                        />
                      </div>

                      <div className="form-group password">
                        <label>Current password</label>
                        <input
                          className="form-control"
                          type="password"
                          id="text"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div className="form-group password">
                        <label>New password</label>
                        <input
                          className="form-control"
                          type="password"
                          id="text"
                          placeholder="Enter new password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="seller-footer">
                    <div className="seller-seting-submit">
                      <button
                        type="submit"
                        className="btn btn-primary changepassword"
                      >
                        Change Password
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary savechanges"
                      >
                        Save Changes
                      </button>
                    </div>
                    <div className="seller-seting-joindate">
                      <p>Joined Since</p>
                      <p>March 15th 2019</p>
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
