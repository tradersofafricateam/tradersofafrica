import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./emailVerification.css";
import { axiosInstance } from "../../components/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LogoWhite from "../../assets/img/icons/logo-white.png";

export default function EmailVerification() {
  const [loader, setLoader] = useState(false);
  const { email } = useParams();
  const navigate = useNavigate();

  const handleEmail = async () => {
    setLoader(true);
    try {
      await axiosInstance.post(`/auth/resend-email-verification`, {
        email: email,
      });
      setLoader(false);
      toast.success(
        `A verification link has been resent.`,
        {
          position: "top-right",
          autoClose: 6000,
          pauseHover: true,
          draggable: true,
        }
      );
    } catch (error) {
      setLoader(false);
      console.log(error);
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
      toast.error(`${error.response.data.errors[0].message}`, {
        position: "top-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
      });
    }
  };

  return (
    // <section>
    //   <ToastContainer />
    //   <div className="verify-email">
    //     <h3> Thank you for signing up</h3>
    //     <p>
    //       Please verify your email address in order to access your Tofa account.
    //     </p>

    //     <p>We sent an email to {email}</p>
    //     <p>
    //       To continue, please check your inbox and verify your email address.
    //     </p>

    //     <p>
    //       Didn’t receive the email?{" "}
    //       {!loader ? (
    //         <button
    //           className="btn btn-light"
    //           onClick={() => handleEmail(email)}
    //         >
    //           Resend email
    //         </button>
    //       ) : (
    //         <button className="btn btn-light">
    //           <span
    //             className="spinner-border spinner-border-sm"
    //             role="status"
    //             aria-hidden="true"
    //           ></span>
    //         </button>
    //       )}
    //     </p>
    //   </div>
    // </section>
    <section className="w-100" id="password-page">
      <ToastContainer />
      <section className="row m-0 ">
        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="map-img">
            <a href="/">
              <img className="auth-logo" src={LogoWhite} alt="Tofa Logo" />
            </a>
          </div>
        </div>

        <div className="col-lg-6 p-0 align-items-center" id="buyer-section">
          <main className="row auth-header" id="header-info">
            <div className="col-lg-6 col-3">
              <button
                className="back-btn d-flex"
                onClick={() => navigate(-1)}
              >
                <i className="fas fa-chevron-left me-2 auth-back-btn"></i>
                Back
              </button>
            </div>
            <div className="col-lg-6 col-9 return-to" id="header-text">
              <p className="info-txt m-0">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </main>
          <div class="all-content">
            <h2 className="pb-2">Thank you for signing up</h2>
              <p>
              Please verify your email address to continue. We have sent an email containing a verification link to <strong>{email}</strong> .
              </p>

              <p>
              Didn’t receive the email?{" "}
              {!loader ? (
                <button
                  className="btn btn-light re-verify ms-3"
                  onClick={() => handleEmail(email)}
                >
                  Resend email
                </button>
              ) : (
                <button className="btn btn-light">
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              )}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
