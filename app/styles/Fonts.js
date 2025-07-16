import localFont from "next/font/local";

const YekanBakh = localFont({
  src: [
    {
      path: "../../public/Fonts/YekanBakh/YekanBakh-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/YekanBakh/YekanBakh-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/YekanBakh/YekanBakh-Regular.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/YekanBakh/YekanBakh-Thin.woff",
      weight: "100",
      style: "normal",
    },
  ],
});

export default YekanBakh;
