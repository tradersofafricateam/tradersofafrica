import React, { useEffect, useState, useContext, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import dayjs from "dayjs";
import UserAvatar from "../../../../../assets/img/logo.jpg";

import "../Dashboard.css";
import { RaiseDisputeModal } from "./RaiseDisputeModal";
import ViewOrderModal from "./ViewOrderModal";
import { NewOrderModal } from "./NewOrderModal";
import SearchInput from "../components/SearchInput";

import { GlobalContext } from "../../../../../components/utils/GlobalState";
import { ChatInput } from "./ChatInput";
import { axiosInstance } from "./../../../../../components/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardSkeleton from "../../CardSkeleton";

const MessageCenter = () => {
  const { user, userLoading } = useContext(GlobalContext);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();
  const [loader, setLoader] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [orderLoad, setOrderLoad] = useState(false);

  const [orderInfo, setOrderInfo] = useState({});
  const navigate = useNavigate();

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const viewOrderInfo = async (orderId) => {
    setOrderLoad(true);
    await axiosInstance
      .get(`/order/${orderId}`)
      .then((response) => {
        setOrderInfo(response.data.data);
        setOrderLoad(false);
      })
      .catch((error) => {
        console.log(error);
        setOrderLoad(false);
      });
  };

  // const convertDateFormat = (oldDate) => {
  //   let date = new Date(oldDate).toString().split(" ");
  //   return date[2] + " " + date[1] + "," + " " + date[3];
  // };

  const handleApproval = async () => {
    try {
      setLoader(true);
      await axiosInstance.get(`/order/approve/${orderInfo.id}`);
      setLoader(false);
      toast.success(`You have successfully approved this order`, {
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
      toast.error(`${error.response.data.errors[0].message}`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    }
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
        "http://ec2-18-221-181-52.us-east-2.compute.amazonaws.com:8081"
      );
      socket.current.emit(socketEvents.addUser, user.id, user.type);
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosInstance.get("/message/receive-message");
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

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSendMsg = async (msg) => {
    try {
      const payload = {
        from: user.id,
        message: msg,
        messageType: "MESSAGE",
        sender: user.type,
      };

      socket.current.emit(socketEvents.sendMessage, payload);

      await axiosInstance.post("/message/send-message", payload);

      const msgs = [...messages];
      msgs.push({ fromSelf: true, message: msg });
      setMessages(msgs);
    } catch (error) {
      console.log(error);
    }
  };

  function isMsgObject(msg) {
    let isObject;

    try {
      const orderResultObj = JSON.parse(msg);
      if (typeof orderResultObj === "object") {
        isObject = true;
      }
    } catch (error) {
      if (error) {
        isObject = false;
      }
    }

    return isObject;
  }

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
            <h2>Message Center</h2>
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
                      </div>
                    </div>
                    <div className="chat-action">
                      <Link to="/message-center">
                        <i
                          className="fas fa-comment-dots chat-icon"
                          style={{ color: "#5C5C5C" }}
                        ></i>
                      </Link>
                    </div>
                  </div>

                  <div className="chat-area">
                    <div className="message-area ">
                      <div className="message-area ">
                        <div className="chat-msg  receiver " ref={scrollRef}>
                          <div>
                            <p>
                              {" "}
                              Welcome to Taders of Africa, how can we help you
                              today?
                            </p>
                          </div>
                        </div>
                      </div>
                      {messages.map((message, index) => {
                        return (
                          <div className="message-area" key={index}>
                            {isMsgObject(message.message) ? (
                              // <ChatOrder order={JSON.parse(message.message)} />
                              <div className="chat-order-request-msg receiver">
                                <div className="order-msg d-flex">
                                  <div className="flex-shrink-0">
                                    <h2>New Order</h2>
                                    <p className="cp-name">
                                      Order{" "}
                                      {JSON.parse(message.message)
                                        .orderNumber &&
                                        JSON.parse(message.message).orderNumber}
                                    </p>
                                    <p className="cp-price">
                                      <span>USD</span>{" "}
                                      {JSON.parse(message.message).cost
                                        ? numberWithCommas(
                                            JSON.parse(message.message).cost
                                          )
                                        : numberWithCommas(
                                            JSON.parse(message.message).data
                                              .cost
                                          )}{" "}
                                      <span>/ MT</span>
                                    </p>
                                  </div>
                                  {/* <div className="flex-grow-1 ms-3">
                                  <p className="cp-name">{order.incoterm && order.incoterm}</p>
                                  <p className="cp-price">
                                    {order.cost
                                      ? numberWithCommas(order.cost)
                                      : numberWithCommas(order.data.cost)}{" "}
                                  </p>
                                </div> */}
                                </div>

                                {JSON.parse(message.message).id && (
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#vieworderModall"
                                    className="order_msg-btn"
                                    onClick={(e) =>
                                      viewOrderInfo(
                                        JSON.parse(message.message).id
                                      )
                                    }
                                  >
                                    View Order
                                  </button>
                                )}

                                {/* <button className="order_msg-btn">
                                      Approve Order
                                    </button> */}

                                <p className="chat-timestamp">
                                  {JSON.parse(message.message).createdAt &&
                                    dayjs(
                                      JSON.parse(message.message).createdAt
                                    ).format("hh:mm a")}
                                </p>
                              </div>
                            ) : (
                              <div
                                className={`chat-msg ${
                                  message.fromSelf ? "sender" : "receiver"
                                }`}
                                key={index}
                                ref={scrollRef}
                              >
                                <div>
                                  {message.message === "START_NEW_ORDER" ? (
                                    <div className="order-msg">
                                      <h2>New order request.</h2>
                                    </div>
                                  ) : (
                                    <p>{message.message}</p>
                                  )}
                                  <p className="chat-timestamp">
                                    {dayjs(message.createdAt).format("hh:mm a")}{" "}
                                  </p>
                                </div>
                              </div>
                            )}
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
            <NewOrderModal handleSendMsg={handleSendMsg} />
            {/* End of New Order MOdal */}

            {/* Raise Dispute Modal */}
            <RaiseDisputeModal />
            {/* End of Raise Dispute Modal */}
            {/* View Order */}
            <ViewOrderModal
              orderInfo={orderInfo}
              handleApproval={handleApproval}
              loader={loader}
              orderLoad={orderLoad}
            />
            {/* End of View Order Modal */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MessageCenter;
