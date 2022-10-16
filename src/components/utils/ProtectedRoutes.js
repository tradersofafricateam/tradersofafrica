import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios
      .get(`/auth/current-user`)
      .then((response) => {
        setCurrentUser(response.data.currentUser);
        console.log("this is from protected route", response.data.currentUser);
        // if (!currentUser) {
        //   navigate("/login");
        // }
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  }, []);

  if (currentUser) {
    return <Outlet />;
  } else {
    return null;
  }
};

export default ProtectedRoutes;
