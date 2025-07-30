import Link from "next/link";
import { FaCar } from "react-icons/fa";
function TourCard({ tour }) {
  const startDate = new Date(tour.startDate).toLocaleDateString("fa-IR");
  const endDate = new Date(tour.endDate).toLocaleDateString("fa-IR");

  const days = Math.ceil(
    (new Date(tour.endDate) - new Date(tour.startDate)) / (1000 * 60 * 60 * 24)
  );

  const formattedPrice = tour.price.toLocaleString("fa-IR");

  return (
    <div
      className="w-full pb-2 max-w-xs sm:max-w-[220px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col mx-auto min-h-0"
      style={{ height: "350px" }}
    >
      <div className="relative">
        <img
          src={tour?.image}
          alt={tour?.title}
          className="w-full h-32 sm:h-36 object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full shadow">
          {tour.availableSeats} صندلی باقی
        </span>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-base font-extrabold text-gray-900 mb-1 truncate">
          {tour.title}
        </h3>
        <p className="text-gray-500 text-xs mb-1">
          {startDate} تا {endDate} <span className="mx-1">|</span> {days} روزه
        </p>

        <div className="flex items-center gap-2 text-gray-600 text-xs mb-1">
          <span className="inline-flex items-center gap-1">
            <FaCar size={18} className="text-green-700 ms-3" />
            {tour.fleetVehicle === "Bus" ? "اتوبوس" : tour.fleetVehicle}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-1 mt-2">
          {tour.options.map((option, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded-full"
            >
              {option}
            </span>
          ))}
          {tour.insurance && (
            <p className="bg-green-100 mt-1 block  text-green-700 text-xs px-2 py-0.5 rounded-full">
              بیمه مسافرتی
            </p>
          )}
        </div>

        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
          <Link href={`/tour/${tour.id}`} className="text-xs bg-green-700 p-2 rounded-md text-white px-3 font-bold">
            رزور
          </Link>
          <span className="text-lg font-bold text-blue-700">
            {formattedPrice}
            <span className="text-base font-normal">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
