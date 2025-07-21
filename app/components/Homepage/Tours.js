"use client";
import toPersianDigits from "@/app/helper/toPersianDigits";
import { IoIosArrowDown } from "react-icons/io";
import TourCard from "../modules/TourCard";

function Tours({ data }) {
  console.log(data);
  return (
    <div className="px-3 mt-10">
      <h3 className="font-medium text-[20px] my-4">همه تور ها</h3>
      {/* cards tours */}

      <div className="flex gap-5 flex-wrap justify-center">
        {data ? (
          data.map((item) => <TourCard key={item.id} tour={item} />)
        ) : (
          <div>
            <p>هیچ توری برای نمایش وجود ندارد.</p>
          </div>
        )}
      </div>

      <div className="text-center w-full flex justify-center">
        <button className="flex items-center my-3 justify-center gap-2 text-[13px] text-center p-2 rounded-md">
          مشاهده بیشتر <IoIosArrowDown size={20} />
        </button>
      </div>
    </div>
  );
}

export default Tours;
