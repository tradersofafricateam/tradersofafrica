import React, { useMemo, useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { axiosInstance } from "../../../../../components/axios";

import "../Dashboard.css";
import PaginationComponent from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import CardSkeleton from "../../CardSkeleton";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../../../../components/utils/GlobalState";

import InquiryInfo from "./InquiryInfo";

const Inquiries = () => {
  const [userEnquireSummary, setUserEnquireSummary] = useState("");
  const [allUserEnquire, setAllUserEnquire] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summaryLoad, setSummaryLoad] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const { user, userLoading } = useContext(GlobalContext);
  const [inquiryLoad, setInquiryLoad] = useState(false);
  const [inquiryInfo, setInquiryInfo] = useState({});

  const navigate = useNavigate();

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const viewInquiryInfo = async (inquiryId) => {
    setInquiryLoad(true);
    await axiosInstance
      .get(`/rfq/${inquiryId}`)
      .then((response) => {
        setInquiryInfo(response.data.data);
        setInquiryLoad(false);
      })
      .catch((error) => {
        setInquiryLoad(false);
        console.log(error);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        }
      });
  };

  useEffect(() => {
    axiosInstance
      .get(`/buyer-hub/enquiry-summary`)
      .then((response) => {
        setUserEnquireSummary(response.data.data);
        setSummaryLoad(false);
      })
      .catch((error) => {
        setSummaryLoad(false);
        console.log(error);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        }
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/buyer-hub/all-enquiries`)
      .then((response) => {
        setAllUserEnquire(response.data.data);
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
  const [noMatch, setNoMatch] = useState(false);

  const inquiryData = useMemo(() => {
    let computedInquiry = allUserEnquire;

    if (search) {
      computedInquiry = computedInquiry.filter(
        (inquiry) =>
          inquiry.termsOfTrade.toLowerCase().includes(search.toLowerCase()) ||
          inquiry.paymentTerms.toLowerCase().includes(search.toLowerCase()) ||
          inquiry.productName.toLowerCase().includes(search.toLowerCase()) ||
          inquiry.status.toLowerCase().includes(search.toLowerCase())
      );
      if (computedInquiry.length < 1) {
        setNoMatch(true);
      } else if (computedInquiry.length > 0) {
        setNoMatch(false);
      }
    } else {
      setNoMatch(false);
    }

    setTotalItems(computedInquiry.length);

    return computedInquiry.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [allUserEnquire, currentPage, search]);

  if (loading || summaryLoad || userLoading) {
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
            <h2>My Inquiries</h2>
          </div>
          <div className="header__search">
            <SearchInput
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
              placeholder="Search for inquiries, status and more"
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
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>All Inquiries</h2>
                <div className="d-flex justify-content-between mt-4">
                  <h3> {enquireSummary && enquireSummary}</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Pending Inquiries</h2>
                <div className="d-flex justify-content-between mt-4">
                  <h3>
                    {" "}
                    {userEnquireSummary.total_pending_enquiries &&
                      userEnquireSummary.total_pending_enquiries}
                  </h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Received Quotes</h2>
                <div className="d-flex justify-content-between mt-4">
                  <h3>
                    {" "}
                    {userEnquireSummary.total_received_quote &&
                      userEnquireSummary.total_received_quote}{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">All Inquiries</h1>
          {allUserEnquire && allUserEnquire.length < 1 ? (
            <div className="empty-state">
              <h3>There are no inquiries</h3>
              <p>
                Make inquiry for any product on the{" "}
                <a href="/buy-commodities">Buy commodity page.</a> All your
                inquiries will be displayed on this page.
              </p>
            </div>
          ) : (
            <div className="main-overview">
              <div className="overview-card no-padding">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Product Info</th>
                        <th scope="col">Quantity /MT</th>
                        <th scope="col">Shipping Terms</th>
                        <th scope="col">Payment Terms</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiryData.map((inquiries, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex">
                              {/* <div className="flex-shrink-0">
                                <img
                                  className="table-product-img"
                                  src={ProductImgTable}
                                  alt="..."
                                />
                              </div> */}
                              <div className="flex-grow-1 ms-3">
                                <p>{Capitalize(inquiries.productName)}</p>
                              </div>
                            </div>
                          </td>
                          <td>{inquiries.quantityRequired}</td>
                          <td>{inquiries.termsOfTrade}</td>
                          <td>{inquiries.paymentTerms}</td>
                          <td>
                            {inquiries.status === "PENDING" && (
                              <div className="text-warning ">Pending</div>
                            )}
                            {inquiries.status === "RECEIVED" && (
                              <div className="text-primary ">Received</div>
                            )}
                            {inquiries.status === "COMPLETED" && (
                              <div className="text-info">Completed</div>
                            )}
                          </td>
                          <td>
                            <a
                              data-bs-toggle="modal"
                              href="#exampleModal"
                              role="button"
                              onClick={(e) => viewInquiryInfo(inquiries.id)}
                            >
                              View
                            </a>
                            <InquiryInfo
                              inquiryInfo={inquiryInfo}
                              inquiryLoad={inquiryLoad}
                            />
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
                No Inquiry matched your criteria. Try searching for something
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

export default Inquiries;
