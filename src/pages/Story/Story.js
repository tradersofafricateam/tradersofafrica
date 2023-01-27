import React from "react";

import "./Story.css";

import PlayBtn from "../../assets/img/dark-play-btn.svg";
import LinkedIn from "../../assets/img/linkedin.svg";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Partners from "../../components/Partners/Partners";
import Testimonials from "../../components/Testimonials/Testimonials";

const Story = () => {
  return (
    <div>
      <Navbar />

      {/* About Banner */}
      <section id="about-us" className="scroll-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2>How it all Started</h2>
              <p>
                It all started because of groundnuts! Remember, there used to be
                groundnut pyramids in Kano and other cities in Northern Nigeria.
                Tens of thousands of groundnut sacks stacked up in pyramid-like
                structures. Now, imagine not being able to find groundnuts today
                in large quantities anywhere in Nigeria and Africa as a whole.
                That’s exactly how Uju felt right before she started TOFA.
              </p>
              <h3>
                There is an urgent need to expose to Africans what is obtainable
                in our locality and from our surroundings, as well as showcase
                African products to the rest of the world.
              </h3>
              <div className="d-flex justify-content-start">
                <img src={PlayBtn} alt="" />
                <p className="play-icon-text">
                  <a href="/"> Watch the Groundnut Story</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misssion and Vision */}
      <section id="goals">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 line">
              <div className="mission">
                <div>
                  <div className="h-line" />
                  <p>Our Mission</p>
                </div>
                <h2>
                  The big mission for Traders of Africa is to facilitate trade
                  across the 54 countries in Africa, through strategic
                  partnerships.
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision">
                <div>
                  <div className="h-line" />
                  <p>Our Vision</p>
                </div>
                <h2>
                  To be a point of convergence for qualitative trade with Africa
                  and creating access to market for 2,000,000 African traders by
                  2025.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section id="values">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>The Values that Defines us</h2>
              <p>
                The aim of TOFA Academy is to build a network of credible <br />
                suppliers all over Africa in order to meet both local and global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section id="l-team">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12">
              <h2>Our Leadership Team</h2>
              <p>
                Traders of Africa promotes a relaxed, culturally diverse
                workplace for the optimal <br />
                performance of its employees, as well as an all-round friendly
                experience for <br />
                anyone who walks through our doors. We are called Team Awesome!
              </p>
              <h3>
                A team of young, dynamic innovators sowing the <br />
                seeds of qualitative trade out of Africa.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-start">
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Uju Uzo-Ojinnaka</h4>
                <p>Founder &amp; CEO</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Unwana Usoro</h4>
                <p>Registrar, TOFA Academy</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Oge Belonwu</h4>
                <p>Head, Operations</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Erhun Abbe</h4>
                <p>Head, Digital &amp; Partnerships</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Olayemi Ajayi</h4>
                <p>Head, SourcePro Nigeria</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Chinedu Odunukwe</h4>
                <p>Finance Officer</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Rachael Ezeanya</h4>
                <p>Human Resource Manager</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Damilola Anifowoshe</h4>
                <p>Marketing &amp; Public Relations</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="linkedin-icon" src={LinkedIn} alt="" />
                </div>
                <h4>Olayemi Ajayi</h4>
                <p>Head, SourcePro Nigeria</p>
              </div>
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

export default Story;
