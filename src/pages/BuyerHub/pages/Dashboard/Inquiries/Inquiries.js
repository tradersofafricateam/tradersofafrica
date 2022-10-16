import React from 'react'
import { Iconly } from 'react-iconly'
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

import TrackImg from "../../../../../assets/img/track-illus.png";
import OrdersImg from "../../../../../assets/img/orders-illus.png";
import ProductImgTable from "../../../../../assets/img/products/p-img1.png";

import "../Dashboard.css";

const Inquiries = () => {
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

            <form>
              <div className="custom__search">
                <Iconly name='Search' set='light' primaryColor='#5C5C5C' size='medium' />
                <input type="text" className="form-control custom-style" id="" placeholder="Search for orders, inquiries and more"/>
              </div>
            </form>
            
            <div className="notify-wrap position-relative">
              <Iconly name='Notification' set='bulk' primaryColor='#282828' size='medium' />
              <span className="icon-notification position-absolute"></span>
            </div>

          </div>
        </header>

       <Sidebar/>

        <main className="main">

          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>All Inquiries</h2>
                <div class="d-flex justify-content-between mt-4">
                  <h3>125</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Pending Inquiries</h2>
                <div class="d-flex justify-content-between mt-4">
                  <h3>25</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Received Quotes</h2>
                <div class="d-flex justify-content-between mt-4">
                  <h3>100</h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">All Inquiries</h1>
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
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img className="table-product-img" src={ProductImgTable} alt="..."/>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p className="table-order-no">Order No: 0123456543</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>FOB</td>
                      <td>Letter of Credit</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img className="table-product-img" src={ProductImgTable} alt="..."/>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p className="table-order-no">Order No: 0123456543</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>CIF</td>
                      <td>Letter of Credit</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img className="table-product-img" src={ProductImgTable} alt="..."/>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p className="table-order-no">Order No: 0123456543</p>
                          </div>
                        </div>
                      </td>
                      <td>XAF 20,000,000</td>
                      <td>Local Delivery</td>
                      <td>Letter of Credit</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img className="table-product-img" src={ProductImgTable} alt="..."/>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p className="table-order-no">Order No: 0123456543</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>CFR</td>
                      <td>Letter of Credit</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  )
}

export default Inquiries