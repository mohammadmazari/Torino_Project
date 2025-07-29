import Layout from "@/app/components/layout/Layout";
import ProfileTransactions from "@/app/components/template/profiletransactions";
import Auth from "@/app/Services/AuthPage";
import axiosInstance from "@/app/Services/Config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {
  const user = await Auth();
  if (!user) {
    redirect("/");
  }

  let transactions = null;
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      redirect("/");
    }

    const res = await axiosInstance.get("/user/transactions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    transactions = res.data;
  } catch (error) {
    console.log("Error fetching tours:", error);
    return null;
  }

  console.log(transactions);

  return (
    <Layout>
      <ProfileTransactions  transactions={transactions}/>
    </Layout>
  );
}

export default page;
