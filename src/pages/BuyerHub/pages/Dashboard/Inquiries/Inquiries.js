import React, { useMemo, useState, useContext } from "react";
import { Iconly } from "react-iconly";
import Sidebar from "../components/Sidebar";

import ProductImgTable from "../../../../../assets/img/products/p-img1.png";

import "../Dashboard.css";
import { GlobalContext } from "../../../../../components/utils/GlobalState";
import PaginationComponent from "../components/Pagination";
import SearchInput from "../components/SearchInput";

const Inquiries = () => {
  const { userEnquireSummary, allUserEnquire } = useContext(GlobalContext);

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
      console.log("computedInquiry", computedInquiry);
      if (computedInquiry.length < 1) {
        setNoMatch(true);
      } else if (computedInquiry.length > 0) {
        setNoMatch(false);
      }
      console.log("search", search);
    } else {
      setNoMatch(false);
    }

    setTotalItems(computedInquiry.length);

    return computedInquiry.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [allUserEnquire, currentPage, search]);

  return (
    <div>
      <div className="grid-container">
        <div className="menu-icon">
          <i className="fas fa-bars header__menu"></i>
        </div>

        <header className="header">
          <div className="header__message">
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
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>All Inquiries</h2>
                <div class="d-flex justify-content-between mt-4">
                  <h3>{enquireSummary}</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Pending Inquiries</h2>
                <div class="d-flex justify-content-between mt-4">
                  <h3>{userEnquireSummary.total_pending_enquiries}</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Received Quotes</h2>
                <div class="d-flex justify-content-between mt-4">
                  <h3>{userEnquireSummary.total_received_quote}</h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">All Inquiries</h1>
          {allUserEnquire && allUserEnquire.length < 1 ? (
            <div className="empty-state">
              <h3>Welcome to your Inquiry history page</h3>
              <p>
                Get started by making inquiry for any product! All your inquiry
                will be displayed on this page.
              </p>
            </div>
          ) : (
            <div className="main-overview">
              <div className="overview-card no-padding">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Product Info</th>
                        <th scope="col">Quantity /MT</th>
                        <th scope="col">Shipping Terms</th>
                        <th scope="col">Payment Terms</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiryData.map((inquiries, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  className="table-product-img"
                                  src={ProductImgTable}
                                  alt="..."
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <p>{Capitalize(inquiries.productName)}</p>
                                <p className="table-order-no">
                                  Order No: 0123456543
                                </p>
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
