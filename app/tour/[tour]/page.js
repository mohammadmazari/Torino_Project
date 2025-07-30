"use client";

import Layout from "@/app/components/layout/Layout";
import Loading from "@/app/components/modules/Loading/Loading";
import toPersianDigits from "@/app/helper/toPersianDigits";
import { use, useEffect, useState } from "react";

import {
  FaBus,
  FaUserFriends,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineFastfood } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import Link from "next/link";
import getTokenFromCookie from "@/app/helper/getTokenFromCookie ";
import axiosInstance_Client from "@/app/Services/ConfigCleint";
import { toast } from "sonner";

function page(props) {
  const { tour: tourId } = use(props.params);
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axiosInstance_Client.get(`/tour/${tourId}`);
        setTour(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("خطا در دریافت تور:", error);
      }
    };

    fetchTour();
  }, [tourId]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date?.toLocaleDateString("fa-IR");
  }
  const formatDate2 = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("fa-IR-u-nu-fa", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  function getDaysAndNights(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate - startDate;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    const nights = days > 0 ? days - 1 : 0;
    return { days, nights };
  }

  const addtocarthandler = async (id) => {
    try {
      const token = getTokenFromCookie();
      const response = await axiosInstance_Client.put(
        `/basket/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("سفارش با موفقیت ثبت شد!", {
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
    } catch (error) {
      console.error("خطا:", error.response?.data || error.message);
      toast.error("ارسال سفارش با خطا مواجه شد.", {
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <Layout>
      <div className="mx-2 my-10 mb-20 flex justify-center">
        {tour ? (
          <div className="bg-white md:border md:border-gray-300 md:shadow w-full">
            <div className="rounded-2xl overflow-hidden  shadow-md md:flex md:h-[350px]  p-4 w-full md:max-w-[1188px] md:gap-10 ">
              <img
                src={tour.image}
                alt={tour.title}
                className="rounded-xl w-full h-4/5  mb-4 object-cover  md:w-2/6 "
              />

              <div className="text-right md:flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-3 md:text-[32px]">
                  {tour.title}
                </h2>

                <div className="text-sm text-gray-600 mb-3 flex items-center gap-2 md:hidden">
                  <IoLocationSharp className="text-gray-500" />
                  <span>
                    از {tour.origin?.name} به {tour.destination?.name}
                  </span>
                </div>
                <div className="ms-2 text-green-700 pb-7 font-[20px]">
                  {(() => {
                    const { days, nights } = getDaysAndNights(
                      tour.startDate,
                      tour.endDate
                    );
                    return `${toPersianDigits(days)} روز و ${toPersianDigits(
                      nights
                    )} شب`;
                  })()}
                </div>

                <div className="text-sm text-gray-600 mb-3  items-center gap-2 hidden">
                  <FaCalendarAlt className="text-gray-500" />
                  <span>
                    {formatDate(tour.startDate)} تا {formatDate(tour.endDate)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center text-sm text-gray-600 gap-5 mt-2 md:hidden">
                  <div className="flex items-center gap-1 ">
                    <FaBus size={18} className="text-green-700 ms-3" />
                    <span>{tour.fleetVehicle}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUserFriends />
                    <span>ظرفیت {tour.availableSeats} نفر</span>
                  </div>
                  {tour.insurance && (
                    <div className="flex items-center gap-1">
                      <FaShieldAlt />
                      <span>بیمه دارد</span>
                    </div>
                  )}
                </div>

                <div className="hidden md:flex gap-2 justify-between">
                  <p className="flex items-center gap-2 text-[18px] flex-row-reverse font-medium text-gray-500 my-5">
                    تورلیدر از مبدا
                    <FaRegUser />
                  </p>
                  <p className="flex items-center gap-2 text-[18px] flex-row-reverse font-medium text-gray-500 my-5">
                    برنامه صفر
                    <LuListTodo />
                  </p>
                  <p className="flex items-center gap-2 text-[18px] flex-row-reverse font-medium text-gray-500 my-5">
                    تضمین کیفیت
                    <PiMedal />
                  </p>
                </div>
                {tour.options && (
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-2 md:hidden">
                    <MdOutlineFastfood />
                    <span>{tour.options.join(" + ")}</span>
                  </div>
                )}

                <div className="flex justify-between flex-row-reverse items-center mt-6 ps-5 md:flex-row-reverse">
                  <span className="text-green-600 text-[20px] font-bold">
                    {tour.price.toLocaleString("fa-IR")} تومان
                  </span>
                  <Link href={`/basket/${tour.id}`}>
                    <button
                      onClick={() => {
                        addtocarthandler(tour.id);
                      }}
                      className="bg-green-500 text-white px-4 py-2 text-[20px] rounded-xl hover:bg-green-600 transition"
                    >
                      رزرو و خرید
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden md:block border-none mb-5">
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 rounded-xl shadow-sm bg-white text-sm">
                  <div className="flex items-center gap-5 justify-center flex-col border-l border-gray-300 py-3">
                    <span className="flex gap-2 items-center text-[18px]">
                      <FiMapPin className="text-gray-600" />
                      مبدا
                    </span>
                    <span>
                      <strong>{tour.origin?.name}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-5 justify-center flex-col border-l border-gray-300 py-3">
                    <span className="flex gap-2 items-center text-[18px]">
                      <MdDateRange className="text-gray-600" />
                      تاریخ رفت
                    </span>
                    <span>
                      <strong>{formatDate(tour.startDate)}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-5 justify-center flex-col border-l border-gray-300 py-3">
                    <span className="flex gap-2 items-center text-[18px]">
                      <MdDateRange className="text-gray-600" />
                      تاریخ برگشت
                    </span>
                    <span>
                      <strong>{formatDate2(tour.endDate)}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-5 justify-center flex-col border-l border-gray-300 py-3">
                    <span className="flex gap-2 items-center text-[18px]">
                      <FaCarAlt className="text-gray-600" />
                      حمل و نقل
                    </span>
                    <span>
                      <strong>{tour.fleetVehicle}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-5 justify-center flex-col border-l border-gray-300 py-3">
                    <span className="flex gap-2 items-center text-[18px]">
                      <LuUsersRound className="text-gray-600" />
                      ظرفیت
                    </span>
                    <span>
                      <strong>
                        حداکثر {toPersianDigits(tour.availableSeats)} نفر
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-5 justify-center flex-col border-l border-gray-300 py-3">
                    <span className="flex gap-2 items-center text-[18px]">
                      <FaShieldAlt className="text-gray-600" />
                      بیمه
                    </span>
                    <span>
                      <strong>{tour.insurance ? "دارد" : "ندارد"}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[400px] ">
            <Loading />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default page;
