"use client";
import React, { use, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
function SideBarUser() {
  const params = usePathname();
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    switch (params) {
      case "/user/profile":
        setActiveIndex(0);
        break;
      case "/user/tours":
        setActiveIndex(1);
        break;
      case "/user/transactions":
        setActiveIndex(2);
        break;
      default:
        setActiveIndex(0);
    }
  }, []);
  const router = useRouter();

  const items = [
    {
      label: "پروفایل",
      path: "/user/profile",
      icon: <FaUser className="ml-2" />,
    },
    {
      label: "تورهای من",
      path: "/user/tours",
      icon: <AiOutlineSafety className="ml-2" />,
    },
    {
      label: "تراکنش ها",
      path: "/user/transactions",
      icon: <MdPayment className="ml-2" />,
    },
  ];

  const handleClick = (idx, path) => {
    setActiveIndex(idx);
    router.push(path);
  };

  return (
    <div className="space-y-2 w-full md:w-[284px] flex flex-col border h-fit border-gray-300 rounded-2xl pb-2">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={
            (activeIndex === idx
              ? "bg-green-100 text-green-800 font-semibold "
              : "bg-white text-black ") +
            "shadow w-full p-3 text-center cursor-pointer hover:bg-gray-50 text-xs md:text-sm flex items-center"
          }
          onClick={() => handleClick(idx, item.path)}
        >
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default SideBarUser;
