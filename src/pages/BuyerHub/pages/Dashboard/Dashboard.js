import React, { useState, useEffect, useMemo, useContext } from "react";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./../../../../components/axios";

import TrackImg from "../../../../assets/img/track-illus.png";
import OrdersImg from "../../../../assets/img/orders-illus.png";
import "./Dashboard.css";

import { GlobalContext } from "../../../../components/utils/GlobalState";
import PaginationComponent from "./components/Pagination";
import SearchInput from "./components/SearchInput";
import CardSkeleton from "../CardSkeleton";

const Dashboard = () => {
  const { user, userLoading } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [allUserOrder, setAllUserOrder] = useState([]);
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(true);
  const [activityLoading, setActivityLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const convertDateFormat = (oldDate) => {
    let date = new Date(oldDate).toString().split(" ");
    let newFormat = `${date[0]} ${date[2]}  ${date[1]}, ${date[3]}`;
    return newFormat;
  };

  useEffect(() => {
    axiosInstance
      .get(`/buyer-hub/activity-summary`)
      .then((response) => {
        setActivity(response.data.data);
        setActivityLoading(false);
      })
      .catch((error) => {
        setActivityLoading(false);
        console.log(error);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        }
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/buyer-hub/all-orders`)
      .then((response) => {
        setAllUserOrder(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        }
      });
  }, []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Pagination
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const ITEMS_PER_PAGE = 10;
  const [noMatch, setNoMatch] = useState(false);

  const ordersData = useMemo(() => {
    let computedOrders = allUserOrder;

    if (search) {
      computedOrders = computedOrders.filter(
        (order) =>
          order.shippingType.toLowerCase().includes(search.toLowerCase()) ||
          order.paymentTerm.toLowerCase().includes(search.toLowerCase()) ||
          (order.product &&
            order.product.productName
              .toLowerCase()
              .includes(search.toLowerCase())) ||
          order.status.toLowerCase().includes(search.toLowerCase()) ||
          (order.productName &&
            order.productName.toLowerCase().includes(search.toLowerCase())) ||
          order.orderNumber.toLowerCase().includes(search.toLowerCase())
      );
      if (computedOrders.length < 1) {
        setNoMatch(true);
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
  }, [allUserOrder, currentPage, search]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (loading || activityLoading || userLoading) {
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
            {/* <h2>Hello {user.fullName ? Capitalize(user.fullName) : ""}</h2> */}
            <h2>Account Overview</h2>
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
              <Link to="/dashboard">
                <i
                  className="far fa-bell"
                  style={{ color: "#282828", fontSize: "25px" }}
                ></i>
                <span className="icon-notification position-absolute"></span>
              </Link>
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
                <h2>Total Transactions</h2>
                <p>Detailed transaction history is on the order page</p>
                <div className="d-flex justify-content-between mt-4">
                  <h3>
                    {activity.total_transactions &&
                      numberWithCommas(activity.total_transactions)}
                    <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Total Orders</h2>
                <p>Detailed transaction history is on the order page</p>
                <div className="d-flex justify-content-between mt-4">
                  <h3>
                    {activity.total_number_of_orders &&
                      numberWithCommas(activity.total_number_of_orders)}
                  </h3>

                  {/* <Link className="overview-card-link" to="/orders">
                    View all
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Total Inquiries</h2>
                <p>Detailed transaction history is on the order page</p>
                <div className="d-flex justify-content-between mt-4">
                  <h3>
                    {activity.total_number_of_enquiries &&
                      numberWithCommas(activity.total_number_of_enquiries)}
                  </h3>

                  {/* <Link className="overview-card-link" to="/inquiries">
                    View all
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">Latest Orders</h1>
          {allUserOrder && allUserOrder.length < 1 ? (
            <div className="empty-state">
              <h3>Welcome to your Dashboard</h3>
              <p>
                No activity found on your dashbaord. Start by placing an order
                or submitting a product inquiry
              </p>
            </div>
          ) : (
            <div className="main-overview">
              <div className="overview-card no-padding">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Cost</th>
                        <th scope="col">Shipping Terms</th>
                        <th scope="col">Payment Terms</th>
                        <th scope="col">Date</th>
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
                                  src={
                                    orders.product &&
                                    orders.product.productImages[0].image
                                  }
                                  alt="product name"
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <p>
                                  {orders.product
                                    ? Capitalize(orders.product.productName)
                                    : ""}
                                </p>
                                {/* <p className="table-order-no">
                                  Order {orders.orderNumber}
                                </p> */}
                              </div>
                            </div>
                          </td>
                          <td>USD {numberWithCommas(orders.cost)}</td>
                          <td>{orders.incoterm}</td>
                          <td>{orders.paymentTerm}</td>
                          <td>
                            {orders.createdAt &&
                              convertDateFormat(orders.createdAt)}
                          </td>
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
                              <div className="text-success">Delivered</div>
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
          )}
          {noMatch === true ? (
            <div className="empty-state">
              <h4>No results found</h4>
              <p>
                No order matched your criteria. Try searching for something else
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

export default Dashboard;
