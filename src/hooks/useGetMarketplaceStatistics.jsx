import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import axios from "axios";

export const useGetMarketplaceStatistics = () => {
  // const navigate = useNavigate();
  const [marketplaceStatistics, setMarketplaceStatistics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getAllMarketplaceStatistics = async () => {
    try {
      const data = await axios.get(
        `https://marketplace-server-vwav.onrender.com/api/v2/product/analytics/products`
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
