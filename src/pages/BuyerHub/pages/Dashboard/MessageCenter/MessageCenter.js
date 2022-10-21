import React, { useEffect, useContext, useRef } from "react";
import { Iconly } from "react-iconly";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import TrackImg from "../../../../../assets/img/track-illus.png";
import OrdersImg from "../../../../../assets/img/orders-illus.png";
import UserAvatar from "../../../../../assets/img/logo.jpg";

import "../Dashboard.css";
import { RaiseDisputeModal } from "./RaiseDisputeModal";
import ViewOrderModal from "./ViewOrderModal";
import { NewOrderModal } from "./NewOrderModal";
import { ChatOrder } from "./ChatOrder";
import { GlobalContext } from "../../../../../components/utils/GlobalState";
import { ChatInput } from "./ChatInput";

const MessageCenter = () => {
  const { user } = useContext(GlobalContext);
  const socket = useRef();

  const socketEvents = {
    connection: "connection",
    addUser: "add-user",
    sendMessage: "send-message",
    receiveMessage: "receive-message",
    disconnect: "disconnect",
  };

  useEffect(() => {
    if (user) {
      socket.current = io("http://localhost:8081");
      socket.current.emit(socketEvents.addUser, user.id);
    }
  }, [user]);

  const handleSendMsg = async (msg) => {
    try {
      const payload = {
        to: user.id,
        from: user.id,
        message: msg,
      };

      socket.current.emit("send-message", payload);
    } catch (error) {
      console.log(error);
    }
  };

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

        <main className="main">
          <div className="chat-container">
            <div className="main-overview no-margin">
              <div className="overview-card no-padding">
                <div className="chat-wrap">
                  <div className="chat-header d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 position-relative">
                        <img
                          className="chat-rep-img"
                          src={UserAvatar}
                          alt="..."
                        />
                        <span className="online-status position-absolute"></span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>TOFA SourcePro</h2>
                        <p>Salami Johnson</p>
                      </div>
                    </div>
                    <div className="chat-action">
                      {/* <Link to="/message-center"><Iconly className="chat-icon" name='Camera' set='light' primaryColor='#5C5C5C' size='medium' /></Link>
                      <Link to="/message-center"><Iconly className="chat-icon" name='PaperUpload' set='light' primaryColor='#5C5C5C' size='medium' /></Link> */}
                      <Link to="/message-center">
                        <Iconly
                          className="chat-icon"
                          name="MoreCircle"
                          set="light"
                          primaryColor="#5C5C5C"
                          size="medium"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="chat-area">
                    <div className="message-area">
                      <ChatOrder />

                      <div className="chat-msg sender">
                        <p>
                          Very Random text between tofa sourcepro and the buyer
                          trying to conclude a transaction, Very Random text
                          between tofa sourcepro and the buyer trying
                        </p>
                        <p className="chat-timestamp">11:20 am</p>
                      </div>
                      <div className="chat-msg receiver">
                        <p>
                          Very Random text between tofa sourcepro and the buyer
                          trying to conclude a transaction, Very Random text
                          between tofa sourcepro and the buyer trying to
                          conclude a transaction.
                        </p>
                        <p className="chat-timestamp">11:25 am</p>
                      </div>
                    </div>

                    <ChatInput handleSendMsg={handleSendMsg} />
                  </div>
                </div>
              </div>
            </div>

            {/* New Order Modal */}
            <NewOrderModal />
            {/* End of New Order MOdal */}

            {/* Raise Dispute Modal */}
            <RaiseDisputeModal />
            {/* End of Raise Dispute Modal */}

            {/* View Order */}
            <ViewOrderModal />
            {/* End of View Order Modal */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MessageCenter;
