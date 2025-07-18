import toPersianDigits from "@/app/helper/toPersianDigits";
import React from "react";

function Features() {
  return (
    <div className="px-3 flex flex-col gap-8 mt-15 mb-15 md:flex-row md:gap-10 md:justify-between  md:px-2 md:my-20">
      <div className="flex items-center gap-5 ">
        <div className="relative w-[60px] z-10">
          <img
            src="/images/Homepage/R1.png"
            alt="Feature 1"
            className="absolute -z-1 -top-3 -left-3"
          />
          <img
            src="/images/Homepage/R_1.png"
            alt="Feature 1"
            className=" w-full z-40 h-full object-cover"
          />
        </div>
        <p className="flex flex-col gap-2">
          <span className="text-[14px] font-bold">بصرفه ترین قیمت</span>
          <span className="text-[12px] ">
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </span>
        </p>
      </div>
      <div className="flex items-center gap-5 ">
        <div className="relative w-[60px] z-10">
          <img
            src="/images/Homepage/R2.png"
            alt="Feature 1"
            className="absolute -z-1 -bottom-2 -left-2"
          />
          <img
            src="/images/Homepage/R_2.png"
            alt="Feature 1"
            className=" w-full z-40 h-full object-cover"
          />
        </div>
        <p className="flex flex-col gap-2">
          <span className="text-[14px] font-bold"> پشتیبانی</span>
          <span className="text-[12px] ">
            پشبیبانی و همراهی {toPersianDigits("24")} ساعته در تمامی مراحل سفر
            شما.
          </span>
        </p>
      </div>
      <div className="flex items-center gap-5 ">
        <div className="relative w-[60px] z-10">
          <img
            src="/images/Homepage/R3.png"
            alt="Feature 1"
            className="absolute -z-1 -top-1 -right-1"
          />
          <img
            src="/images/Homepage/R_3.png"
            alt="Feature 1"
            className=" w-full z-40 h-full object-cover"
          />
        </div>
        <p className="flex flex-col gap-2">
          <span className="text-[14px] font-bold"> رضایت کاربران </span>
          <span className="text-[12px] ">
            رضایت بیش از {toPersianDigits("10")} هزار کاربر از تور های ما.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Features;
