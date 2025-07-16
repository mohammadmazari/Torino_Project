import { FaUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { PiAirplaneLight } from "react-icons/pi";
import { PiSoundcloudLogoLight } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import Link from "next/link";
function Header() {
  return (
    <header>
      {/* Desctop Design */}
      <div className="hidden lg:flex justify-between ">
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
        <div>
          <button className="border-1 border-green-800 p-2 px-4 rounded-md text-green-700 flex items-center gap-2 ">
            <FaUser /> ورود و
            <span className="border-r-green-800 border-[0.1em] h-[23px] "></span>{" "}
            ثبت نام
          </button>
        </div>
      </div>

      {/* Mobile Design */}
      <div className=" flex justify-between px-4">
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
            <ul className="menu flex gap-6 bg-base-200 text-base-content min-h-full w-80 p-4 text-[16px] font-normal">
              {/* Sidebar content here */}
              <li>
                <Link href="#" className="text-green-800">
                  <AiFillHome size={20}/> صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="#">
                  <PiAirplaneLight size={20}/> خدمات گردشگری
                </Link>
              </li>
              <li>
                <Link href="#">
                  <PiSoundcloudLogoLight size={20}/> درباره ما
                </Link>
              </li>
              <li>
                <Link href="#">
                  <CiPhone size={20}/> تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-green-800 rounded-lg p-2">
          <AiOutlineLogin size={25} color="green" />
        </div>
      </div>
    </header>
  );
}

export default Header;
