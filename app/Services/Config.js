// lib/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:6500", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
