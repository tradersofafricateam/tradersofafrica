import React, { useState } from "react";

import "./Market.css";

import TopImg from "../../assets/img/intell-img2.png";
import OrangeCheck from "../../assets/img/check-orange.svg";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Partners from "../../components/Partners/Partners";
import Testimonials from "../../components/Testimonials/Testimonials";
import ProductsDropdown from "./ProductsDropdown";
// import classNames from "classnames";

const Market = () => {
  const [currentCommodity, setCurrentCommodity] = useState("cashew");

  return (
    <div>
      <Navbar />

      {/* Market Intelligence Top */}
      <section id="intel-top">
        <img className="intell-img" src={TopImg} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Backed by Technology</h2>
              <p>
                Our data are reliably informed by the large network of people
                and partners we have across the various countries in Africa.
                This data is updated regularly to provide key information about
                products made in Africa.{" "}
              </p>
              <h3>
                <img src={OrangeCheck} alt="" />
                Monitoring &amp; Real-time Reporting
              </h3>
              <h3>
                <img src={OrangeCheck} alt="" />
                Product Mapping
              </h3>
              <h3>
                <img src={OrangeCheck} alt="" />
                Seasonality Data
              </h3>
              <h3>
                <img src={OrangeCheck} alt="" />
                Updated Commodity Prices
              </h3>
              <h3>
                <img src={OrangeCheck} alt="" />
                Instant Payments across Africa
              </h3>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>

      {/* Commodity Insight */}
      <section id="comm-data">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="commodity-wrap" id="area-dropdown">
                <h2>Commodity Insight</h2>
                <p>Select Commodity</p><br />
                <ProductsDropdown
                  handleChange={setCurrentCommodity}
                  value={currentCommodity}
                />
              </div>

              <div className="commodity-info">
                {currentCommodity === "cashew" && (
                  <div className="info-wrap-1 hide">
                    <h2>Cashew nuts</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                  </div>
                )}

                {currentCommodity === "sesame" && (
                  <div className="info-wrap-1 hide">
                    <h2>Sesame</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                  </div>
                )}

                {currentCommodity === "soyabeans" && (
                  <div className="info-wrap-1 hide">
                    <h2>Soya Beans</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                  </div>
                )}

                {currentCommodity === "groundnuts" && (
                  <div className="info-wrap-1 hide">
                    <h2>Groundnuts</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                  </div>
                )}

                {currentCommodity === "ginger" && (
                  <div className="info-wrap-1 hide">
                    <h2>Ginger</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{ backgroundColor: "transparent" }}
              className="col-lg-5"
              align="right"
            >
              {/* <div id="container" style="position: relative; width: 100%; height: 700px;"></div> */}
              <svg
                width="550px"
                className="img-fluid"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1137.98 1214.32"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".cls-1{fill:#ccc;stroke:#000;stroke-linecap:round;}",
                    }}
                  />
                </defs>
                <title>Grain map</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="g3248">
                      <path
                        id="Aegypten"
                        className="cls-1"
                        d="M695.53,256.77l132-3.94,4.25,4.2,8.71-1.1.9-7.35,9.66-2.67,2.05-9.06,4.24,1.4,5.34-5.57-2.89-14.26,4.62.17-11.23-10-30.81-50.9-.14-6.17a41.76,41.76,0,0,1-16-18.3l-.28-4.74-4.65-3.39,1.21-7.52L816.36,136c1.23,1.42-.16,2.45,1,4,3.61,5,9.82,10,13.49,13,1.87-.63,4.06-.18,5-4l3.6-24-16.19-33c-10.94,7.65-21.88,10.71-32.81-.68L777,92.4c-3,1.31-6.3,3.31-8.07.11l-21.56,12.6-35.72-8c-5.36-1.1-11.09-2.92-15.52-2.14-4.54,2.77-7.77.63-11-1.52-1.84,3.19-3.78,6.42-2,8.3l1.44,13c-3.16,5.09-6.08,10.32,3.91,22.32l7,119.65Z"
                      />
                      <g id="Aequatorialguinea">
                        <path
                          id="path64"
                          className="cls-1"
                          d="M470.26,610.12l-27.13,1.31-5.43-3.56,8.14-15.63,24.24-.28.18,18.16Z"
                        />
                        <path
                          id="path66"
                          className="cls-1"
                          d="M395.37,624.35a2.94,2.94,0,1,1-2.94-2.94A2.94,2.94,0,0,1,395.37,624.35Z"
                        />
                        <path
                          id="path68"
                          className="cls-1"
                          d="M406.77,601a2.34,2.34,0,1,1-2.34-2.34,2.34,2.34,0,0,1,2.34,2.34Z"
                        />
                      </g>
                      <path
                        id="Aethopien"
                        className="cls-1"
                        d="M1089.05,486.24l-48.2,55-18.84-.34c-2.32.65-11,6-16,10.41-4.11,3.62-10.43,5.73-16.91,8.67-3.84,0-8.5,1.42-11.19-.48-6.3-6.11-13.52-3.12-20.65-.89-2.36,4.34-5.58,7.82-10.94,9.16l-25.76-4a86.85,86.85,0,0,0-20.24-13.2l-14.31-1V537.94l-11.27-4.12-8.14-18.59-11.68-9.34c2.18-3.49-3.54-6.37-6.44-9.46-4,.89-7.91.08-11.87-2.05l3.48-4.18-.21-5.38,10.26.19c2.25-1.41,4.72-1.95,6.36-5.56l-.29-30.16,4.88-7.68,5.14.19,2.34-12.87c6.18-7.6,8.37-16.88,18.56-22.79l2.67-22.31,8.17-.24,1.13-2.65,4,.07,3.4,5.64,4.89-13c3.23,2.08,7.45,2.16,9.34,6.73l8.24-1.61,1.39-2.64,1.48-.32,2,3.51c2.61-1.56,5.85-3.21,10-.5,1.22.52,2.63.79,5.75-1,3.31,1.79,5.31,5.42,10,5.25,10.55,9.21,20.78,18.79,29.83,29.72-.81.77-1.18,3.68-1.78,10.27l-3.91,7c-3.15,5.17.66,9.73,6.66,7.58l5.26-2,5.28,2.16c-6.38,7.36,8.81,20.16,22.5,32.95l49.41,15.79,16.27-.29Z"
                      />
                      <path
                        id="Algerien"
                        className="cls-1"
                        d="M170,129.71l16-8,3.31,1.18,5.49-4.77,9.21.85.5-4.26c19.08.93,23-4.17,26.41-9.29l16-6.58,5.89.18L249.77,95l.81-3.23-.13-5.35c6.25-.82,13.95.18,14-6.35l25.84.36L293.88,73c-5-1.82-5.84-9-5.18-16.6.49-5.65.05-18.51.05-18.51-1.71-2.06-3.84-4-4.34-7,1.39-.61,7.87.45,11.81-4.82,2-2.72,4.62-8.21,8-7.13,3.95,1.25,11.52,2,12-.47.5-2.68,7.83-8.59,18.42-8.55C354,10,379.1,2.59,387.29,5s18.86-3.19,23.6-2.89,6.2,5.51,12.71,1.09C426,1.53,434.81,8.41,443.18,6c0,0-5,2.21-5.28,7.34-.43,7.91-1.16,32.5-1.16,32.5-.84-1.33-6.78-.33-7.72,3.68-1.27,5.45-7.41,4-7.9,6.8-1,5.55,3.86,10.64,9.56,15.61,1.47,1.28-.53,8.34.91,9.64,4.42,3.93,12.24,6.62,12.24,6.62a225.5,225.5,0,0,0,5,30.55c-8.28.55-3.86,8.24,1.72,16.45l.35,47s-7.48,1.51-7,3.44c1.16,4.33,1.44,7.53,6.9,12.4,3.51,3.12,3.58,8.39,3.27,11.85-.35,4,3.68,5.81,4.74,5.78,8.21-.2,15.14-4.19,22.92,17.25l-98.33,64.61c-14.59,6.29-38.63,10.05-39.45,9.68-5.49-2.41.87-8.44-1-12.48s-4.06-7.08-10.31-6.41c-3.32.36-5.07-3.91-6.38-3.69-5.32.88-6.68-5.17-7.86-6.24-4.66-4.27-9.29-5.51-8.23-9.39L166.57,159.44,170,129.71Z"
                      />
                      <g id="Angola">
                        <path
                          id="path73"
                          className="cls-1"
                          d="M478.17,919.61c3.59-1,7.48-5.72,10.7-1.89,3.2-4,12.08-11.79,26.44,2.87l72.15-1,7.73,6.73,45.47,5.89,28.77-6.48L650,908.4l1.48-61.46,34.7,1-3.77-4,4.08-32.5c-.46.12-1-.12-1.45,0-8.37,3-17.26,2.35-26.23,2.53l-3.12,6.11L650,815.34l6.34-8.45-8.56-17.35-1.31-38.93-14.82,1v-7l-6.58-1-1.73,3.13-12.11-.62-4.59,17.62c-6-1.08-11.56-2.56-20.56,2-8-2.56-15.15,3.4-26.41-36.53l-4.26-2.55L509.83,726l-20.74,7.12c5.19,14.94,16.16,23.42,15.79,45.52L501.32,782c2.94,10,5.57,20.41,12.12,25.18.65,2.79-.77,4.82-1,6.92-.67,7.68-4.71,29.44-6.48,25.56,0,0-7.31,1.6-8,7.48-.32,2.87-3.86,3.28-5.18,6.81-3.67,9.88-7.55,25.55-10.34,39.79-.32,1.65-2.48.93-2.74,2.5-.77,4.54.09,7.76-.2,12.58-.09,1.43-1.91-1-2.27.8-.43,2.2,1.34,8.44.85,10Z"
                        />
                        <path
                          id="path75"
                          className="cls-1"
                          d="M483.37,713.8l8-4.87c3.37-7.91,6.12-5.62,8.8-2.06-3.42,3.09-7,6.07-7.31,11.56.81,7.61-2.72,7-5.23,8.28-1.11-2.07-2.7-4-2.15-6.44-.06-2.26,0-4.55-2.15-6.47Z"
                        />
                      </g>
                      <path
                        id="Benin"
                        className="cls-1"
                        d="M328.4,521.21l-15.31,2-7.9-62c-1-4.72-5.71-6.82-9.29-9.71l1.9-10.13,9.92-7.81,10.34.42,7.6-12.24,17.1,2.74.1,13.56c4.85,5.21,4,12.21.32,14.4.33,6.52-.86,11.94-5.2,11.79-2.63,7.06-4.87,15.54-8.61,18.5l-1,38.43Z"
                      />
                      <path
                        id="Botsuana"
                        className="cls-1"
                        d="M699,927.18l-10.63,6c-10.49.06-11.14,6.23-15.07,9.55l-3-8.31-39.73,3.48-2.26,61.54L612.11,999l-1.1,44.42c4.44,5.45,10.45,11.39,13.46,15.37s1.06,11.43-1.79,18.48a34.79,34.79,0,0,0,23.09,1.53c1.12-3,2.67-5.15,4.71-6.31,3.29-1.88,6-4.29,7-8.22l9.9-8.26c6.1.53,10.8,3,15.56,6.44,10.09.14,16.09-1.69,20.28-3.82l1.95-9.3,58.1-46.43c-7.32-5.31-11-4.1-15.14-5.08s-9.4-8.46-8-21.31c-4-.8-6.61-3-8.82-5.65-2.53-4.24-5.83-3.83-8.77-5.61C718,959,709.61,950.82,709,945.93c-.31-2.37-1.56-2.25-3.34-4.89-2-3-4.75-10.12-6.6-13.86Z"
                      />
                      <path
                        id="Burundi"
                        className="cls-1"
                        d="M772.69,673.56l2.44-2.29,2.94.15,1.47,4.12,8.25-1.62.44-5.15,10.32-.59c-3.41,5.92,1.67,9.16,3.83,12.15-6.91,16.14-12.79,21.81-18.13,22.07-7.08,0-6.15,2.62-6.92,4.89a131,131,0,0,1,.32-19.74c.55-7.19-1.84-12.48-5-14Z"
                      />
                      <path
                        id="Burkina_Faso"
                        data-name="Burkina Faso"
                        className="cls-1"
                        d="M238.75,466.59c-3.18-.43-4.3-4.71-6.91-7.18-5.13-4.86-14.82-1.25-22.55,3.52-9.42-4.7-10.7-8.94-12.43-12.85,1.88-5.08.6-11.75,3.16-17.15,2.28-4.83,6.25-9.29,13.21-13.12l8.5-17.82c7.29-2.41,13.92-3.33,19.63-5.34,5.49-1.94,10.44-5.11,13.45-9.15,10.89-6.72,24.4-15.34,32.74-13.21-.11,2.74-.12,5.46,1.56,7.84,2.83,1.92,2.23,5.1,1.65,8.28L307.58,413l6.41,2.13c.94-1.06,5.51-6.71,7.76,5.74l3.82.81-7.36,12.42-10.43-.56-10,7.84-15.11-1.8c-8.68-.15-9.48,1.54-13.18,2.56l-33.53-1,2.82,25.39Z"
                      />
                      <path
                        id="Demokratische_Republik_Kongo"
                        data-name="Demokratische Republik Kongo"
                        className={`cls-1 ${
                          currentCommodity === "cashew" && "selected"
                        }`}
                        // className={classNames(
                        //   "cls-1",
                        //   currentCommodity === "cashew" && "selected"
                        // )}
                        d="M597.05,568c-2.92,8.72-6.41,14.9-10,24.39-4.78,12.44-3.72,31.61-6.16,48.58-12.63,5.72-16.63,14.91-23.1,23.1l-5,24.13c-9.12,8.93-17.61,20.39-28.6,21.85-.67-13.46-12.33-7-13.61-1.69-5.55,3.67-7.36-.14-10.5-1.3-4,2.88-6.92,6.32-7,11.2.57,7.78-3,7.36-5.53,8.9l1.5,5.93L509.84,726l45.58.82,4.23,2.47c10.36,38.42,18.77,34.63,26.2,36.5,11.58-4.84,14.68-2.15,20.83-2.18l4.48-17.47,12.17.69,1.55-3.19,6.76,1,.1,7.06,14.67-1.07,1.53,38.68,8.36,17.41-6.38,8.65,5.82,4.92,3.1-6.22,19.24-.34,7-2.34,6-.11,2.19,8.6,11.22-3.71a11.26,11.26,0,0,0,3.19,5.86c3.64,3.4,10.44,8.08,16.51,8.18,4.28.06,7.72-4.33,11.46-3.54,5.11,7.08,11.16,9.13,17.5,9.66,4.71,7.31,7.88,16.16,21.27,14.78l5.25,3.65-.37-18.7c-9.31,3-14.95-1.34-19.76-7.34,1-7.38,3.94-14.08,7.33-20.65a77.88,77.88,0,0,0-2.58-22.17c-.41-1.67,1.76-7.87,4.53-11.5L799,767c-3.13-16.9-14.11-20.34-17.27-32.3a135.32,135.32,0,0,1-3.68-49.35c-.57-8-4.25-12.27-9.55-14.53l9-12.89,7.29-8,1.13-28,10.23-15.52,16.45-14.81-9.92-6.45.05-17.68L782.17,550c-1.83.18-2.68,2-4,3.08-4.14,1.29-8-.71-11.91-1.25-2.13,4.77-10.91,2.27-11.94-.45-.31-.8.38-2.39-.82-2.84a46.48,46.48,0,0,0-7.84-8.06l-8.56.41-2.79,3.21-3.15-2.61-2,3.06-4.1-5.35-18.48,1.6v3l-8.22,1.51-1.3-3.16-21,7.43c-5.86-4.26-8-1.94-11.46-2.09l-3.69,8c-17.41-.65-24.68-.66-27.55-4.54-5.51,6.07-6.86-1.41-10.23-2.28-1.91-8.87-7-6.24-10.47-9.24a46.78,46.78,0,0,0-13.08,13.09A40.79,40.79,0,0,1,597.05,568Z"
                      />
                      <path
                        id="Dschibuti"
                        className="cls-1"
                        d="M998.9,405.59l-9.84,7.34c-1.71,5-.77,8.95-2.16,11.31-5.65,9.55-4.94,10.29-3.18,12.41,2.36,2.85,8.58.81,11.8-1.09l5.15,2.2,5.73-8.67c-3.53-3-7.06-1.44-10.58-1.61,1-4.32,5.81-5.31,9.25-7.5a11.62,11.62,0,0,0-6.17-14.39Z"
                      />
                      <path
                        id="Elfenbeinkueste"
                        className="cls-1"
                        d="M153.83,553.27l6.39.6,50.85-14.39,18.24,2L232,530.72c-.56-8.65-7.9-17.49,2-25.83.93-6.31.41-13.17,7.21-17.19l-2.32-21.27c-2.8.06-4-2.84-5.43-5.35-3.26-5.6-14.18-4.94-24.27,1.95-4.8-3.4-10.4-5.74-12.28-13-6.74-2.48-12-1.13-16.33,2.56l.79-7.27c-1.06-2.77-4.85-2-9.32-.31-1.12.13-.33,1.9.93,4.07a27.67,27.67,0,0,1-4.91,1,9,9,0,0,1-4.6,3.27c-4.57-8-7.22-6.51-12.66-2.1-1.86,1.51-3.08,5.15-3.84,8.34-.85,3.59.68,7.06,4.6,6.55L151.2,471c2.79,1.25,2.19,1.75-.41,4.48-1.18,1.24,3.29,6.9,2.76,8.24L145,482c-.23,1.36-.53,3.3-.66,4.8l4,1.73-3.15,8.4c.41.65-3.82.23-4.86.37l.07,5.26c4.38,1.18,2,11.46-2.13,13.13l6,3.79c1.33-1,5.05-.13,7.48,6.47,0,0,6,3.79,5.88,8.55-.1,3.78-2.65,4.38-3.34,7.31l-.51,11.49Z"
                      />
                      <path
                        id="Eritrea"
                        className="cls-1"
                        d="M911.49,373.71c3.07,2.1,6.14,1.83,9.21,6.64l8.16-1.63,1.59-2.56,1.35-.36,1.81,3.37c4.12-2.19,7.83-2.28,10.45-.21,1.59,1.26,3.94-.49,5.65-1.13,3.18,2.58,6.34,5.41,9.79,5.31a251.94,251.94,0,0,1,29.85,29.64l9.7-6.75c-1.4-3.71-3.25-7.1-9.82-7.26-.33-3-1.59-5.62-5.77-7.22-.89-3.58-4-3.51-6.39-4.53-2-5.69-7-8.81-11.11-12.7-4.61,1.08-6.74-2-8.92-4.94l-3.51-.68L951,370.24c-2.62-2.16-3.33-5.13-4.07-8.1l-3.75-1,.95,5.21c-2.27,1.39-3.51-2.37-4.7-6.41l-7.65-11.11c-5-23.24-9.34-26.09-13.8-32.44-1.23,2.89-1.44,6.41-3.46,8l-11.26,5.86c-1.81,3.16-4.63,4.09-7.62,4.06-4.22,20.12-6.44,33.11-6.24,49.44h8.67l.84-2.81,4,.22,3.3,5.23,5.25-12.65Z"
                      />
                      <path
                        id="Gabun"
                        className="cls-1"
                        d="M466.72,692.08l-30.11-31.15-7.18-18.34,6.62-6.35,1.85-10.32,8.47,1.85c.49-.51,1.25-.88.8-1.85l-7.35-3.77,2.32-10.53,28.19-1.44.13-18.14h34.93l-2.71,3.81-.31,11.84c3.15,1.2,5.26-1.4,7.3-5.14,5.37-.84,15.23,4,12.55,13.27-4.47,5-6.51,9.72-4.91,14a60,60,0,0,1,3.49,10.88l-2.7,24.65-5.62,4.06c-2.53-4.17-7.19-5.67-13.7-4.85-2-2.51-4-5.72-7.77-.66l-14.58,9,1.27,12-11,7.16Z"
                      />
                      <path
                        id="Gambia"
                        className="cls-1"
                        d="M10.54,388.11H28.89c4-5.29,9.79-3.55,16.43,1.22l10.6.78,2.34,3-7.68,2.67A45.27,45.27,0,0,1,36.23,390a17.59,17.59,0,0,1-11,2.5l-2,3.34-15.94.66Z"
                      />
                      <path
                        id="Ghana"
                        className={`cls-1 ${
                          currentCommodity === "cashew" && "selected"
                        }`}
                        d="M301,526.57c-1.6,2.13-1.8,6.6-6.23,4-22,2.67-30.69,12-46,18l-19.41-7.1,2.64-10.81c-.55-8.64-7.89-17.49,2-25.83.92-6.3.41-13.16,7.2-17.19L236,441.13l33.5,1c4.46-2.36,9.21-2.71,14-2.7-2.63,5.26-1.23,10.27,5.14,15,5.15,21,4.51,41.18,6.13,61.67L301,526.57Z"
                      />
                      <path
                        id="Guinea"
                        className="cls-1"
                        d="M32.69,436.47c-.57,1.8-.43,2.69,1.91,2.7.94,1.13,4.27-6.86,3.76,1.2l3,.32c-1,4.48,2.05,10,5,11,3.74,1.28,5.81,5.62,7.87,7.53l5.09,9.35c3.5,2.39,8.32.66,15.85-9.5-.82-3.39,3.86-5.19,17.84-4.31,11.45,8.25,14.88,17.87,10.61,28.82,5.12-1.24,8-4.73,16.53-2.55,4.25,5.37,6.89,11.29,3.35,19.32,4.71,1.76,6.41,6.94,13-1.78-.45-2,1.17-2.72,3.24-1.18,1.26.93,3.35-.48,5.33,0l3.47-9-4.26-1.73L145,482l8.72,1.77c-.67-3.21-5-7.39-1.79-9.58,1.44-1.49.77-2.65-.69-3.68l.18-4.11c-8.45-1-3.63-10.36-.71-15.1l-5.18-4.71-.6-10.35-4.27,3.14L139.09,437l5.7-5.22-7.7-5.85c1.27-4.1-.44-9-1.84-14.12l-5.42-1.18c.08,2.33-.73,4.1-3.11,4.87q-3-.92-3.74,3.89l-9.61-4-7.63,5.53c1-2.48-1.51-3.95-3.06-5.8L98.47,418c-3.29,1.11-3.7-.66-3.66-2.88.67-.72,1.52-1.27,1.78-2.41-11.87-1.84-24.3-1.1-35.15-7.63L58,405l-1.48,18.41-9.26.24c-9.06,3.3-13.51,11.73-14.61,12.81Z"
                      />
                      <path
                        id="Guinea-Bissau"
                        className="cls-1"
                        d="M6.46,409.62l1.12,3.08c2.33,1.6,6.71-1.55,6.45,6,2.11,1.11,4.73-1.12,6.25,4,2.59,1.31,9.17-10.91,6.79,7.32l5.83,6.4c3.46-5.4,8.67-10.81,14.05-12.74l9.53-.23,1.6-18.36L33.49,405c-5,2.43-10.13,3.76-15.58,2.61a36,36,0,0,1-11.45,2Z"
                      />
                      <path
                        id="Kamerun"
                        className="cls-1"
                        d="M552,600.94c-4.48-2-9.84-6.43-13-4.67l-11.28-4L505.13,592H469.66l-24.15.26L448,573.78l-6.35-8.21,2.38-2.91-1.59-2.38-4.23,1.32c-5.23-.65-7.11-4.35-8.33-8.64-2.83-1.06-6.78-.68-6.76-5.39,5.94-10.28,7.23-24.32,18.83-30l.4-4.53,16.56-.78c6.19,4,4.21,8.53,14.71,7.2,7.28-13.13,12.55-37.24,22-38.28C501.33,467,503,447,512.8,438.8c4.82-1.72,8.92-3.76,10.7-6.86,1-1.81,1.29-7.66.42-10.33-.62-1.93-1.81-.43-3.71-2.93l-2.84-10.84,2.3-1.86,8.75,7.41c1.24,6.06,4.26,11.69,3.68,18.21-.64,9.49-4.55,10.84,4.91,21.67a13,13,0,0,1,1.63,8.45L521,460c-2,4.81-6.33,15.74,11,19.6l8.2,24.61L525,529.58l2.13,18.54C533.55,560,541,572.37,551.44,582l.56,19Z"
                      />
                      <path
                        id="Kenia"
                        className="cls-1"
                        d="M984.62,656.27c-2.2,3.43-4.6,6.6-9.44,6.74-1.79,4.77-4.12,9.12-10.1,10.58-6.59,11.9-11.59,25.57-19.82,35.62l-23-15.42-3.62-13.41-70.11-44,23.08-35.28.49-19.77-7.93-6.53c-1-7.63-2.77-14.52-9-17.3l8.16-7.13,22.81-1,14.19,1.21c4.87,2.51,7.45,2.6,20.32,13.33l25.84,3.89a17.14,17.14,0,0,0,10.83-9.27c6.24-.9,12.86-6.3,21,1.4,2.66.94,6.9.54,11.1-.07-4.82,7.7-9.88,13.92-14.92,20.34l.43,64.11,9.79,12Z"
                      />
                      <path
                        id="Libyen"
                        className="cls-1"
                        d="M479.47,70.72s2.5,9.68-5,15c-3.76,2.67-16,11.68-16,11.68,1,5.5,2.32,19.26-9.61,21.13-8.2,1.29-3.9,7.92,1.58,16.91l.35,46.82s-7.3,1.43-6.78,3.36c1.16,4.33,1.25,7.43,6.71,12.3,3.51,3.12,3.58,8.76,3.28,12.22-.35,4,4.14,5.72,5.19,5.69,8.21-.2,14.69-4.1,22.46,17.34l38.57,1.19c4.49.95,9.25,7.83,9.25,7.83l22.09-6.27,130,64.3-.23-10.45c14.38,1.17,16-.48,16-.48L688.5,137.34c-5.22-7.17-10.37-14.19-4.09-22.14,0,0,0-8.43-1.53-13.21-1.64-5,2.85-8.37,2.85-8.37-.07-6.44-12.43-6-18.94-6.28-8.54-.44-14.27-1.61-12.79-8,0,0-22.31-8-31-2.73-4.59,2.81-14.26,7.3-16,13.05-1.19,3.86-.13,6.48,2.18,10.41,4,6.87-9.59,30.47-25.16,11.58,0,0-20.45-5.63-32-8.15-11.3-2.47-19.1-12.39-14.41-18.39.46-.58-30.69-9.59-30.69-9.59-14.38,2.22-24.91-2-27.47-4.79Z"
                      />
                      <path
                        id="Liberia"
                        className="cls-1"
                        d="M153.74,553.22l-14.32-5L89,506.84l16-13.37-.28-4.78,7.82-7.56c2.33-1.57,5.16-.48,7.84-.18,6.73,9.79,4.92,14.4,3.09,19.36,3.81,1,6.69,7.32,13-1.74-.18-2.52,1.36-2.55,4-1v4.81c2.06.86,3.56,4.95,1.57,8.69-1.06,2-1.79,4-4.06,4.42l6.6,4c1.87-.32,3.48-1.71,7.43,6.61.84,1.17,10.69,5.3,2.52,15.1l-.69,12Z"
                      />
                      <path
                        id="Madagaskar"
                        className="cls-1"
                        d="M1039,1070.64l48-102.14c3.67-11.53,5.84-23,11.26-34.58,3.68-4.86,8.34-9.36,5.4-16.58l1-9.91c.53-3,2.18-2.93,4.69-.52l1.47,6c1.78-.56,3.53-1.17,3.39-4.14l-4.86-52.94-9.18-9.94-5.3,4.39-1.38,13.59-3.07,2.7c-1.61-.49-4-2.92-3.27,2.58l-4.55,5c-5.17-9.61-5.94-1.09-4.54,3.06-.13,1.81.37,4.91-2.08,2.09l-3.71,6,5.27,3.92h-3.13l-6.78,4.91,1-6-6.78,6.78,1.56,8.34-4.57.19.9-3.74c-4.23-2.78-7.66,3.1-11.45,5.12l4.17,6.77-5.21.52-2.09-6.25-8.4,1.38c.26,3-3.14,3.82-6.2,4.87l-.52-4.17-4.69,4.7-8.19.4-1.59,7.05-11.07,16c8.45,7.43,5,24.2,7.3,36.5-3.12,9.92-9.16,17.49-14.6,25.55-6.33,4.18-9.19,8.35-10.15,12.53-.92,4-2.86,11.89-1.69,15.9,1.37,4.67,4,3.08,4.07,7.76l1.54,7.67c-7.74,29.79,11.52,29.35,15.67,36.62,1.89-.86,4.28.6,6.13-.39,4.09-2.21,9.32-7.66,14.79-5.85,4.58,1.52,8-.22,11.35-1.76Z"
                      />
                      <path
                        id="Mali"
                        className="cls-1"
                        d="M217.91,198.33l-25.48.68,1.2,147.05,6.72,2.38-4.71,14.37-75.1-4.24-8.65,6.05-4.72-1.74-3.27-9.71L99.6,352c-8.45,18.49-9.75,16.34-12.89,19.51.51,1.89-.72,3.69-.11,5.42,1.9,5.42,3.09,10.92.23,13.26,3.91,3.49,9,6.26,10.41,11.28.28,6.4-.07,11.34-1.79,13.07s.32,5.7,3.87,2.72l3.45-2.1c1.13,1.81,3.63,2.79,3.27,5.5l7.6-5.2,9.29,3.86c.94-1.42-.24-3.56,3.37-4.09,1.9.05,3.23-1.3,3.79-4.6l5.1,1.24c1.37,4.8,3,9.65,2.16,14.13l7.53,5.68L139.13,437l1.59,2.4,4.19-2.79.62,10.06,5.3,4.86c2.17-2.15,5.63-4.87,8.26-3.51,2.47,1.29,3.62,6.31,5.95,4.74s2.9-3.17,6.67-3.17c2.85,0-2.44-4.91,1.11-4.81,1.64.05,4.21-1.89,7.06-1.14s-.66,10.87,1.33,8.69c5-5.4,14.84-3.31,15.79-2.1,2.76-9.9-2.64-19,16.33-30.46l8.37-17.63c11.16-4.68,23.14-2.55,33.4-14.73,12.89-8.62,25.79-15.1,32.75-13.16h13l7.32-6.24,35,.43c.89-1.72,1.38-3,6.22-5.36,0-4.23,3.83-4.46,6.46-5.79l1.38-51.91-13.15,1.89c-5.2-3.37-.83-4.45-.78-12-3-6.67-6.73-7.67-10.42-7-3.25.58-4.71-4-6.42-3.68-2.93.6-6.15-2.22-8.09-6.37-.66-1.4-2.48-2.05-3.71-2.89-2.73-1.88-5.23-3.32-4.52-6.25,0,0-62.55-47.77-92.28-70.75Z"
                      />
                      <path
                        id="Malawi"
                        className="cls-1"
                        d="M851.81,793.88l10,32.83-2.94,29.14c5.91,5.33,11.79,9.65,20.09,23.49a18.58,18.58,0,0,1,1.76,9.56l-3.61,15.41-9,3.92.69,13.48-4.78.08c2.46-6.33.1-5.15-1-5.53-6.54-4.13-9-10.21-10.19-15.66,5.35-8.23,5-14.84,4.42-21.2l-8.85-1.64c-6.83,1.67-8.15-.84-8.81-3.11-3.71-8.69-5.41-5.34-6.77-5.93l-5.28-7.26,9.26-17.16,7.22-.81-4.92-6.4,4.3-22.31,4.1-3-11.83-23.38c3.44,3,7.24,4,16.15,5.5Z"
                      />
                      <path
                        id="Marokko"
                        className="cls-1"
                        d="M168,149.61l2.57-19.75,15.48-8,3.49,1,5.49-4.49,9.13.66.5-4.35c19.08.93,22.94-4.17,26.31-9.29l16-6.49h6l-3-4,1-3.69-.5-4.8c6.25-.81,14,.19,14-6.35l25.94.36,3.49-8c-5-1.82-5.84-9-5.18-16.6.5-5.65.05-18.5.05-18.5-1.71-2.07-3.84-4-4.33-7-4.16-.77-9.27-.86-11-3.36A65.74,65.74,0,0,0,256,26c-9.88,1-14-2.57-18-11.94-9.52-.62-19.61,19.84-26.95,30-17.76,4.94-30.61,13-39.44,23.46,1.18,4.28-.89,5.93-5.2,8.75-2.79,1.83-12.58,17.47-9.27,26.2,0,6.82-5.28,18.19-20.56,25.75a53.85,53.85,0,0,1-18.4,10.34c-4.75,1.55-15.77,2.79-19.11,5.86l69,5.25Z"
                      />
                      <path
                        id="Mauretanien"
                        className="cls-1"
                        d="M85.55,254.8c2-14.7-7.09-35.36,21.46-35.94l6-44.43,50.92,4.49,2.75-20L218,198.36l-25.56.62,1.29,147.16,6.47,2.3-4.36,14.3-75.33-4.15-8.59,6.07-4.63-1.52-3.28-10L99.45,352s-8.32,20.51-13.61,18.44c0,0-2.35-2.55-5-5.31-2.35-2.42-4.91-4.82-6.72-8.24-2.52-4.75-4.26-12.39-7.74-11.84-7.39,1.16-13-8.65-13-8.65s-8.62-2.39-14.79-.67c-8,2.22-17-.08-18.6,1l7.32-20.35L28,292.65l-4.46-7.13c2.38-4.21,9.67-8.1,4.91-20.73-.55-1.44-3.14-.66-3.14-.66l-3.08-9.28L26,251.06l59.51,3.74Z"
                      />
                      <path
                        id="Mosambik"
                        className="cls-1"
                        d="M782.31,885.16l3.53,9.24-.27,4.62,12.23.92,28.65,11.15c2.94,16,1.06,29.4-3.59,41.28-.13,2.32-.9,4.54-.62,6.67.53,4,2.5,9.5.26,14.09-5.75,11.79-11.13,23.61-12.52,24.37-4.75,2.63-10.66,10.32-10.82,16.48l2.86,70.74,10.83.7,2.89-10-4.35,1.63c.67-4-.25-7.92,3.91-11.88l34.77-13.74c4.3-3.16,7-8,10-12.42l-4.06-1.41,7.2-27.16-3.7-1.26-3-22.87c-9.85-6-4.15-15.42-.18-17.62l21-17.85,1.73,3.56,7.79-8.61-1.72-2.66,5.07-.93,1.5-4.36,25.75-12.67,6.43.07c4.88-3.69,8.8-7.66,15.91-10.72l-.46-3.81,8.58-6.64c2.06-2.11,3.83-5.24,6.52-5.13l.38-4.26-1.64-1.81,4.7-7,1.19-4.7-.75-3.07-2.88-4.37,1-17.22c-2.2-2.13-1-3.58.19-5l-.57-19,6.9-11.63c.18-3.18.44-6.37-.72-9.56-10.6,6.31-28.32,17.28-37.27,11.65-3.93.48-8.33.47-12.13,5.41-3.22-.3-6.14-.91-10-.58L890.16,830c-2.3-2.75-4.61-5.48-9.95-2.49l-18.49-.61-2.89,28.92C868,863.16,876,872.6,880,882.28c2.44,5.89-2,14.38-2.83,21.9l-9.18,4,.48,12.88-4.52.69c1.1-2.69,2.32-5.44-1.63-5.77-5-4.24-8.81-9-9.34-15.3a31.67,31.67,0,0,0,4.35-21.2l-8.9-1.63c-3.46.84-7.48.77-8.38-2-2.4-7.33-4.73-7.72-7.45-7l-50.28,16.31Z"
                      />
                      <path
                        id="Namibia"
                        className="cls-1"
                        d="M478.23,919.61c.71,9.32,1.58,18.58,10.13,25.16l35.29,62.85.9,28.85,6.3,13.35c.35,5.19-1.56,10.39,1.63,15.59l4.39,24.55L556,1111.31c11.91-12.79,16.25-2.46,19.23,5.73,7.29-.69,14.58-1.36,21.86-.1,3.42-3.08,6.91-6.14,12.28-8.44L612.21,999l16.21.52,2.32-61.69,39.58-3.49,3,8.27c2.85-3.13,6.75-8.89,12.57-9.15,5.26-.24,7.84-3.65,13-6.41l-3.8-5.51-25.48,4.24-28.45,6.62-46.05-6.15-7.71-6.48-72.52.84c-3.46-4.59-16.58-15-26.06-2.72-3.21-3.83-7.08,1-10.65,1.77Z"
                      />
                      <path
                        id="Niger"
                        className="cls-1"
                        d="M357.25,305.5l-1.43,51.95c-2.3,1.33-5.49,0-6.37,5.57-2.55,1.48-5.7,2.52-6.26,5.49l-35.11-.34-7.14,6-13.28.07c-.38,2.86-.31,6.44,1.95,8.21,2,1.57,1.71,4.88,1.2,7.79l16.8,22.41,6.09,2.28c3.38-3,6.46-3.84,8,6.12l20.8,3c1.45-3.33,1.1-7.94,4.87-9.61,5.66-3.2,4.74-8.79,6.75-13.32,4.62-2.2,1.67-5.33,26.08-5.11,6.32,4,12.41,5.3,19.06,13.28l4.89.2c.14-1.67,5.08-5.11,8.1-5.69,3.27-1.78,9.09,1.32,16.84,8.13l13.8,1.23,13.26-9.51,23.18-.59c3.5,1.36,6.09,4.49,11.25,3.2,3.7-4.18,10.79-8.16,18.94-11.59-1.27-3.69-2.69-7.29-1.51-12,2-1.67,4.43-1.94,4.67-8.15l28-31.07,5.2-49.56,4-10c-8-3.27-13.49-6.38-15.24-17.43-1-6,.4-13.79-.19-25l-5,.85c-2.73-3.22-5.39-6.67-8.89-7.86L481.25,233l-99.49,65.59-24.51,7Z"
                      />
                      <path
                        id="Nigeria"
                        className={`cls-1 ${
                          currentCommodity === "groundnuts" && "selected"
                        }`}
                        d="M423.05,547.76l-3.37-.16-1.1,5.89a46.43,46.43,0,0,1-17.3-2.57c-13.77,8.57-24.69,7.17-30.31-12.62-4.28-11-11.21-14.63-18.55-17.07l-24,.14,1.05-38.25c3.81-4.84,6.17-11.6,8.31-18.66,6.41-1.58,5-7.21,5.33-12,6.41-4.25,2.21-10.9-.43-15.36l.42-12.45c.54-3.52-.26-7.34,4.8-10.58,2-2.42,3.94-1.24,5.91-13.09,3.51-2.7,7.22-5.35,26.13-4.75,6.62,3.46,15,6.26,19.62,13.38l4.26-.2c2.75-1.93,3.59-5.35,8.59-5.53,2.85-.06,3-2.8,16.53,7.8L443.06,413l13.08-9.43,23.45-.46c3.42,1.43,6.23,4.55,10.66,3.19,5.87-5.84,13-8.85,19.66-11.67a47.3,47.3,0,0,0,9.73,11.14l-2.23,1.78,2.82,11.35c1.31,1,3.7,1.33,3.76,3.08,2.52,11.12-3.72,14.57-11.1,17-9.39,7.31-11.75,27.37-17.15,41.92-10.49,3.1-14,22.51-22,38.47-7.74,1.51-9.7-2.26-14.56-7.5L442.3,513l-.44,4.51c-10.77,5.63-13.25,18.38-18.81,30.25Z"
                      />
                      <path
                        id="Republik_Kongo"
                        data-name="Republik Kongo"
                        className="cls-1"
                        d="M483.42,713.78l-16.8-21.7,11.25-7.14-1.33-12.18,13.77-8.34c2.35-1.84,4.11-6.32,8.33.27,7.31-.87,11.57,1,13.9,4.63l5.82-4,2.38-24.22c-.11-8.34-9.45-13.79,1.72-25.67,1.88-7.81-5.1-13.16-12.83-12.84-1.89,2.42-2.6,6.31-7.26,5.27l.24-11.62,2.78-4.23,22.5.26,10.87,3.87c4-2.07,9.48,4.08,13.25,4.71l-.57-18.63c8.53-10.87,14.81-14.11,21.84-15.75L584,571.39l13.23-3.7c-3.25,8.69-6.79,15.83-10.08,24.36-5.64,14.62-3.76,32.44-6.33,48.82-12.22,5.36-16.65,14.76-23,23.16l-5.27,24.25C541,700.61,530.87,710.48,524.32,710c-.05-6.93-7.57-13.08-13.71-1.69-4.28,2.84-7.36,1.37-10.64-1.75-4.76-6.29-6.33-1-8.47,2.24l-8.08,5Z"
                      />
                      <path
                        id="Ruanda"
                        className="cls-1"
                        d="M796.26,646l-7.36,5.89h-2.51l-1.47-2.06c-6.53,6.52-11.41,13.86-16.42,21.14a7.09,7.09,0,0,1,4.27,2.72l2.43-2.28,2.8.22,1.4,3.76,8.47-1.7.36-5.08,10.54-.59A37.9,37.9,0,0,1,804,661.7Z"
                      />
                      <path
                        id="Sambia"
                        className="cls-1"
                        d="M799.09,767.06l-30.45,7.51c-2,3.62-3.38,5.71-4.15,9.81-.19,1.06.72,3.25,1,6.23.64,5.92,2.64,16.3.83,19.1-4.26,6.56-7.13,18.68-6.89,19,2.43,3.48,7.36,7,10.26,7.8,4,1.05,8.5.55,9.47-.95l.48,19.22c-1.56-1.29-3.8-2.19-4.9-3.6-6.39-.54-12.15,2.88-21.55-14.89-6.17-.53-12.27-2.33-17.55-9.68-2.56-.67-6.82,2.83-10.67,3.7-11-1.06-14.18-6.28-17-7.88a10.63,10.63,0,0,1-3.48-6.24L693.22,820l-2-8.76-4.68.15-4,32.82,3.7,3.74L651.62,847,650,908.54l19.25,17,26.09-4.09,3.81,5.73,1.66,3.86,20.41.22,2.79,2.45,3.81-1c11-14.39,21-18.07,31.17-22.86l.42-9.56c8-4.95,16.62-7.73,26.6-5.82L782.22,885l50.71-15.89-5.4-7.9,9.14-17,7.07-.83-4.58-6.23,4.16-22.45,4.16-2.91-8.32-16.21-3.78-7.5-19.44-6.53c-6.62-9.4-8.17-7.63-10.23-7.08l-6.62-7.38Z"
                      />
                      <path
                        id="Senegal"
                        className="cls-1"
                        d="M20.19,336.2c-3,5.14-5,7.82-5.1,12-.2,9.53-9.72,12.57-14.48,19.51,4.43,6.46,9.25,12.8,10,20.35H29c4-5.29,9.79-3.56,16.43,1.21l10.59.79,2.34,3-7.68,2.67a44.87,44.87,0,0,1-14.34-5.83,17.62,17.62,0,0,1-11,2.5l-2,3.33-16,.67c-.94,4.34-1.82,8.67-1,13,3.85-.35,7.61.21,11.67-2,5.47,1.4,10.66.18,15.69-2.68l27.67.33c10.4,5.95,23.38,6.56,35.39,7.34.56-6.26,4.06-12.5-9.59-22,2.1-2.69,1.31-8.9-.52-13.39-1-2.53,1-3.33,0-6-1.3-.72-2.86-2.77-5-4.83a106,106,0,0,1-7.41-8.94c-2.9-8.71-6.65-12.28-6.65-12.28-8.91,1.46-14.42-8.57-14.42-8.57-7.61-2.06-11.59-.54-14.9-.37-8.65.45-10.41,1.52-18,.23Z"
                      />
                      <path
                        id="Sierra_Leone"
                        data-name="Sierra Leone"
                        className="cls-1"
                        d="M88.93,506.92,75.8,500.25c-1.46-4.06-5.51-6.28-9.64-8.44.39-5.74-3.42-7-6-9.12L59.33,469c5.76,2.24,10.86-3.57,15.87-10C74,453.9,85.38,454.42,93,454.57c7.6,6.62,15.56,13,10.66,29.06a81,81,0,0,1,9.92-3.51l-9,8.47.29,4.82L88.93,506.92Z"
                      />
                      <path
                        id="Simbabwe"
                        className="cls-1"
                        d="M700.67,931.1l5.07,10.25c1.66,1.93,3.82,3.73,3.67,6.87,4,6.76,8.88,11.56,13.39,17.2,3.45,1.08,6.51,2.64,8.61,5.42,2.12,2.56,4.53,5.14,8.79,5.8-1.79,10.42,2.88,19.4,7.78,21.27,5.8.26,11.28,1.34,15.44,5.31,11.8,1.4,13.18,3,16,4.65,9.67-3.23,14.17,2.16,19.67,5.88,1.31-7.88,6-12.29,11.21-16.44,4.14-6,8-15.5,11.91-23.4,2.94-4.89.57-10.06-.14-15.15l.78-6.49c7.14-17.9,4.95-28.59,3.79-41.19l-29-11.18L785.44,899l.41-4.13c-10.33-3.35-18.73,1.16-26.43,5.41l-.35,9.51c-23.72,10.58-25,16.33-31.51,23L724,933.89l-2.89-2.55-20.47-.24Z"
                      />
                      <path
                        id="Somalia"
                        className="cls-1"
                        d="M1006.48,428.74l-5.87,9.16c-5.71,8.23,9.94,20.81,22.82,32.83l49.76,16,16-.67-48.32,55.3-19.53-.39c-6.21,3.49-12.28,7.06-16.72,11.6-5.08,3.16-10.77,5.12-16.17,7.65-3.34,7.31-8.92,13.29-14,19.59l.15,64.17,9.79,12.31L1007,631l37.74-35.62,4.34-.52,15.81-15,.64-3c8.68-6.59,19.49-17.65,22.18-23.12,4.77-9.66,10.92-17.84,17.77-25.68l14.86-42.91a32.83,32.83,0,0,0,6.87-10.75c.75-4.5,3.44-6.09,5.51-8.62l1.69-21.49c4.82.68,2.49-8.84,2.77-14.65-1.86-1.66-3.94-4.4-.05-6.59l0-5.36c-3.5.3-7-3.7-10.45-1a27.52,27.52,0,0,1-16.58,7.48c-7.28.6-13.21,4.81-16.26,3.78-4.93,4.09-11.21,5.47-19.36,3.12-5.44,4.84-9,11.13-26.49,6.68l-11.14,8C1019.61,450.47,1015.13,436.55,1006.48,428.74Z"
                      />
                      <path
                        id="path3246"
                        className="cls-1"
                        d="M856.26,469.59h0l-7.72,2.85V460.66l-4.47-8.5-7.47-2.85-6-33.53-6.5-2.62v5.68H812.61l5.93,4.44,1,13.88-17.15,22-16.16-10.63-10.69,3.94v5.69l-9.34,3-.16-5.85-20.43-.65V462H726l-6.5.63L715,454h-13.5L687,482.47l0,.28a4.64,4.64,0,0,1,.53.16c2.1,2.93,3,6.51,12.66,5.4l5.59,5.13c-1.21,8.49,11.37,13.17,18.72,19.28l6.84,13.5c5.89,2.86,13,4.09,13.85,14,3.92,2.22,5.46,5.49,8.34,8.37,1.33,1.33.09,2.59,1.41,3.63,3.73,2.92,10.45,3.64,11.37-.57,0,0,6.23,2.36,10.72,1.82,2.79-.34,2.54-3,5.31-3.57l20,17.5,3.57-2.59c13.73,3.19,27.46,1.36,41.18-.62l16.38-14,22.66-.81.21-11.78-11.65-4-8.06-17.84-11.69-9.88c2-3.15-3.54-6.29-6.25-9.44-3.68,1-7.67.2-11.88-2l3-3.84-.06-5.53,10.72-.19c2.08-1.31,4.35-1.88,5.94-5.15Z"
                      />
                      <path
                        id="Sudan"
                        className="cls-1"
                        d="M863,232.59l-5.44,5.53-4.47-1-2.09,9-9.66,2.53-.87,7.34-8.53,1-4.07-4.25-132.09,4,1.59,33.09a79.24,79.24,0,0,1-16-.18l.25,10.53,1.53,62.59-17.91,1,.22,6.69-10.25,13,.66,9.21-3.44,1.57c-.33,5.75-1,10.8-3.41,12.37l.13,7.47,7.47-1.56c1.5,8.38,1.87,17.19,8.9,23.56l.91,5.59-3.35.47c5.65,7,12.15,13.6,15.85,21.6-6.27,19.42,2.64,16.68,8.06,19.06l0-.28L701.54,454H715l4.5,8.63L726,462h19.57v-7.37l20.43.65.16,5.85,9.34-3v-5.69l10.69-3.94,16.16,10.63,17.15-22-1-13.88-5.93-4.44H824v-5.68l6.5,2.62,6,33.53,7.47,2.85,4.47,8.5v11.78l7.72-2.85h0l-.25-20.4,5-7.47,5.1.06,2.5-12.91c6-7.42,8.4-16.94,18.09-22.28l3.06-24.4c-1.76-17.23,3.47-32.1,6-47.91,2.5-1,5.35.87,7.38-3.91l11.15-5.65c2.2-1.47,3-4.9,3.6-8.44-1.52-3.38-3.68-2.77-5.69-3.19-3.29-6.32-8.76-6.88-13.5-9.34l-6.63-40.09-5.25-5.57C888.16,243.72,871.25,241.18,863,232.59Z"
                      />
                      <path
                        id="Suedafrika"
                        className="cls-1"
                        d="M556,1111.32l26.85,54,.35,12.35c-1.36,3-3.58,3.06-6.07,2.58-1,1.42-1.95,3.25.26,4.63,3.32,5.91,5.73,13.09,10,18.15,3.48,4.16,8.64,6.33,12.74,9.92l10.66.85c2.19-1.54.2-3.64,8.15-4.42l15.61-.1c4.93-1.93-.62-6.81,15.46-5.61,2.64.33,3.79,3.23,7.93,1,7.46-1.2,14.59,1.64,21.86,2.74,2.15-1.73,1.35-4.65,13.46-2.32l1.24-4.7,14.18.22,84.12-78.17c13.34-5.53,16.29-21.69,20-37l-10.57-.7c-.1-1.28-10.13,5.89-11.41,6-5.42.61-8.55-1.15-7.77-10.65.58-7.08,8.17-12.72,10.17-14,2.68-1.75,5.35,4.84,8,3.1,0,0-.94-30.12-2.07-55.32-5.66-3.44-9.72-9.37-19.81-6-5.3-4-10.6-3.55-15.89-4.79l-58.19,46.15-2.14,9.64c-6.61,3.5-13.22,3-19.83,3.73a29.61,29.61,0,0,0-16.28-6.42l-9.7,8.5c-.91,4.68-3.63,5.13-5.72,7.06a11.35,11.35,0,0,0-5.74,7.13c-9.78,2.42-16.65.82-23-1.45,1.23-5.72,4.91-9.43,1.84-18.67l-13.53-15.13-1.76,65a41.52,41.52,0,0,0-12.28,8.39c-6.82-.59-12.49-1.53-21.95.18C573.65,1110,567.1,1098.13,556,1111.32Z"
                      />
                      <path
                        id="Swasiland"
                        className="cls-1"
                        d="M801.35,1069.69l.76,14.72c-4.4,2.2-7.67,4.4-11.42,6.6-4.11-.11-6.74-1.18-7.39-4.47-1-5.24-.45-8.81,2.46-13.22,2.12-3.2,5.94-7.24,8.5-7.67,1.32-.22,3.27,1.76,4.41,3.43l2.68.61Z"
                      />
                      <path
                        id="Tasania"
                        className="cls-1"
                        d="M848.53,636.27l-6.07,9-46,.79L804,661.58c-11.88,12-4.32,14.26-1.5,18.9-5.21,9.7-9.22,21.55-19.64,21.95-2.62.66-4.54,0-5,3.22-1.15,7.54,2.16,23.16,5.19,32.18,3.1,7,8.59,11.67,11.57,17.5,2.75,4,3.42,8.09,4.72,12.13l6.38,7.2c2.69-.8,5.69-.07,9.94,6.9l19.15,6.32c4.13,3.83,10.66,4.86,17.07,6l10,33.14,18.77.48c3.24-2,6.49-1.87,9.73,2.35,7-1.1,13.23-3,22.41-1.85a14.55,14.55,0,0,1,12.54-5c7.21,5.74,27.77-5.94,36.63-11.66-2.16-3.9-6.1-6-9.76-8.42.3-4.43-1.49-9.27-3.09-14.08-1.86-2.94-3.3-5.77-2.07-7.94l-4.35-9.51,2.73-.89c-.71-7.25-.66-14.1,3.66-18.64-3-6.14-13.07-11-12.49-18.3l8.63-24.3-22.9-15.17-3.8-13.52-70-44.27Z"
                      />
                      <path
                        id="Togo"
                        className="cls-1"
                        d="M300.92,526.62l11.92-3.44-7.91-62c-1-4.73-5.7-6.82-9.28-9.71l1.9-10.13-14.06-1.82c-2.63,5.25-1.23,10.26,5.15,15,5.15,21,4.51,41.18,6.12,61.68l6.16,10.46Z"
                      />
                      <path
                        id="Tunesien"
                        className="cls-1"
                        d="M464.56,2.34c-3,.11-14.83-6.06-21.47,3.6,0,0-5,2.22-5.29,7.35-.43,7.9-1.18,32.5-1.18,32.5-.83-1.33-6.76-.33-7.69,3.69-1.27,5.45-7.42,4-7.91,6.78-1,5.54,3.86,10.65,9.57,15.62,1.46,1.28-.55,8.34.9,9.63,4.42,3.94,12.25,6.62,12.25,6.62a227,227,0,0,0,5,30.57c1.19.74,13.82-3.6,9.47-21.35-.51-2.06,25.88-10.6,21.14-27.12-.49-1.72-4.78.32-5.48-2.8-1.57-7-1.37-8.71-4-9.76-1.34-.53-6.86,4.77-8,4.1-2.51-1.52-5.63-5-4.28-6.78C460,52,476.78,41.55,477,35.8c.25-8.56-2.91-9.38-7.11-11.66-2.38-1.3-1.52-5.35-.75-7.66.47-1.42,9.55-4.51,8.51-7.8-.71-2.23-2-2.57-2.52-4.31-.35-1.29-7.22,5.88-7.65,4.77-1.14-2.92-1.49-4.71-2.87-6.8Z"
                      />
                      <path
                        id="Tschad"
                        className="cls-1"
                        d="M681.4,299.91,551.22,235.8,534,241c1.18,10.19.31,18.07.5,24.31.26,9.14,6.62,15.55,15.34,18.64L546,293.35l-5.54,50.3-27.17,29.9a10,10,0,0,0-1.24,5.09,5.83,5.83,0,0,1-3.15,3.3c-1.89,1.18-1,3.17-1.18,4.65-1.58,10.59,20.58,26.29,20.58,26.29,1.14,4.79,2.83,9,3.67,14.1.92,5.44-1.75,12-1,16.74,1.11,6.86,8.72,7.54,7.68,18l-17.45-1.61c-5.06,10.11-1.52,16.7,10.92,19.65l8.21,24.51c13.19-3,22.48-1.41,39.71-9.2l15.68-1.55c2.9-4.93,9-7.56,6.92-16l21.7-2.37c1.69-1.58,2.51-4,5.26-4.57,4.25-.13,5.5-2.89,6.64-5.75,2-4.7,7-6.38,10.73-9.3.68-15.5,12.39-11.06,19.52-14l-.85-5.38c-4.09-4.45-7.61-9.51-8.89-23.68l-7.61,1.44L649,407c2.33-2.5,4-8.43,3.41-12.65l3.55-1.66-.88-8.95,10.48-13.4-.32-6.56,18.06-.95-1.85-62.91Z"
                      />
                      <path
                        id="Uganda"
                        className="cls-1"
                        d="M802.71,567.2l3.3-2.5c13.28,3.39,27.13,1.45,41-.48l8.29-6.86c4.71,2.77,8.23,7.53,8.94,17.45l8,6.38v19.37L842.5,645.24l-46.28.85-7.08,5.74-2.76.06-1.59-2.13,1.06-27.61,10.37-15.74,16.54-14.84-10-6.32-.06-18Z"
                      />
                      <path
                        id="Westsahara"
                        className="cls-1"
                        d="M85.58,255c2-14.7-7.09-35.35,21.46-35.94l6-44.43,50.92,4.5,3.87-30-68.11-5c-6.32,9.7-10,17.92-19.53,21.7-9,3.57-12.52,14.68-15.07,24.31l-26.8,30.66c-1,7-5,11.62-10.43,15.24a44.41,44.41,0,0,0-8.64,21.44l6.83-6.19Z"
                      />
                      <path
                        id="Zentralafrikanische_Republik"
                        data-name="Zentralafrikanische Republik"
                        className="cls-1"
                        d="M540.41,504.15,525,529.38l2.07,18.35c6.57,12.91,14.23,24.84,24.45,34.47,6.34-7.06,9.13-12.5,21.69-15.75l10.92,4.75,12.26-3.45c3-3.52,2.79-9.11,3-14.38,4.22-6.87,8.75-10.48,13.32-13.75,3.39,2.62,9.39.6,9.84,8.44,4,4.51,7.8,7.2,10.73,3,3.39,5,17.8,3.42,27.72,4.52a44,44,0,0,1,3.66-8c3.32-.5,6.3-1.81,11.37,1.88L697,542.13l1.36,3.09,8.38-1.34-.15-3.12,18.51-1.54,4.12,5.29,1.91-2.86,3.16,2.31L737,540.9l8.63-.34c-1.77-4.89-1-10.69-14.08-13.77l-6.73-13.73c-6.73-6.45-18.68-9.43-19.55-19.79l-5.16-5c-4.38.21-8.19,2.1-13.07-5.81-7.88-1.2-13.23-2.43-8-18.4-4.05-9.77-10.24-14.4-15.61-21.86-11.3,2.16-15.83,1.58-16.23,13.26-3.59,2.86-8.86,4.32-10.5,8.8-1.42,3.31-2.6,5.87-7.62,6.3a27.5,27.5,0,0,0-5,4.65l-21.42,2.23c1.13,4,.69,7.66-3.92,12.16-1.23,1.2-2.11,2.67-3.26,4L580,495c-17.82,7.86-26.77,6.19-39.6,9.14Z"
                      />
                      <path
                        id="Lesotho"
                        className="cls-1"
                        d="M747.14,1139.55a19.82,19.82,0,0,0-4.82,1.08,8.27,8.27,0,0,0-3,1.74,5.23,5.23,0,0,0-1.07,2.55c-.23.91-2.08,2.09-2.82,2.28a16.19,16.19,0,0,1-3.48,0,4.61,4.61,0,0,1-4.43-2.15c-1.53-2-3.46-3.62-4.82-5.9a20.17,20.17,0,0,1-2.41-4.29,12.58,12.58,0,0,1-.27-4,4.35,4.35,0,0,1,2.28-4l.53-.27c1.75-.87,2.19-2.86,3.49-4.15s3.28-2.7,4.82-4a17.65,17.65,0,0,1,3.49-2.15,23.2,23.2,0,0,1,5.09-1.74c1.34-.34,2.91-.8,4-1.07.22-.06.45-.09.67-.14l.67-.13a4.87,4.87,0,0,1,4.43,1.61c1.16,1.55,2.63,3,3.75,4.55.59.79.55,2.72,1.07,3.76a30.8,30.8,0,0,1,2.15,4.15c.53,1.61-.24,3.29-.94,4.69a14.52,14.52,0,0,1-3.22,3.89,28.5,28.5,0,0,1-3.21,2.68A21.49,21.49,0,0,1,747.14,1139.55Z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
};

export default Market;
