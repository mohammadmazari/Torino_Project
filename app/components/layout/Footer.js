import toPersianDigits from "@/app/helper/toPersianDigits";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row gap-4 justify-between border-b  pb-3 border-gray-300 ">
        <div className="flex gap-20 text-center justify-center items-center">
          <div>
            <h2 className="font-bold text-[18px] md:text-[24px]">تورینو</h2>
            <ul className="text-[16px] md:text-[18px]">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[18px] md:text-[24px]">
              خدمات مشتریان
            </h2>
            <ul className="text-[16px]">
              <li> پشتیبانی آنلاین</li>
              <li>راهنمایی خرید</li>
              <li>راهنمایی استرداد</li>
              <li>پرسش و پاسخ </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <img
            src="/images/Homepage/icon.svg"
            alt="footer logo"
            className="w-[100px] h-[30px]"
          />
          <p className="text-[14px] md:text-sm">
            تلفن پشتیبانی : {toPersianDigits("8584-021")}
          </p>
          <div className="flex gap-2 mt-2 ">
            <img
              src="/images/Homepage/1.svg"
              alt="another icon"
              className="w-[36px] h-[37px] md:w-[68px] md:h-[74px]"
            />
            <img
              src="/images/Homepage/2.svg"
              alt="another icon"
              className="w-[36px] h-[37px] md:w-[68px] md:h-[74px]"
            />
            <img
              src="/images/Homepage/3.svg"
              alt="another icon"
              className="w-[36px] h-[37px] md:w-[68px] md:h-[74px]"
            />
            <img
              src="/images/Homepage/4.svg"
              alt="another icon"
              className="w-[36px] h-[37px] md:w-[68px] md:h-[74px]"
            />
            <img
              src="/images/Homepage/5.svg"
              alt="another icon"
              className="w-[36px] h-[37px] md:w-[68px] md:h-[74px]"
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-center p-3 ">
        کلیه حقوق این وبسایت مطعلق به تورینو میباشد
      </p>
    </footer>
  );
}

export default Footer;
