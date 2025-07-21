import Layout from "@/app/components/layout/Layout";
import ProfileTransactions from "@/app/components/template/profiletransactions";
import Auth from "@/app/Services/AuthPage";
import { redirect } from "next/dist/server/api-utils";

async function page() {
  const token = await Auth();
  if (!token) {
    redirect("/");
  }
  return (
    <Layout>
      <ProfileTransactions />
    </Layout>
  );
}

export default page;
