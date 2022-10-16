import React from "react";

import "./Testimonials.css";

import QuoteImg from "../../assets/img/quote.svg";

const Testimonials = () => {
  return (
    <section id="testimonial">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            <div className="col-lg-4">
              <h2>Trusted by <br />
                <span>10,000+</span> Buyers <br />
                and Sellers</h2>
              <p>Don’t take our word for it</p>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testimonial-box">
                    <img src={QuoteImg} alt="" />
                    <p className="customer">The aim of TOFA Academy is to build over Africa in order to meet both local commodities and African products. </p>
                    <h3 className="name">Adamu Buhari Tinubu</h3>
                    <p className="company">Stallion Group</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial-box">
                    <img src={QuoteImg} alt="" />
                    <p className="customer">The aim of TOFA Academy is to build over Africa in order to meet both local commodities and African products. </p>
                    <h3 className="name">Amar Sharma</h3>
                    <p className="company">Stallion Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
