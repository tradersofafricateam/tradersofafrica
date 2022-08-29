import React from "react";

import "./Partners.css";

// import Twitter from "../../assets/img/twitter.png";
// import Facebook from "../../assets/img/facebook.png";
// import Instagram from "../../assets/img/instagram.png";
// import Linkedin from "../../assets/img/linkedin.png";

const Partners = () => {
  return (
    <section id="partners">
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Our Partners</h2>
            <p>
              As we grow our business, we consider strategic partnerships as the
              foundation through which we operate across Africa. We are
              establishing partnerships in areas of trade, logistics, financing,
              and human resources.
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-start">
          <img src="img/pt-1.svg" alt="" />
          <img src="img/pt-2.svg" alt="" />
          <img src="img/pt-3.svg" alt="" />
          <img src="img/pt-4.svg" alt="" />
          <img src="img/pt-5.svg" alt="" />
          <img src="img/pt-6.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
