"use client";
import Layout from "./components/layout/Layout";
import Lottie from "lottie-react";
import notfound from "../public/animtions/404.json";
import Link from "next/link";
function NotFound() {
  return (
    <Layout>
      <div className="flex justify-center flex-col md:flex-row-reverse items-center gap-10 py-20">
        <div className="px-13 w-full md:w-[400px]">
          <Lottie animationData={notfound} loop={true} />
        </div>
        <p className="flex flex-col gap-3">
          <span className="text-sm text-center md:text-2xl font-bold">
            صفحه مورد نظر یافت نشد!
          </span>
          <Link
            href="/"
            className="text-white text-sm md:text-lg bg-green-500 p-3 rounded-md text-center mt-10"
          >
            بازگشت به صفحه اصلی
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default NotFound;
