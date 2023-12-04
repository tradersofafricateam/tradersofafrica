import React from "react";
import { Link } from "react-router-dom";

import "./Story.css";

import PlayBtn from "../../assets/img/dark-play-btn.svg";
import LinkedIn from "../../assets/img/linkedin.svg";

import Uju from "../../assets/img/team/uju.jpg";
import Augustine from "../../assets/img/team/aug.jpg";
import Tokunbo from "../../assets/img/team/toks.jpg";
import Bambam from "../../assets/img/team/bambam.jpg";
import Mildred from "../../assets/img/team/midred.jpg";
import Chinedu from "../../assets/img/team/chinedu.jpg";
import Jonathan from "../../assets/img/team/jonathan.jpg";
import Blessing from "../../assets/img/team/blessing.jpg";
import Dami from "../../assets/img/team/dami.jpg";

import Dolapo from "../../assets/img/team/dolapo.jpg";
import John from "../../assets/img/team/nedz.jpg";
import Ola from "../../assets/img/team/ola.jpg";
import Victor from "../../assets/img/team/vic.jpg";
import Joseph from "../../assets/img/team/joseph.jpg";
import Tom from "../../assets/img/team/tom.jpg";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import Partners from "../../components/Partners/Partners";
// import Testimonials from "../../components/Testimonials/Testimonials";

const Story = () => {
  return (
    <div>
      <Navbar />

      {/* About Banner */}
      <section id="about-us" className="scroll-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2>Our Story</h2>
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
                African products to the rest of the world. - Uju Uzo-Ojinnaka
              </h3>
              <div className="d-flex justify-content-start">
                <img src={PlayBtn} alt="" />
                <p className="play-icon-text">
                  <Link
                    target="_blank"
                    to="https://www.youtube.com/watch?v=zsj0Tw38qj0"
                  >
                    {" "}
                    Watch the Groundnut Story
                  </Link>
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
      {/* <section id="values">
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
      </section> */}

      {/* Leadership team */}
      <section id="l-team">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12">
              <h2>Our Team Awesome</h2>
              <p>
                Traders of Africa promotes a relaxed, culturally diverse
                workplace for the optimal performance of its employees, as well
                as an all-round friendly experience for anyone who walks through
                our doors. We are called Team Awesome!
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
                  <img className="team-img" src={Uju} alt="" />
                  <a
                    href="https://www.linkedin.com/in/uju-uzo-ojinnaka-46288041/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Uju Uzo-Ojinnaka</h4>
                <p>Founder &amp; CEO</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Tokunbo} alt="" />
                  <a
                    href="https://www.linkedin.com/in/tokunbo-fatoki-bsc-aca-69023a153/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Tokunbo Fatoki </h4>
                <p>Head Operations & Finance</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Jonathan} alt="" />
                  <a
                    href="https://www.linkedin.com/in/jonathan-ojesebholo-mba-fmva-b624492a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Jonathan Ojesebholo</h4>
                <p>Head, TOFA Pay</p>
              </div>

              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Augustine} alt="" />
                  <a
                    href="https://www.linkedin.com/in/augustine-emeka-a34a6882/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Augustine Emeka</h4>
                <p>Head of Tech</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Bambam} alt="" />
                  <a
                    href="https://www.linkedin.com/in/ayobamidele-mebude-448454144/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Bamidele Mebude</h4>
                <p>Human Resource Manager</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Chinedu} alt="" />
                  <a
                    href="https://www.linkedin.com/in/chinedu-odunukwe-55a2b011b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Chinedu Odunukwe</h4>
                <p>Finance Officer</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Mildred} alt="" />
                  <a
                    href="https://www.linkedin.com/in/ayobamidele-mebude-448454144/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Jaja Mildred</h4>
                <p>Legal Officer</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Dami} alt="" />
                  <a
                    href="https://www.linkedin.com/in/damilola-anifowoshe-859a9718a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Damilola Anifowoshe</h4>
                <p>Marketing & Public Relations</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Victor} alt="" />
                  <a
                    href="https://www.linkedin.com/in/ejiogu-victor-4b594916a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Victor Ejiogu</h4>
                <p>Frontend Developer</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Blessing} alt="" />
                  <a href="https://www.linkedin.com/in/blessing-igri-25b25a179/">
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Blessing Igri</h4>
                <p>Head, SourcePro</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Tom} alt="" />
                  <a
                    href="https://www.linkedin.com/in/john-tom-728183185/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Tom John</h4>
                <p>Backend Developer</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={John} alt="" />
                  <a
                    href="www.linkedin.com/in/john-chinedu-nzekwe-2ba5a11a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Nzekwe John C.</h4>
                <p>Graphics &amp; Content Manager</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Ola} alt="" />
                  <a
                    href="www.linkedin.com/in/ola7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Olawale Ojo</h4>
                <p>Backend Developer</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Joseph} alt="" />
                  <a
                    href="https://www.linkedin.com/in/joseph-matthias-a66745225/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Joseph Matthias</h4>
                <p>TOFA Pay Executive</p>
              </div>
              <div className="l-member-wrap">
                <div className="l-member-img">
                  <img className="team-img" src={Dolapo} alt="" />
                  <a
                    href="https://www.linkedin.com/in/toromade-adedolapo-0a804b223/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="linkedin-icon" src={LinkedIn} alt="" />
                  </a>
                </div>
                <h4>Toromade Adedolapo</h4>
                <p>Admin & Grant Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonials />
      <Partners /> */}
      <Footer />
    </div>
  );
};

export default Story;
