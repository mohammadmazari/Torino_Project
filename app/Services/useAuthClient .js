// app/Services/AuthClient.js
"use client";

import { useEffect, useState } from "react";
import axiosInstance from "./Config";


const useAuthClient = () => {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // خواندن کوکی از document.cookie (اگر non-HttpOnly باشه)
        const match = document.cookie.match(/accessToken=([^;]+)/);
        const token = match?.[1];

        if (!token) return;

        const response = await axiosInstance.get("user/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userMobile = response.data.mobile;
        if (userMobile) {
          setMobile(userMobile);
        }
      } catch (error) {
        console.error("Auth error (client):", error);
      }
    };

    fetchUser();
  }, []);

  return mobile;
};

export default useAuthClient;
