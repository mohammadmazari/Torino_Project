import ProfileToursPage from "@/app/components/template/ProfileToursPage";
import Auth from "@/app/Services/AuthPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axiosInstance from "@/app/Services/Config";

async function page() {
  const user = await Auth();
  if (!user) {
    redirect("/");
  }

  let tours = null;
  try {
    const cookieStore = cookies(); 
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      redirect("/");
    }

    const res = await axiosInstance.get("/user/tours", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    tours = res.data;
  } catch (error) {
    console.log("Error fetching tours:", error);
    return null
  }

  return (
    <div>
      <ProfileToursPage tours={tours} />
    </div>
  );
}

export default page;

