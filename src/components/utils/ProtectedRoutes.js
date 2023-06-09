import { axiosInstance } from "./../axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/auth/current-user`)
      .then((response) => {
        setCurrentUser(response.data.currentUser);
      })
      .catch((error) => {
        console.log(error);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        } else navigate("/login");
      });
  }, []);

  if (currentUser) {
    return <Outlet />;
  } else {
    return null;
  }
};

export default ProtectedRoutes;
