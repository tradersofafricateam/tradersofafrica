import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [userLoading, setUserLoading] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

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

  const getData = async () => {
    try {
      axios.get("/product").then((response) => {
        setProduct(response.data.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
    loading,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
