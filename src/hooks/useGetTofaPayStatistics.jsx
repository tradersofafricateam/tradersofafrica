import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const useGetTofaPayStatistics = () => {
  // const navigate = useNavigate();
  const [tofapayStatistics, setTofapayStatistics] = useState({});
  const [loading, setLoading] = useState(true);

  const getAllTofapayStatistics = async () => {
    try {
      const data = await axios.get(
        `https://tofapaybackend.tradersofafrica.com/statistics`
      );
      setTofapayStatistics(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      // if (error.response.data.Error === "Kindly login") {
      //   navigate("/login");
      // } else {
      //   return navigate(`/no-connection`);
      // }
    }
  };

  return {
    loading,
    getAllTofapayStatistics,
    tofapayStatistics,
  };
};
