"use client";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

import { useState } from "react";
import { toast } from "sonner";

import ToasterAPI from "../modules/Toaster";

function SignInForm() {
  const [step, setStep] = useState("mobile"); // mobile | otp
  const [mobile, setMobile] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    formState: { errors: errorsOtp },
    reset: resetOtp,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:6500/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: data.mobile }),
      });
      if (response.ok) {
        setMobile(data.mobile);
        setStep("otp");
        toast.success("کد تایید به شماره موبایل شما ارسال شد.", {
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
      } else {
        alert("ارسال ناموفق بود.");
      }
    } catch (error) {
      toast.error("خطا در ارتباط با سرور.", {
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    }
  };

  const onSubmitOtp = async (data) => {
    try {
      const response = await fetch("http://localhost:6500/auth/check-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, code: data.otp }),
      });
      if (response.ok) {
        toast.success("ورود موفقیت آمیز بود!", {
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        setStep("mobile");
        reset();
        resetOtp();
        const data = await response.json();
        document.cookie = `accessToken=${data.accessToken}; path=/;`;
        window.location.reload();
      } else {
        toast.error("کد وارد شده صحیح نیست.", {
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
      }
    } catch (error) {
      toast.error("خطا در ارتباط با سرور.", {
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <dialog
      id="my_modal_5"
      className="modal pt-10 modal-bottom sm:modal-middle"
    >
      <ToasterAPI />
      <div className="modal-box" style={{ direction: "rtl" }}>
        <div className="p-0 m-0  text-end">
          <form method="dialog">
            <button>
              <IoIosClose size={20} />
            </button>
          </form>
        </div>
        <h2 className="text-center my-4 text-[21px] md:text-[25px]">
          ورود به تورینو
        </h2>
        {step === "mobile" && (
          <>
            <h3 className="text-[16px] md:text-[16px] font-light">
              ورود با شماره موبایل
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="tel"
                placeholder="شماره موبایل"
                {...register("mobile", {
                  required: "شماره موبایل الزامی است",
                  pattern: {
                    value: /^09\d{9}$/,
                    message: "شماره موبایل معتبر وارد کنید",
                  },
                })}
                className="input input-bordered w-full my-3 focus:outline-none  focus:ring-blue-500 "
              />
              {errors.mobile && (
                <span className="text-red-500 text-sm">
                  {errors.mobile.message}
                </span>
              )}
              <input
                type="submit"
                className="btn bg-green-600 rounded-md text-white w-full my-4"
                value="ارسال کد ورود"
              />
            </form>
          </>
        )}
        {step === "otp" && (
          <>
            <h3 className="text-[16px] md:text-[16px] font-light mb-2">
              کد ارسال شده به شماره {mobile} را وارد کنید
            </h3>
            <form onSubmit={handleSubmitOtp(onSubmitOtp)}>
              <input
                type="text"
                maxLength={6}
                placeholder="کد تایید"
                {...registerOtp("otp", {
                  required: "کد تایید الزامی است",
                  pattern: {
                    value: /^\d{6}$/,
                    message: "کد تایید ۶ رقمی وارد کنید",
                  },
                })}
                className="input input-bordered w-full my-3 focus:outline-none focus:ring-blue-500 text-center tracking-widest text-lg"
              />
              {errorsOtp.otp && (
                <span className="text-red-500 text-sm">
                  {errorsOtp.otp.message}
                </span>
              )}
              <input
                type="submit"
                className="btn bg-blue-600 rounded-md text-white w-full my-4"
                value="تایید کد"
              />
              <button
                type="button"
                className="btn btn-link w-full text-gray-500"
                onClick={() => setStep("mobile")}
              >
                ویرایش شماره موبایل
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

export default SignInForm;
