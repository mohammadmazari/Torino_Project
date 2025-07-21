"use cleint"
import SideBarUser from "../modules/SideBarUser";

const transactions = [
  {
    id: "13059420",
    type: "ثبت نام در تور گردشگری",
    amount: "۱۲،۰۰۰،۰۰۰",
    date: "۱۴۰۳/۰۱/۲۰",
    time: "۱۴:۲۴",
  },
  {
    id: "13059419",
    type: "ثبت نام در تور گردشگری",
    amount: "۱۲،۰۰۰،۰۰۰",
    date: "۱۴۰۳/۰۱/۲۰",
    time: "۱۴:۲۴",
  },
  {
    id: "13059418",
    type: "ثبت نام در تور گردشگری",
    amount: "۱۲،۰۰۰،۰۰۰",
    date: "۱۴۰۳/۰۱/۲۰",
    time: "۱۴:۲۴",
  },
  {
    id: "13059417",
    type: "ثبت نام در تور گردشگری",
    amount: "۱۲،۰۰۰،۰۰۰",
    date: "۱۴۰۳/۰۱/۲۰",
    time: "۱۴:۲۴",
  },
];

export default function ProfileTransactions() {
  return (
    <div className="p-4 md:p-10  min-h-screen font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <SideBarUser />
        {/* Content */}
        <main className="order-1 lg:order-2 col-span-1 lg:col-span-3 space-y-12">
          {/* Table */}
          <div>
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-300 bg-white">
              <table className="w-full text-sm text-right">
                <thead className=" via-white to-blue-100">
                  <tr className="text-gray-700 text-xs md:text-sm">
                    <th className=" text-center px-6 py-3 ">تاریخ و ساعت</th>
                    <th className=" text-center px-6 py-3">مبلغ (تومان)</th>
                    <th className=" text-center px-6 py-3">نوع تراکنش</th>
                    <th className=" text-center px-6 py-3">شماره سفارش</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((trx, idx) => (
                    <tr
                      key={trx.id}
                      className={`text-xs md:text-sm border-t border-gray-200 transition hover:bg-blue-50 ${
                        idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-6 text-center py-3 whitespace-nowrap font-medium text-gray-700">
                        <span className="inline-flex items-center gap-1">
                          {trx.date} - {trx.time}
                        </span>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
