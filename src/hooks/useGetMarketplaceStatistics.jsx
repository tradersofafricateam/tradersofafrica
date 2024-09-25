import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import axios from "axios";


const BASE_URL= process.env.REACT_APP_BACKEND_URL

export const useGetMarketplaceStatistics = () => {
  // const navigate = useNavigate();
  const [marketplaceStatistics, setMarketplaceStatistics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  

  const getAllMarketplaceStatistics = async () => {
    try {
      const data = await axios.get(
        `${BASE_URL}/product/analytics/products`
      );
      setMarketplaceStatistics(data?.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log("hell", error);
      setIsLoading(false);
      // if (error.response.data.Error === "Kindly login") {
      //   navigate("/login");
      // } else {
      //   return navigate(`/no-connection`);
      // }
    }
  };

  return {
    isLoading,
    getAllMarketplaceStatistics,
    marketplaceStatistics,
  };
};
