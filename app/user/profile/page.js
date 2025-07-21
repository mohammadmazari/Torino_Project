import ProfilePage from "@/app/components/template/ProfilePage";
import Auth from "@/app/Services/AuthPage";
import { redirect } from "next/navigation";

async function page() {
  const token = await Auth();
  if (!token) {
    redirect("/");
  }
  console.log(token);
  return (
    <div>
      <ProfilePage />
    </div>
  );
}

export default page;
