import ProfilePage from "@/app/components/template/ProfilePage";
import Auth from "@/app/Services/AuthPage";
import { redirect } from "next/navigation";

async function page() {
  const user = await Auth();
  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <ProfilePage user={user} />
    </div>
  );
}

export default page;
