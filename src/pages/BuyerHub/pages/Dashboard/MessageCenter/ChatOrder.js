import React from "react";
import ProductImgTable from "../../../../../assets/img/products/p-img1.png";

export const ChatOrder = () => {
  return (
    <div className="chat-order-request-msg receiver">
      <div class="order-msg d-flex">
        <div class="flex-shrink-0">
          <img src={ProductImgTable} alt="..." />
        </div>
        <div class="flex-grow-1 ms-3">
          <h2>New Order</h2>
          <p className="cp-name">Dried Hibiscus</p>
          <p className="cp-price">
            <span>USD</span> 500 <span>/ MT</span>
          </p>
        </div>
      </div>
      <button
        data-bs-toggle="modal"
        data-bs-target="#vieworderModal"
        className="order_msg-btn"
      >
        View Order
      </button>
      <button className="order_msg-btn">Place Order</button>
      <p className="chat-timestamp">11:20 am</p>
    </div>
  );
};
