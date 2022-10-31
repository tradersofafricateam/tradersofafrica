import React, { useEffect, useState, useContext, useRef } from "react";
import { Iconly } from "react-iconly";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import dayjs from "dayjs";
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
import { axios } from "../../../../../components/baseUrl";

const MessageCenter = () => {
  const { user } = useContext(GlobalContext);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const socketEvents = {
    connection: "connection",
    addUser: "add-user",
    sendMessage: "send-message",
    receiveMessage: "receive-message",
    disconnect: "disconnect",
  };

  useEffect(() => {
    if (user) {
      socket.current = io(
        "http://ec2-18-221-181-52.us-east-2.compute.amazonaws.com"
      );
      socket.current.emit(socketEvents.addUser, user.id, user.type);
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get("/message/receive-message");
        console.log(data);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (socket.current) {
      socket.current.on(socketEvents.receiveMessage, (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMsg = (msg) => {
    try {
      const payload = {
        from: user.id,
        message: msg,
        messageType: "MESSAGE",
        sender: user.type,
      };

      socket.current.emit(socketEvents.sendMessage, payload);

      axios.post("/message/send-message", payload);

      const msgs = [...messages];
      msgs.push({ fromSelf: true, message: msg });
      setMessages(msgs);
    } catch (error) {
      console.log(error);
    }
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

        <Sidebar isActive={isActive} />

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
                      {messages.map((message, index) => {
                        return (
                          <div
                            className={`chat-msg ${
                              message.fromSelf ? "sender" : "receiver"
                            }`}
                            key={index}
                            ref={scrollRef}
                          >
                            <p>{message.message}</p>
                            <p className="chat-timestamp">
                              {dayjs(message.createdAt).format("hh:mm a")}
                            </p>
                          </div>
                        );
                      })}
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
