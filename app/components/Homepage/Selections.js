"use client";
import { FiMapPin } from "react-icons/fi";
import SimpleDropdown from "../modules/SimpleDropdown";
import {} from "react-icons/ci";
import { IoEarth } from "react-icons/io5";

import DatePicker, { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import Icon from "react-multi-date-picker/components/icon";
import DateCalender from "@/app/helper/DateCalender";
import InputIcon from "react-multi-date-picker/components/input_icon";
export default function Selections() {
  const [date, setDate] = useState(null);
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

  return (
    <div className="px-5 mt-4 md:flex gap-3 md:justify-center">
      <div className="flex justify-center items-center">
        <div className="p-3 w-1/2">
          <SimpleDropdown
            options={provinces}
            defaultText="استان مبدا"
            defaultIcon={<FiMapPin size={19} />}
          />
        </div>
        <div className="p-3 w-1/2">
          <SimpleDropdown
            options={provinces}
            defaultText="استان مقصد"
            defaultIcon={<IoEarth size={19} />}
          />
        </div>
      </div>
      <div className="md:flex md:items-center gap-6">
        <div className="w-full text-center  flex justify-center items-center ">
          <DatePicker
            value={date}
            onChange={setDate}
            format="YYYY/MM/DD"
            calendar={persian}
            placeholder="تاریخ"
            locale={persian_fa}
            style={{
              padding: "20px",
              border: "1px solid gray",
              font: "bold",
              color: "black",
              opacity: "100",
              borderRadius: "6px",
              width: "100%",
              backgroundColor: "#f8f8f8",
              textAlign: "center",
              
            }}
          />
        </div>
        <button className="w-full my-5 px-4 text-white rounded-lg p-2 bg-green-700">
          جستجو
        </button>
      </div>
    </div>
  );
}
