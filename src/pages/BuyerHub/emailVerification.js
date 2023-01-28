import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./emailVerification.css";
import { axios } from "../../components/baseUrl";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";

export default function EmailVerification() {
  const [loader, setLoader] = useState(false);
  const { email } = useParams();
  const navigate = useNavigate();

  const handleEmail = async () => {
    setLoader(true);
    try {
      await axios.post(`/auth/resend-email-verification`, {
        email: email,
      });
      setLoader(false);
      Store.addNotification({
        title: "Successful!",
        message: `A verification link has been resent to ${email}. To continue, please check your inbox and verify your email address.`,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
        isMobile: true,
        breakpoint: 768,
      });
    } catch (error) {
      setLoader(false);
      console.log(error);
      if (!error.response.data.errors) {
        return navigate(`/no-connection`);
      }
      Store.addNotification({
        title: "Failed!",
        message: error.response.data.errors[0],
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
        isMobile: true,
        breakpoint: 768,
      });
    }
  };

  return (
    <section>
      <ReactNotifications />
      <div className="verify-email">
        <h3> Thank you for signing up</h3>
        <p>
          Please verify your email address in order to access your Tofa account.
        </p>

        <p>We sent an email to {email}</p>
        <p>
          To continue, please check your inbox and verify your email address.
        </p>

        <p>
          Didn’t receive the email?{" "}
          {!loader ? (
            <button
              className="btn btn-light"
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
    </section>
  );
}
