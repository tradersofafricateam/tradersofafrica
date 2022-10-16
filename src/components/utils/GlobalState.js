import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState("");
  const [userOrderSummary, setUserOrderSummary] = useState("");
  const [userEnquireSummary, setUserEnquireSummary] = useState("");
  const [allUserOrder, setAllUserOrder] = useState([]);
  const [allUserEnquire, setAllUserEnquire] = useState([]);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      axios.get("/product").then((response) => {
        setIsLoading(true);
        console.log("buy-commodities", response.data.data);
        setProduct(response.data.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error.response.data.erros);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setUserLoading(true);
    axios
      .get(`/auth/current-user`)
      .then((response) => {
        setUser(response.data.currentUser);
        setUserLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setUserLoading(true);
      });
  }, []);

  useEffect(() => {
    setUserLoading(true);
    axios
      .get(`/buyer-hub/order-summary`)
      .then((response) => {
        setUserOrderSummary(response.data.data);
        setUserLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setUserLoading(true);
      });
  }, []);

  useEffect(() => {
    setUserLoading(true);
    axios
      .get(`/buyer-hub/enquiry-summary`)
      .then((response) => {
        setUserEnquireSummary(response.data.data);
        setUserLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setUserLoading(true);
      });
  }, []);

  useEffect(() => {
    setUserLoading(true);
    axios
      .get(`/buyer-hub/all-orders`)
      .then((response) => {
        setAllUserOrder(response.data.data);
        setUserLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setUserLoading(true);
      });
  }, []);

  useEffect(() => {
    setUserLoading(true);
    axios
      .get(`/buyer-hub/all-enquiries`)
      .then((response) => {
        setAllUserEnquire(response.data.data);
        setUserLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setUserLoading(true);
      });
  }, []);

  const value = {
    user,
    userLoading,
    userOrderSummary,
    userEnquireSummary,
    allUserOrder,
    allUserEnquire,
    product,
    isLoading,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
