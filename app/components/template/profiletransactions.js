"use client";

import SideBarUser from "../modules/SideBarUser";
import notfoundtransactions from "../../../public/animtions/transactions.json";
import Lottie from "lottie-react";
export default function ProfileTransactions({ transactions = [] }) {
  const formattedTransactions = transactions.map((trx) => {
    const dateObj = new Date(trx.createdAt);
    const date = dateObj.toLocaleDateString("fa-IR");
    const time = dateObj.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      id: trx.id,
      amount: trx.amount.toLocaleString("fa-IR"),
      type: trx.type,
      date,
      time,
    };
  });

  return (
    <div className="p-4 md:p-10 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <SideBarUser />

        {/* Content */}
        <main className="order-1 lg:order-2 col-span-1 lg:col-span-3 space-y-12">
          <div>
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-300 bg-white">
              {formattedTransactions.length > 0 ? (
                formattedTransactions.map((trx, idx) => (
                  <table className="w-full text-sm text-right"  key={trx.id}>
                    <thead className="bg-gray-100 text-gray-700 font-bold">
                      <tr className="text-xs md:text-sm">
                        <th className="text-center px-6 py-3">تاریخ و ساعت</th>
                        <th className="text-center px-6 py-3">مبلغ (تومان)</th>
                        <th className="text-center px-6 py-3">نوع تراکنش</th>
                        <th className="text-center px-6 py-3">شماره سفارش</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                       
                        className={`text-xs md:text-sm border-t border-gray-200 transition hover:bg-blue-50 ${
                          idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-6 text-center py-3 whitespace-nowrap font-medium text-gray-700">
                          {trx.date} - {trx.time}
                        </td>
                        <td className="px-6 text-center py-3 whitespace-nowrap text-green-700 font-bold">
                          {trx.amount}
                        </td>
                        <td className="px-6 text-center py-3 whitespace-nowrap">
                          {trx.type}
                        </td>
                        <td className="px-6 text-center py-3 whitespace-nowrap text-gray-500">
                          سفارش {trx.id}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))
              ) : (
                <div className="flex justify-center items-center">
                  <div className="w-full px-3 md:w-[350px] flex flex-col mt-10 justify-center items-center">
                    <p className="text-xs md:text-sm">تراکنش یافت نشد</p>
                    <Lottie animationData={notfoundtransactions} loop={true} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
