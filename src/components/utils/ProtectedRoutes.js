import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios
      .get(`/auth/current-user`)
      .then((response) => {
        setCurrentUser(response.data.currentUser);

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

  // if(currentUser) {
  //   return <Outlet/>
  // } else {
  //   return <Navigate to="/login" state={{from: location}} replace />
  // }
};

export default ProtectedRoutes;
