import React, { useState, useEffect, useMemo, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { axiosInstance } from "./../../../../../components/axios";

import "../Dashboard.css";
import SearchInput from "../components/SearchInput";
import PaginationComponent from "../components/Pagination";
import CardSkeleton from "../../CardSkeleton";
import OrderInfo from "../OrderInfo/OrderInfo";

import { GlobalContext } from "../../../../../components/utils/GlobalState";

const Orders = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const ITEMS_PER_PAGE = 10;
  const [noMatch, setNoMatch] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});

  const { user } = useContext(GlobalContext);
  const [userOrderSummary, setUserOrderSummary] = useState("");
  const [allUserOrder, setAllUserOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allLoading, setAllLoading] = useState(true);
  const [orderLoad, setOrderLoad] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const viewOrderInfo = async (orderId) => {
    setOrderLoad(true);
    await axiosInstance
      .get(`/order/${orderId}`)
      .then((response) => {
        setOrderInfo(response.data.data);
        setOrderLoad(false);
      })
      .catch((error) => {
        setOrderLoad(false);
        console.log(error);
      });
  };

  useEffect(() => {
    axiosInstance
      .get(`/buyer-hub/order-summary`)
      .then((response) => {
        setUserOrderSummary(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/buyer-hub/all-orders`)
      .then((response) => {
        setAllUserOrder(response.data.data);
        setAllLoading(false);
      })
      .catch((error) => {
        setAllLoading(false);
        console.log(error);
      });
  }, []);

  const orderSummary =
    userOrderSummary.total_delivered_orders +
    userOrderSummary.total_pending_orders +
    userOrderSummary.total_shipped_orders +
    userOrderSummary.total_confirmed_orders +
    userOrderSummary.total_cancelled_orders;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // pagination starts
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
      if (computedOrders.length < 1) {
        setNoMatch(true);
        setTotalItems(0);
      } else if (computedOrders.length > 0) {
        setNoMatch(false);
      }
    } else {
      setNoMatch(false);
    }

    setTotalItems(computedOrders.length);

    return computedOrders.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [allUserOrder, currentPage, search, noMatch]);

  if (loading || allLoading) {
    return <CardSkeleton />;
  }
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
          <div className="header__message me-5">
            <h2>My Orders</h2>
          </div>

          <div className="header__search">
            <SearchInput
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
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
          <div className="user-area ms-auto">
            {user ? (
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 user-area-art">
                  {" "}
                  {user.fullName && user.fullName.charAt(0).toUpperCase()}
                </div>
                <div className="flex-grow-1 ms-2">
                  {user.fullName.length > 15 ? (
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
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>Total Orders</h2>
                <div className="d-flex justify-content-between mt-4">
                  <h3>{orderSummary && orderSummary}</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Pending Orders</h2>
                <div className="d-flex justify-content-between mt-4">
                  {userOrderSummary.total_pending_orders < 1 ? (
                    <h3>0</h3>
                  ) : (
                    <h3>{userOrderSummary.total_pending_orders}</h3>
                  )}
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Delivered Orders</h2>
                <div className="d-flex justify-content-between mt-4">
                  {userOrderSummary.total_delivered_orders < 1 ? (
                    <h3>0</h3>
                  ) : (
                    <h3>{userOrderSummary.total_delivered_orders}</h3>
                  )}
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">All Orders</h1>
          {allUserOrder && allUserOrder.length > 0 ? (
            <div className="main-overview">
              <div className="overview-card no-padding">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Product Info</th>
                        <th scope="col">Product Cost</th>
                        <th scope="col">Shipping Terms</th>
                        <th scope="col">Payment Terms</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ordersData &&
                        ordersData.map((orders) => (
                          <tr key={orders.id}>
                            <td>
                              <div className="d-flex">
                                <div className="flex-shrink-0">
                                  <img
                                    className="table-product-img"
                                    src={
                                      orders.product &&
                                      orders.product.productImages[0].image
                                    }
                                    alt="product"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <p>
                                    {" "}
                                    {orders.product
                                      ? Capitalize(orders.product.productName)
                                      : " "}
                                  </p>
                                  <p className="table-order-no">
                                    Order {orders.orderNumber}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>USD {numberWithCommas(orders.cost)}</td>
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
                            <td>
                              {" "}
                              <p
                                className="text-primary "
                                data-bs-toggle="modal"
                                data-bs-target="#vieworderModal"
                                onClick={(e) => viewOrderInfo(orders.id)}
                                style={{ cursor: "pointer" }}
                              >
                                View
                              </p>
                              <OrderInfo
                                orderInfo={orderInfo}
                                Capitalize={Capitalize}
                                orderLoad={orderLoad}
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <h3>There are no orders</h3>
              <p>
                Start order in the{" "}
                <Link to="/message-center">Message Center.</Link> All your order
                will be displayed on this page.
              </p>
            </div>
          )}
          {noMatch === true ? (
            <div className="empty-state">
              <h4>No results found</h4>
              <p>
                No order matched your criteria. Try searching for something
                else.
              </p>
            </div>
          ) : (
            <PaginationComponent
              total={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Orders;
