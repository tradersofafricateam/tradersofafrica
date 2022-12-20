import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./emailVerification.css";
import { axios } from "../../components/baseUrl";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";

export default function EmailVerification({ registerDetail }) {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  //   const [open, setOpen] = useState(false);
  const { email } = useParams();
  console.log(email);

  const handleCancel = () => {
    setShowMessage(false);
  };

  const handleEmail = async () => {
    try {
      await axios.post(`/auth/resend-email-verification`, {
        email: email,
      });
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
      console.log(error);
      Store.addNotification({
        title: "Failed!",
        message: "Try Again.",
        type: "danger",
        insert: "top",
        container: "top-left",
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
          <button
            className="btn btn-light"
            onClick={() => handleEmail(email)}
            href=""
          >
            Resend email
          </button>
        </p>
      </div>
    </section>
  );
}
