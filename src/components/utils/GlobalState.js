import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [userLoading, setUserLoading] = useState(false);
  const [user, setUser] = useState("");

  const getUser = () => {
    axios
      .get(`/auth/current-user`)
      .then((response) => {
        setUser(response.data.currentUser);
        setUserLoading(false);
      })
      .catch((error) => {
        setUserLoading(false);
        console.log("error loading user", error);
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
