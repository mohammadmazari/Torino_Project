"use client";
import { useEffect, useMemo, useState } from "react";
// import { FaUser, FaUserAlt, FaAngleDown } from "react-icons/fa6";
import { FaUser, FaUserAlt, FaAngleDown } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineLogin, AiFillHome } from "react-icons/ai";
import { PiAirplaneLight, PiSoundcloudLogoLight } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import Link from "next/link";
import SignInForm from "../auth/SignInForm";
import useAuthClient from "@/app/Services/useAuthClient ";
import { PiUserCircleFill } from "react-icons/pi";
import { PiUser } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";
import Cookies from "js-cookie";
import { toast } from "sonner";
import ToasterAPI from "../modules/Toaster";

function Header() {
  const [mobile, setMobile] = useState(null);
  const userMobile = useAuthClient();
  useEffect(() => {
    setMobile(userMobile);
  }, [userMobile]);

  const SignInhandler = () => {};

  const LogoutHandler = () => {
    Cookies.remove("accessToken");
    toast.success("خروج موفقیت آمیز بود.", {
      style: {
        backgroundColor: "green",
        color: "white",
      },
    });
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  };

  return (
    <header className="border-b border-gray-300 pb-4">
      <ToasterAPI />
      {/* Desktop Design */}
      <div className="hidden md:flex justify-between">
        <div className="flex gap-10">
          <Link href="/">
            <img
              className="w-[145px] h-[44px]"
              src="/images/Homepage/icon.svg"
              alt="logo"
            />
          </Link>
          <ul className="flex gap-5 font-medium items-center">
            <li>صفحه اصلی</li>
            <li>خدمات گردشکری</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        {mobile ? (
          <div className="dropdown w-[180px] cursor-pointer">
            <div tabIndex={0} role="button" className="m-1">
              <p className="flex items-center gap-2 text-green-600">
                <FaUserAlt size={20} />
                <span>{mobile}</span>
                <FaAngleDown size={20} />
              </p>
            </div>
            <ul className="dropdown-content  menu bg-base-100 rounded-box z-1 w-full p-2 py-4 shadow-sm">
              <li>
                <Link
                  href="/profile"
                  className="text-sm justify-start gap-2 text-gray-800"
                >
                  <PiUserCircleFill size={18} />{" "}
                  {mobile ? mobile : "کاربر مهمان"}
                </Link>
              </li>
              <li>
                <Link
                  href="/user/profile"
                  className="text-gray-800 text-sm flex items-center justify-start gap-2"
                >
                  <PiUser size={18} /> حساب کاربری
                </Link>
              </li>
              <li>
                <button
                  onClick={LogoutHandler}
                  className="text-red-800 text-sm justify-start gap-2"
                >
                  <RiLogoutCircleLine size={18} />
                  خروج از حساب
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={() => {
              const modal = document.getElementById("my_modal_5");
              modal?.showModal();
              SignInhandler();
            }}
            className="border border-green-800 p-2 px-4 rounded-md text-green-700 flex items-center gap-2"
          >
            <FaUser /> ورود و
            <span className="border-r border-green-800 h-[23px]"></span> ثبت نام
          </button>
        )}
      </div>

      {/* Mobile Design */}
      <div className="flex md:hidden items-center justify-between px-4">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn bg-transparent drawer-button"
            >
              <RiMenu3Line size={25} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu flex gap-6 bg-base-200 min-h-full w-80 p-4 text-[16px] font-normal">
              <li>
                <Link href="/" className="text-green-800">
                  <AiFillHome size={20} /> صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="#">
                  <PiAirplaneLight size={20} /> خدمات گردشگری
                </Link>
              </li>
              <li>
                <Link href="#">
                  <PiSoundcloudLogoLight size={20} /> درباره ما
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CiPhone size={20} /> تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {!mobile ? (
          <button
            className="border border-green-800 rounded-lg p-2"
            onClick={() => {
              const modal = document.getElementById("my_modal_5");
              modal?.showModal();
              SignInhandler();
            }}
          >
            <AiOutlineLogin size={25} color="green" />
          </button>
        ) : (
          <div className="dropdown">
            <div tabIndex={0} role="button" className="m-1">
              <p className="flex items-center gap-2 text-green-600">
                <FaUserAlt />
                <span>{mobile}</span>
                <FaAngleDown />
              </p>
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-1 shadow-sm">
              <li>
                <Link
                  href="/profile"
                  className="text-xs justify-start gap-2 gap-2 text-gray-800"
                >
                  <PiUserCircleFill size={18} />{" "}
                  {mobile ? mobile : "کاربر مهمان"}
                </Link>
              </li>
              <li>
                <Link
                  href="/user/profile"
                  className="text-gray-800 text-xs flex items-center justify-start gap-2"
                >
                  <PiUser size={18} /> حساب کاربری
                </Link>
              </li>
              <li>
                <button
                  onClick={LogoutHandler}
                  className="text-red-800 text-xs justify-start gap-2"
                >
                  <RiLogoutCircleLine size={18} />
                  خروج از حساب
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* modal SignIN */}
      <SignInForm />
    </header>
  );
}

export default Header;
