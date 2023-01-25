// import React, { useState } from "react";
// import ProductImgTable from "../../../../../assets/img/products/p-img1.png";
// import dayjs from "dayjs";
// import { axios } from "../../../../../components/baseUrl";
// import { useNavigate } from "react-router-dom";

// export const ChatOrder = ({ order }) => {
//   console.log("order", order);
//   const [orderInfo, setOrderInfo] = useState({});
//   const navigate = useNavigate();

//   function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }

//   const viewOrderInfo = async (orderId) => {
//     await axios
//       .get(`/order/${orderId}`)
//       .then((response) => {
//         setOrderInfo(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);

//         if (!error.response.data.errors) {
//           return navigate(`/no-connection`);
//         }
//       });
//   };

//   return (
//     <div className="chat-order-request-msg receiver">
//       <div class="order-msg d-flex">
//         <div class="flex-shrink-0">
//           <h2>New Order</h2>
//           <p className="cp-name">
//             Order {order.orderNumber && order.orderNumber}
//           </p>
//           <p className="cp-price">
//             <span>USD</span>{" "}
//             {order.cost
//               ? numberWithCommas(order.cost)
//               : numberWithCommas(order.data.cost)}{" "}
//             <span>/ MT</span>
//           </p>
//         </div>
//         {/* <div className="flex-grow-1 ms-3">
//           <p className="cp-name">{order.incoterm && order.incoterm}</p>
//           <p className="cp-price">
//             {order.cost
//               ? numberWithCommas(order.cost)
//               : numberWithCommas(order.data.cost)}{" "}
//           </p>
//         </div> */}
//       </div>
//       {order.id && (
//         <button
//           data-bs-toggle="modal"
//           data-bs-target="#vieworderModall"
//           className="order_msg-btn"
//           onClick={(e) => viewOrderInfo(order.id)}
//         >
//           View Order
//         </button>
//       )}
//       <button className="order_msg-btn">Place Order</button>
//       <p className="chat-timestamp">
//         {order.createdAt && dayjs(order.createdAt).format("hh:mm a")}
//       </p>
//     </div>
//   );
// };
