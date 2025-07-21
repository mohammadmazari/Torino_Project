import { cookies } from "next/headers";
import axiosInstance from "./Config";
const Auth = async () => {
  try {
    const cookiesStore = cookies();
    const token = cookiesStore.get("accessToken");
    const response = await axiosInstance.get("user/profile/", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    const data = response.data;
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default Auth;
