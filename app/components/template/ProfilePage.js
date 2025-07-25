"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../layout/Layout";
import SideBarUser from "../modules/SideBarUser";
import { GoPencil } from "react-icons/go";
function ProfilePage() {
  const [editPersonal, setEditPersonal] = useState(false);
  const [editBank, setEditBank] = useState(false);
  const [editAccount, setEditAccount] = useState(false);

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: "مانیا رحیمی",
      nationalId: "3727156723",
      gender: "زن",
      birthDate: "1383/10/17",
      cardNumber: "6037991574658520",
      shaba: "",
      accountNumber: "",
      email: "",
      mobile: "09374511215",
    },
  });

  const onSubmit = (data) => {
    setEditPersonal(false);
    setEditBank(false);
    setEditAccount(false);
    // اینجا می‌توانید داده‌ها را ذخیره کنید
  };

  const values = watch();

  const inputClass =
    "border text-xs md:text-sm border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-green-400 transition duration-150 bg-gray-50 placeholder-gray-400";

  const saveBtnClass =
    "text-xs md:text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg shadow transition duration-150";
  const cancelBtnClass =
    "text-xs md:text-sm bg-gray-300 hover:bg-gray-300 text-gray-700 px-4 py-1 rounded-lg transition duration-150";

  return (
    <Layout>
      <div className="p-4 md:p-8 space-y-6 mb-10" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <SideBarUser />
          </div>
          <div className="w-full space-y-4 lg:col-span-2">
            {/* Account Info */}
            <div className="bg-white shadow border border-gray-300 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xs md:text-sm font-medium text-gray-700">
                  اطلاعات حساب کاربری
                </h2>
                <button
                  className="text-xs md:text-sm text-blue-500 hover:underline flex items-center gap-1 flex-row-reverse"
                  onClick={() => setEditAccount(true)}
                >
                  افزودن <GoPencil />
                </button>
              </div>
              {editAccount ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                  <input
                    {...register("email")}
                    placeholder="ایمیل"
                    className={inputClass}
                  />
                  <input
                    {...register("mobile")}
                    placeholder="شماره موبایل"
                    className={inputClass}
                  />
                  <div className="flex gap-2 mt-2">
                    <button type="submit" className={saveBtnClass}>
                      ذخیره
                    </button>
                    <button
                      type="button"
                      className={cancelBtnClass}
                      onClick={() => setEditAccount(false)}
                    >
                      لغو
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="text-xs mt-6 md:text-sm text-gray-600">
                    ایمیل: {values.email || "—"}
                  </div>
                  <div className="text-xs mt-3 md:text-sm text-gray-600">
                    شماره موبایل: {values.mobile || "—"}
                  </div>
                </>
              )}
            </div>

            {/* Personal Info */}
            <div className="bg-white shadow border border-gray-300 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-medium text-xs md:text-sm text-gray-700">
                  اطلاعات شخصی
                </h2>
                <button
                  className="text-xs md:text-sm text-blue-500 hover:underline flex items-center gap-1 flex-row-reverse"
                  onClick={() => setEditPersonal(true)}
                >
                  ویرایش اطلاعات <GoPencil />
                </button>
              </div>
              {editPersonal ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600"
                >
                  <input
                    {...register("name")}
                    placeholder="نام و نام خانوادگی"
                    className={inputClass}
                  />
                  <input
                    {...register("nationalId")}
                    placeholder="کدملی"
                    className={inputClass}
                  />
                  <input
                    {...register("gender")}
                    placeholder="جنسیت"
                    className={inputClass}
                  />
                  <input
                    {...register("birthDate")}
                    placeholder="تاریخ تولد"
                    className={inputClass}
                  />
                  <div className="col-span-2 flex gap-2 mt-2">
                    <button type="submit" className={saveBtnClass}>
                      ذخیره
                    </button>
                    <button
                      type="button"
                      className={cancelBtnClass}
                      onClick={() => setEditPersonal(false)}
                    >
                      لغو
                    </button>
                  </div>
                </form>
              ) : (
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mt-6 md:text-sm text-gray-600">
                  <div>نام و نام خانوادگی: {values.name}</div>
                  <div>کدملی: {values.nationalId}</div>
                  <div>جنسیت: {values.gender}</div>
                  <div>تاریخ تولد: {values.birthDate}</div>
                </div>
              )}
            </div>

            {/* Bank Info */}
            <div className="bg-white shadow border border-gray-300 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xs md:text-sm font-medium text-gray-700">
                  اطلاعات حساب بانکی
                </h2>
                <button
                  className="text-xs md:text-sm text-blue-500 hover:underline flex items-center gap-1 flex-row-reverse"
                  onClick={() => setEditBank(true)}
                >
                  ویرایش اطلاعات <GoPencil />
                </button>
              </div>
              {editBank ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600"
                >
                  <input
                    {...register("cardNumber")}
                    placeholder="شماره کارت"
                    className={inputClass}
                  />
                  <input
                    {...register("shaba")}
                    placeholder="شماره شبا"
                    className={inputClass}
                  />
                  <input
                    {...register("accountNumber")}
                    placeholder="شماره حساب"
                    className={inputClass}
                  />
                  <div className="col-span-2 flex gap-2 mt-2">
                    <button type="submit" className={saveBtnClass}>
                      ذخیره
                    </button>
                    <button
                      type="button"
                      className={cancelBtnClass}
                      onClick={() => setEditBank(false)}
                    >
                      لغو
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm mt-6 text-gray-600">
                  <div>شماره کارت: {values.cardNumber}</div>
                  <div>شماره شبا: {values.shaba || "—"}</div>
                  <div>شماره حساب: {values.accountNumber || "—"}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
