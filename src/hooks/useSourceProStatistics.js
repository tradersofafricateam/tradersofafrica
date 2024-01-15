/* eslint-disable react-hooks/rules-of-hooks */

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const getSourceProStatistics = () => {
  const [sourceProStatistics, setSourceProStatistics] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getAllSourceProStatistics = async () => {
    setLoading(true);
    try {
      const data = await axios.get(
        "https://marketplace-server-vwav.onrender.com/api/v2/sourcepro-transaction/sourcepro-statistics"
      );
      setSourceProStatistics(data?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.message && error.message === "Network Error") {
        navigate("/no-connection");
      }
    }
  };

  return {
    loading,
    sourceProStatistics,
    getAllSourceProStatistics,
  };
};
