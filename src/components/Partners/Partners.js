import React from "react";

import "./Partners.css";

import Ati from "../../assets/img/partners/ati-logo.png";
import Shecluded from "../../assets/img/partners/shecluded-logo.png";
import Iverify from "../../assets/img/partners/iverify-logo.png";
import Eagri from "../../assets/img/partners/eagrib-logo.png";
import Echovc from "../../assets/img/partners/echovc-logo.png";


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
          <img src={Ati} alt="" />
          <img src={Shecluded} alt="" />
          <img src={Iverify} alt="" />
          <img src={Eagri} alt="" />
          <img src={Echovc} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
