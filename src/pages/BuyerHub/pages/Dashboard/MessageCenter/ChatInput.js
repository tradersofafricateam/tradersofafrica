import React, { useState } from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";

export const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState("");

  const handleSetMessage = (e) => {
    setMsg(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("passed here");
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <div className="message-input">
      <button
        data-bs-toggle="modal"
        data-bs-target="#orderModal"
        className="msg-center-btn btn-primary me-2"
        align="right"
      >
        Start Order
      </button>
      <button
        data-bs-toggle="modal"
        data-bs-target="#disputeModal"
        className="msg-center-btn btn-primary me-2"
        align="right"
      >
        Raise Dispute
      </button>
      <form className="chat-form">
        <div className="chat-input-area d-flex justify-content-between">
          <textarea
            class="form-control"
            onChange={handleSetMessage}
            value={msg}
            placeholder="Type your message here..."
          ></textarea>
          <Link to="/message-center">
            <Iconly
              className="chat-icon"
              name="PaperUpload"
              set="light"
              primaryColor="#5C5C5C"
              size="medium"
            />
          </Link>
          <Link to="/message-center">
            <Iconly
              onClick={handleSendMessage}
              className="send-icon ms-3"
              name="Send"
              set="bulk"
              primaryColor="#5C5C5C"
              size="medium"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};