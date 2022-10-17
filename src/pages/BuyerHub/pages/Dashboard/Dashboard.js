import React, { useState, useEffect, useMemo, useContext } from "react";
import { Iconly } from "react-iconly";
import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom";

import TrackImg from "../../../../assets/img/track-illus.png";
import OrdersImg from "../../../../assets/img/orders-illus.png";
import ProductImgTable from "../../../../assets/img/products/p-img1.png";

import "./Dashboard.css";

import { GlobalContext } from "../../../../components/utils/GlobalState";
import PaginationComponent from "./components/Pagination";
import SearchInput from "./components/SearchInput";

const Dashboard = () => {
  const {
    user,
    userLoading,
    userOrderSummary,
    userEnquireSummary,
    allUserOrder,
    allUserEnquire,
  } = useContext(GlobalContext);
  console.log("all orders", allUserOrder);

  //summary for all orders and enquire
  const orderSummary =
    userOrderSummary.total_delivered_orders +
    userOrderSummary.total_pending_orders +
    userOrderSummary.total_shipped_orders +
    userOrderSummary.total_confirmed_orders;

  const enquireSummary =
    userEnquireSummary.total_pending_enquiries +
    userEnquireSummary.total_received_quote +
    userEnquireSummary.total_sent_enquiries;

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Pagination
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const ITEMS_PER_PAGE = 10;

  const ordersData = useMemo(() => {
    let computedOrders = allUserOrder;

    if (search) {
      computedOrders = computedOrders.filter(
        (order) =>
          order.shippingType.toLowerCase().includes(search.toLowerCase()) ||
          order.paymentTerm.toLowerCase().includes(search.toLowerCase()) ||
          order.product.productName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          order.status.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedOrders.length);

    return computedOrders.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [allUserOrder, currentPage, search]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (userLoading) {
    return (
      <div
        className="loader mx-auto"
        align="center"
        id="loader"
        style={{
          position: "absolute",
          top: "calc(50% - 60px)",
          left: "calc(50% - 60px)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      ></div>
    );
  }
  return (
    <div>
      <div className="grid-container">
        <div className="menu-icon">
          <i className="fas fa-bars header__menu"></i>
        </div>

        <header className="header">
          <div className="header__message">
            <h2>{user.fullName ? Capitalize(user.fullName) : ""}!</h2>
          </div>
          <div className="header__search">
            <SearchInput
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
              placeholder="Search for orders, order status and more"
            />

            <div className="notify-wrap position-relative">
              <Link to="/dashboard">
                <Iconly
                  name="Notification"
                  set="bulk"
                  primaryColor="#282828"
                  size="medium"
                />
                <span className="icon-notification position-absolute"></span>
              </Link>
            </div>
          </div>
        </header>

        <Sidebar />

        <main className="main">
          {user.lastLoggedIn === null && (
            <div className="info-cards">
              <div className="card">
                <div>
                  <h2>Track it all!</h2>
                  <p>
                    Keep track of all your and transactions activities here in
                    your Dashboard
                  </p>
                </div>
                <img src={TrackImg} alt="..." />
              </div>
              <div className="card">
                <div>
                  <h2>Monitor Your Orders</h2>
                  <p>
                    Keep track of all your and transactions activities here in
                    your order tab on the dashboard
                  </p>
                </div>
                <img src={OrdersImg} alt="..." />
              </div>
            </div>
          )}

          <h1 className="section-title">Activity Summary</h1>
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>Total Orders</h2>
                {/* <p>Detailed transaction history is on the order page</p> */}
                <div class="d-flex justify-content-between mt-4">
                  <h3>{orderSummary}</h3>
                  <Link className="overview-card-link" to="/orders">
                    View all
                  </Link>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Total Inquiries</h2>
                {/* <p>Detailed transaction history is on the order page</p> */}
                <div class="d-flex justify-content-between mt-4">
                  <h3>{enquireSummary}</h3>
                  <Link className="overview-card-link" to="/inquiries">
                    View all
                  </Link>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Total Quotes</h2>
                {/* <p>Detailed transaction history is on the order page</p> */}
                <div class="d-flex justify-content-between mt-4">
                  <h3>5</h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">Latest Orders</h1>
          <div className="main-overview">
            <div className="overview-card no-padding">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product Info</th>
                      <th scope="col">Product Cost</th>
                      <th scope="col">Shipping Terms</th>
                      <th scope="col">Payment Terms</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((orders, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img
                                className="table-product-img"
                                src={orders.product.productImages[0].image}
                                alt="product name"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <p>
                                {orders.product.productName
                                  ? Capitalize(orders.product.productName)
                                  : ""}
                              </p>
                              <p className="table-order-no">
                                Order {orders.orderNumber}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          {orders.product.currency}{" "}
                          {numberWithCommas(orders.cost)}
                        </td>
                        <td>{orders.shippingType}</td>
                        <td>{orders.paymentTerm}</td>
                        <td>
                          {orders.status === "PENDING" && (
                            <div className="text-warning ">Pending</div>
                          )}
                          {orders.status === "PROCESSING" && (
                            <div className="text-primary ">Processing</div>
                          )}
                          {orders.status === "SHIPPED" && (
                            <div className="text-info">Shipped</div>
                          )}
                          {orders.status === "DELIVERED" && (
                            <div className="text-success">Delivery</div>
                          )}
                          {orders.status === "CANCELLED" && (
                            <div className="text-danger">Cancelled</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <PaginationComponent
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
