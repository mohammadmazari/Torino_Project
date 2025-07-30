
"use client";

import { useEffect, useState } from "react";
import axiosInstance_Client from "./ConfigCleint";


const useAuthClient = () => {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
      
        const match = document.cookie.match(/accessToken=([^;]+)/);
        const token = match?.[1];

        if (!token) return;

        const response = await axiosInstance_Client.get("/user/profile/", {
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
