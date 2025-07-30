// lib/axios.js
import axios from "axios";

const axiosInstance_Client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_CLIENT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance_Client;
