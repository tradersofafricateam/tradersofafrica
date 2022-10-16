import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./emailVerification.css";
import { axios } from "../../components/baseUrl";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";

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
      setShowMessage(true);
      setMessage(`A verification link has been resent to ${email}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
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
      <Modal
        title=""
        visible={showMessage ? true : false}
        footer={null}
        onCancel={handleCancel}
      >
        {message}
        <p>
          To continue, please check your inbox and verify your email address.
        </p>
      </Modal>
    </section>
  );
}
