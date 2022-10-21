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
        setUserLoading(true);
        console.log("buy-commodities", response.data.data);
        setProduct(response.data.data);
        setUserLoading(false);
      });
    } catch (error) {
      console.log("error loading products", error.response.data.erros);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    setUserLoading(true);
    axios
      .get(`/auth/current-user`)
      .then((response) => {
        setUser(response.data.currentUser);
        setUserLoading(false);
      })
      .catch((error) => {
        console.log("error loading user", error);
      });
  }, []);

  // useEffect(() => {
  //   setUserLoading(true);
  //   axios
  //     .get(`/buyer-hub/order-summary`)
  //     .then((response) => {
  //       setUserOrderSummary(response.data.data);
  //       setUserLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("error loading order summary", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   setUserLoading(true);
  //   axios
  //     .get(`/buyer-hub/enquiry-summary`)
  //     .then((response) => {
  //       setUserEnquireSummary(response.data.data);
  //       setUserLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("error loading inquiry summary", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   setUserLoading(true);
  //   axios
  //     .get(`/buyer-hub/all-orders`)
  //     .then((response) => {
  //       setAllUserOrder(response.data.data);
  //       setUserLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("error loading all orders", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   setUserLoading(true);
  //   axios
  //     .get(`/buyer-hub/all-enquiries`)
  //     .then((response) => {
  //       setAllUserEnquire(response.data.data);
  //       setUserLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("error loading all inquires", error);
  //     });
  // }, []);

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
