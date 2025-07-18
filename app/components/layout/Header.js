"use client";
import { FaUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { PiAirplaneLight } from "react-icons/pi";
import { PiSoundcloudLogoLight } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import SignInForm from "../auth/SignInForm";

function Header({ Mobile }) {
  const SignInhandler = () => {};

  return (
    <header>
      {/* Desctop Design */}
      <div className="hidden md:flex justify-between ">
        <div className="flex gap-10">
          <img
            className="w-[145px] h-[44px]"
            src="/images/Homepage/icon.svg"
            alt="logo"
          />
          <ul className="flex gap-5 font-medium items-center">
            <li>صفحه اصلی</li>
            <li>خدمات گردشکری</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        {Mobile ? (
          <div>
            <div className="dropdown cursor-pointer">
              <div tabIndex={0} role="button" className=" m-1">
                <p className="flex items-center gap-2 text-green-600">
                  <FaUserAlt />
                  <span>{Mobile}</span>
                  <FaAngleDown />
                </p>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                const modal = document.getElementById("my_modal_5");
                modal.showModal();
                SignInhandler();
              }}
              className="border-1 border-green-800 p-2 px-4 rounded-md text-green-700 flex items-center gap-2 "
            >
              <FaUser /> ورود و
              <span className="border-r-green-800 border-[0.1em] h-[23px] "></span>{" "}
              ثبت نام
            </button>
          </div>
        )}
      </div>

      {/* Mobile Design */}
      <div className="flex md:hidden justify-between px-4">
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
            <ul className="menu flex gap-6 bg-base-200  min-h-full w-80 p-4 text-[16px] font-normal">
              {/* Sidebar content here */}
              <li>
                <Link href="#" className="text-green-800">
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

        {!Mobile ? (
          <div className="">
            <button
              className="border border-green-800 rounded-lg p-2"
              onClick={() => {
                const modal = document.getElementById("my_modal_5");
                modal.showModal();
                SignInhandler();
              }}
            >
              <AiOutlineLogin size={25} color="green" />
            </button>
          </div>
        ) : (
          <div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" m-1">
                <p className="flex items-center gap-2 text-green-600">
                  <FaUserAlt />
                  <span>{Mobile}</span>
                  <FaAngleDown />
                </p>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* modal SignIN */}
      <SignInForm />
    </header>
  );
}

export default Header;
