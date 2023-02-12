import axios from "axios";

export const axiosInstance = axios.create({
  //create instance
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

//set the Auth token for any request
axiosInstance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
