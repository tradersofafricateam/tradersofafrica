import React from "react";
import { Iconly } from "react-iconly";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

import TrackImg from "../../../../../assets/img/track-illus.png";
import OrdersImg from "../../../../../assets/img/orders-illus.png";
import ProductImgTable from "../../../../../assets/img/products/p-img1.png";
import UserAvatar from "../../../../../assets/img/erhun.png";

import "../Dashboard.css";

const MessageCenter = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="menu-icon">
          <i className="fas fa-bars header__menu"></i>
        </div>

        <header className="header">
          <div className="header__message">
            <h2>Message Center</h2>
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

        <Sidebar />

        <main className="main no-padding-btm">
          <div className="chat-container">
            <div className="main-overview no-margin">
              <div className="overview-card no-padding">
                <div className="chat-area">

                  <div className="chat-header">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img className="chat-rep-img" src={UserAvatar} alt="..."/>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <p>Erhun Abbe</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer__copyright">
            &copy; 2022 Traders of Africa. All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MessageCenter;
