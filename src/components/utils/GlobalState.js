import { axiosInstance } from "./../axios";
import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [userLoading, setUserLoading] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const getUser = () => {
    axiosInstance
      .get(`/auth/current-user`)
      .then((response) => {
        setUser(response.data.currentUser);
        setUserLoading(false);
      })
      .catch((error) => {
        setUserLoading(false);
        if (error.message && error.message === "Network Error") {
          navigate("/no-connection");
        }
      });
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user");
    if (isLoggedIn) {
      setUserLoading(true);
      getUser();
    }
  }, []);

  const value = {
    user,
    setUser,
    userLoading,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
