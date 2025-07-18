"use client";
import toPersianDigits from "@/app/helper/toPersianDigits";
import { PiPhone } from "react-icons/pi";
import Slider from "./ُSlider";

function Informations() {
  return (
    <div className="px-5 mt-15 mb-8 ">
      <div className="w-full border border-gray-400 md:overflow-hidden sm:w-300px relative h-[128px] md:h-[250px] bg-green-700 rounded-2xl">
        <img
          src="/images/Homepage/info2.png"
          alt="Information Image"
          className="w-[195px] md:h-[225px] md:w-[308px] absolute h-[158px] bottom-0 -left-5 md:left-1/2 md:transform md:-translate-x-1/2"
        />
        <p className="w-2/3 p-3 md:p-10">
          <span className="font-bold text-white text-[22px] md:text-[35px]">
            خردید تلفنی از
          </span>
          <span className="font-bold text-[22px] md:text-[48px]">تورینو</span>
          <br></br>
          <br></br>
          <span className="text-white text-[14px] mt-20  md:text-[25px]">
            به هر کجا که میخواهید!
          </span>
        </p>
        <div className="absolute h-[65px] -bottom-13 md:w-[250px] md:left-0 md:top-0 md:h-full bg-white w-full flex items-center justify-around md:flex-col md:justify-center md:gap-4">
          <p className="flex items-center gap-1 font-bold text-[20px] ">
            {toPersianDigits("1840-021")}
            <PiPhone />
          </p>
          <button className="bg-green-800 p-2 rounded-md text-white">
            اطلاعات بیشتر
          </button>
        </div>
      </div>

      <div className="bg-red mt-25 md:flex md:items-center">
        <div className="flex gap-2 items-center">
          <div className="md:w-2/3">
            <div className="flex gap-2 items-center">
              <div
                className="w-16 h-16 bg-gradient-to-b from-green-500 to-green-700 text-white text-3xl font-bold flex items-center justify-center 
            [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)] rounded md:rounded-full"
              >
                ?
              </div>
              <p className="text-[24px] font-bold">
                چرا <span className="text-green-600">تورینو</span> ؟
              </p>
            </div>
            <div
              className="hidden md:inline-block
            "
            >
              <p className="my-3 font-medium">تور طبیعت گردی و تاریخی</p>
              <p className="font-light">
                اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در
                دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
                تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
                گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
                فرهنگی و تاریخی را خریداری کنید.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-full md:flex md:justify-center">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Informations;
