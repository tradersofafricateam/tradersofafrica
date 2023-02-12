import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./emailVerification.css";
import { axiosInstance } from "../../components/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        `A verification link has been resent to ${email}. To continue, please check your inbox and verify your email address.`,
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
    <section>
      <ToastContainer />
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
