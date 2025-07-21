import React from "react";
import Layout from "../layout/Layout";
import SideBarUser from "../modules/SideBarUser";
import { IoEarthOutline } from "react-icons/io5";
const tours = [
  {
    id: "103095476",
    title: "تور اقلیم کردستان",
    city: "تهران به سلیمانیه",
    transport: "سفر با هواپیما",
    date: "دوشنبه ۱۵ شهریور ۱۴۰۳ - جمعه ۱۹ شهریور ۱۴۰۳",
    price: "۱۹،۸۰۰،۰۰۰",
    status: "paid",
  },
  {
    id: "103095477",
    title: "تور اقلیم کردستان",
    city: "تهران به سلیمانیه",
    transport: "سفر با کشتی",
    date: "دوشنبه ۱۵ شهریور ۱۴۰۳ - جمعه ۱۹ شهریور ۱۴۰۳",
    price: "۱۹،۸۰۰،۰۰۰",
    status: "paid",
  },
  {
    id: "103095478",
    title: "تور اقلیم کردستان",
    city: "تهران به سلیمانیه",
    transport: "سفر با اتوبوس",
    date: "دوشنبه ۱۵ شهریور ۱۴۰۳ - جمعه ۱۹ شهریور ۱۴۰۳",
    price: "۱۹،۸۰۰،۰۰۰",
    status: "pending",
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "paid":
      return (
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
          پرداخت شده
        </span>
      );
    case "pending":
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
          در حال بررسی
        </span>
      );
    default:
      return null;
  }
};

export default function ProfileToursPage() {
  return (
    <Layout>
      <div className="p-4 md:p-10  bg-gray-50 min-h-screen font-sans flex-col items-center md:items-start md:flex-row flex justify-between gap-10">
        <div className="w-full md:w-[350px]">
          <SideBarUser />
        </div>
        <div className="w-full flex-grow mx-auto">
          <div className="space-y-4 w-full">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-md p-4 border border-gray-300"
              >
                <div className="flex flex-col space-y-2 text-right">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xs md:text-md font-medium flex items-center gap-2 flex-row-reverse">
                      {tour.title} <IoEarthOutline />
                    </h2>
                    <p className="hidden md:block text-xs md:text-sm text-gray-700">
                      {tour.city} —
                      <span className="font-light md:font-medium text-black">
                        {tour.transport}
                      </span>
                    </p>
                    <p className="text-xs md:text-sm">{getStatusBadge(tour.status)}</p>
                  </div>
                  <p className="md:hidden text-xs md:text-sm text-gray-700">
                    {tour.city} —
                    <span className="font-light md:font-medium text-black">
                      {tour.transport}
                    </span>
                  </p>
                  <p className="text-xs font-light md:text-sm text-gray-600 my-2">
                    تاریخ رفت و برگشت: {tour.date}
                  </p>
                  <p className="text-xs font-light md:text-sm text-gray-500 my-2">
                    شماره تور: {tour.id}
                  </p>
                  <p className="text-xs md:text-sm font-bold text-green-700 flex justify-between border-t items-center border-gray-400 pt-4 my-4">
                    <span>مبلغ پرداخت شده:</span>
                    <span>{tour.price} تومان</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
