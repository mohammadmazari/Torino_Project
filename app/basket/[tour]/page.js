"use client";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Layout from "@/app/components/layout/Layout";
import Loading from "@/app/components/modules/Loading/Loading";
import axiosInstance from "@/app/Services/Config";
import { use, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import getTokenFromCookie from "@/app/helper/getTokenFromCookie ";
import { useRouter } from "next/navigation";

function page(props) {
  const { tour } = use(props.params);
  const [tourData, settourData] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axiosInstance.get(`/tour/${tour}`);
        settourData(res.data);
      } catch (error) {
        console.log(error);
        settourData(null);
      }
    };
    fetchTour();
  }, [settourData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.birthDate = birthDate?.format("YYYY/MM/DD"); // اضافه کن
    console.log(data.birthDate);

    try {
      const token = getTokenFromCookie();
      const response = await axiosInstance.post(
        "/order",
        {
          nationalCode: data.nationalCode,
          fullName: data.fullName,
          gender: data.gender,
          birthDate: data.birthDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("سفارش با موفقیت ثبت شد!");
      router.push("/")
    } catch (error) {
      console.error("خطا:", error.response?.data || error.message);
      alert("ارسال سفارش با خطا مواجه شد.");
    }
  };

  function getDaysAndNights(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate - startDate;
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const nights = days - 1;
    return { days, nights };
  }

  function formatPrice(price) {
    return price.toLocaleString("fa-IR");
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fa-IR");
  }

  return (
    <Layout>
      <div>
        <div className="p-4 py-20 pb-50">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/3 bg-white shadow border border-gray-300 rounded p-4">
              <h2 className="text-lg font-semibold mb-4 text-right">
                مشخصات مسافر
              </h2>
              <form
                className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="border rounded p-2 w-full"
                    {...register("fullName", {
                      required: "نام و نام خانوادگی الزامی است",
                    })}
                  />
                  {errors.fullname && (
                    <span className="text-red-500 text-xs">
                      {errors.fullname.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="کدملی"
                    className="border rounded p-2 w-full"
                    {...register("nationalCode", {
                      required: "کدملی الزامی است",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "کدملی باید ۱۰ رقم باشد",
                      },
                    })}
                  />
                  {errors.nationalId && (
                    <span className="text-red-500 text-xs">
                      {errors.nationalId.message}
                    </span>
                  )}
                </div>
                <div>
                  <div className="text-right w-full">
                    <DatePicker
                      value={birthDate}
                      onChange={(date) => {
                        setBirthDate(date);
                      }}
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      inputClass="border rounded p-2 w-full"
                      placeholder="انتخاب تاریخ تولد"
                      format="YYYY/MM/DD"
                      style={{ width: "100%" }}
                      className="w-2/5"
                    />
                    {errors.birthDate && (
                      <span className="text-red-500 text-xs">
                        {errors.birthDate.message}
                      </span>
                    )}
                  </div>
                  {errors.birthDate && (
                    <span className="text-red-500 text-xs">
                      {errors.birthDate.message}
                    </span>
                  )}
                </div>
                <div>
                  <select
                    className="border rounded p-2 w-full"
                    {...register("gender", { required: "جنسیت الزامی است" })}
                  >
                    <option value="">جنسیت</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-500 text-xs">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
                {/* حذف دکمه ثبت اطلاعات از اینجا */}
              </form>
            </div>
            {tourData ? (
              <div className="w-full lg:w-1/3 bg-white shadow rounded p-4 text-right flex flex-col border border-gray-300 py-3 justify-between">
                <div>
                  <h3 className="font-semibold mb-2"> {tourData.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {
                      getDaysAndNights(tourData.startDate, tourData.endDate)
                        .days
                    }{" "}
                    روز و{" "}
                    {
                      getDaysAndNights(tourData.startDate, tourData.endDate)
                        .nights
                    }
                    شب
                    <br />
                    <span className="text-xs">
                      از {formatDate(tourData.startDate)} تا{" "}
                      {formatDate(tourData.endDate)}
                    </span>
                  </p>
                  <div className="mb-4">
                    <span className="text-gray-500">قیمت نهایی</span>
                    <div className="text-blue-600 text-xl font-bold">
                      {formatPrice(tourData.price)} تومان
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600"
                  >
                    ثبت و خرید نهایی
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex justify-center items-center py-10">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default page;
