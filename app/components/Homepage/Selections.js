"use client";

import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoEarth } from "react-icons/io5";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import SimpleDropdown from "../modules/SimpleDropdown";
import axiosInstance from "@/app/Services/Config";

export default function Selections() {
  const [data, setData] = useState({
    origin: null,
    destination: null,
    date: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const provinces = [
    { label: "تهران" },
    { label: "خراسان رضوی" },
    { label: "اصفهان" },
    { label: "فارس" },
    { label: "آذربایجان شرقی" },
    { label: "البرز" },
    { label: "قم" },
    { label: "خوزستان" },
    { label: "کرمان" },
    { label: "گیلان" },
    { label: "سیستان و بلوچستان" },
    { label: "آذربایجان غربی" },
    { label: "یزد" },
    { label: "قزوین" },
    { label: "هرمزگان" },
    { label: "مرکزی" },
    { label: "همدان" },
    { label: "لرستان" },
    { label: "کردستان" },
    { label: "گلستان" },
    { label: "مازندران" },
    { label: "بوشهر" },
    { label: "زنجان" },
    { label: "اردبیل" },
    { label: "چهارمحال و بختیاری" },
    { label: "خراسان شمالی" },
    { label: "خراسان جنوبی" },
    { label: "ایلام" },
    { label: "کهگیلویه و بویراحمد" },
  ];

  const handleOriginChange = (value) => {
    setData((prev) => ({ ...prev, origin: value?.label || null }));
  };

  const handleDestinationChange = (value) => {
    setData((prev) => ({ ...prev, destination: value?.label || null }));
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await axiosInstance.get("/tour");

      const filtered = res.data.filter((tour) => {
        const originMatch = tour.origin?.name === data.origin;
        const destinationMatch = tour.destination?.name === data.destination;
        const dateMatch = tour.startDate?.startsWith(data.date);
        return originMatch && destinationMatch && dateMatch;
      });

      if (filtered.length === 0) {
        setError("تور مطابق با شرایط یافت نشد.");
      } else {
        setResult(filtered);
      }
    } catch (err) {
      console.error("خطا در دریافت اطلاعات:", err);
      setError("مشکلی در دریافت اطلاعات وجود دارد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-5 mt-10 flex flex-wrap justify-center gap-4">
      <div className="flex flex-wrap md:flex-nowrap w-full gap-3 justify-center">
        <div className="w-full sm:w-[48%] md:w-1/5">
          <SimpleDropdown
            options={provinces}
            defaultText="استان مبدا"
            defaultIcon={<FiMapPin size={19} />}
            sele={handleOriginChange}
            value={data.origin ? { label: data.origin } : null}
          />
        </div>

        <div className="w-full sm:w-[48%] md:w-1/5">
          <SimpleDropdown
            options={provinces}
            defaultText="استان مقصد"
            defaultIcon={<IoEarth size={19} />}
            sele={handleDestinationChange}
            value={data.destination ? { label: data.destination } : null}
          />
        </div>

        <div className="w-full md:w-1/5">
          <DatePicker
            value={data.date}
            onChange={(value) =>
              setData((prev) => ({
                ...prev,
                date: value?.format?.("YYYY-MM-DD") || null,
              }))
            }
            format="YYYY/MM/DD"
            calendar={persian}
            placeholder="تاریخ"
            locale={persian_fa}
            style={{
              padding: "20px",
              border: "1px solid gray",
              borderRadius: "6px",
              width: "100%",
              backgroundColor: "#f8f8f8",
              textAlign: "center",
            }}
          />
        </div>

        <div className="w-full md:w-1/5">
          <button
            onClick={handleSearch}
            disabled={loading}
            className={`w-full h-full px-4 text-white rounded-lg p-2 transition-all ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-700"
            }`}
          >
            {loading ? "در حال جستجو..." : "جستجو"}
          </button>
        </div>
      </div>

      {error && (
        <div className="w-full text-center text-red-500 mt-4 text-sm">
          {error}
        </div>
      )}

      {result && result.length > 0 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {result.map((tour) => (
            <div
              key={tour.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">{tour.title}</h2>
                <p className="text-gray-600 text-sm">
                  از <span className="font-semibold">{tour.origin?.name}</span> به {" "}
                  <span className="font-semibold">{tour.destination?.name}</span>
                </p>
                <p className="text-gray-600 text-sm">
                  تاریخ شروع: <span className="font-medium">{tour.startDate?.slice(0, 10)}</span>
                </p>
                <p className="text-green-700 font-bold text-md mt-1">
                  {tour.price.toLocaleString()} تومان
                </p>

                {tour.fleetVehicle && (
                  <p className="text-gray-500 text-sm">
                    وسیله نقلیه: {tour.fleetVehicle}
                  </p>
                )}

                {tour.options?.length > 0 && (
                  <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
                    {tour.options.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                )}

                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg w-full transition">
                  مشاهده جزئیات
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
