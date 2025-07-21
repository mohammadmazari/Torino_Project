import Layout from "../layout/Layout";
import Selections from "../Homepage/Selections";
import Tours from "../Homepage/Tours";
import Informations from "../Homepage/Informations";
import Features from "../Homepage/Features";
import axiosInstance from "@/app/Services/Config";
import Auth from "@/app/Services/AuthPage";

async function Homepage() {
  const user = await Auth();
  const mobile = user?.mobile;

  const ToursData = await (async () => {
    try {
      const response = await axiosInstance.get("/tour");
      return response.data;
    } catch (error) {
      return null;
    }
  })();

  return (
    <Layout Mobile={mobile}>
      <div className="container">
        <img
          src="/images/Homepage/slideHomepage.svg"
          className=" mt-7 w-full "
          alt="Description"
        />
        <h1 className="text-[16px] font-medium text-center mt-5">
          <span className="text-[var(--globalColor)]">تورینو</span>برگزار کننده
          بهترین تور های داخلی و خرجی
        </h1>
        <Selections />
        <Tours data={ToursData} />
        <Informations />

        <Features />
      </div>
    </Layout>
  );
}

export default Homepage;
