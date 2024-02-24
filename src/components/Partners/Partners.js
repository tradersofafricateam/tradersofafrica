import React from "react";

import "./Partners.css";

// import Ati from "../../assets/img/partners/ati-logo.png";
// import Shecluded from "../../assets/img/partners/shecluded-logo.png";
// import Iverify from "../../assets/img/partners/iverify-logo.png";
// import Eagri from "../../assets/img/partners/eagrib-logo.png";
// import PIA from "../../assets/img/partners/pia-logo.svg";
// import SIPI from "../../assets/img/partners/sipi-logo.png";
// import NacAfcta from "../../assets/img/partners/nac.png";
// import Afcta from "../../assets/img/partners/cct.png";
// import LCCI from "../../assets/img/partners/afcta.png";
// import FMAN from "../../assets/img/partners/FMAN.png";
// import GoldFert from "../../assets/img/partners/fmn.png";
// import Flutterwave from "../../assets/img/partners/flutterwave-3.svg";
import { PartnersImg } from "../../constants";

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
        <div className="carousel-container">
          <div className="carousel-track">
            {PartnersImg.map((partner) => (
              <div className="carousel-card" key={partner.id}>
                <img
                  src={partner.imgUrl}
                  alt={partner.title}
                  className={partner.class && "partner-img"}
                ></img>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="d-flex flex-wrap justify-content-start partner-ctn">
          <img src={NacAfcta} alt="" className="partner-img" />
          <img src={Flutterwave} alt="" className="partner-img" />
          <img src={Afcta} alt="" className="partner-img" />
          <img src={LCCI} alt="" className="partner-img" />
          <img src={PIA} alt="" />
          <img src={SIPI} alt="" />
          <img src={FMAN} alt="" className="partner-img" />
          <img src={GoldFert} alt="" className="partner-img" />
          <img src={Eagri} alt="" />
          <img src={Ati} alt="" />
          <img src={Shecluded} alt="" />
          <img src={Iverify} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Partners;
