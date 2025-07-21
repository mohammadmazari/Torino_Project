import ProfileToursPage from "@/app/components/template/ProfileToursPage";
import Auth from "@/app/Services/AuthPage";
import { redirect } from "next/navigation";

async function page() {
  const token = await Auth();
  if (!token) {
    redirect("/");
  }
  return (
    <div>
      <ProfileToursPage />
    </div>
  );
}

export default page;
