import "./globals.css";

import YekanBakh from "./styles/Fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="fn" className={YekanBakh.className} data-theme="light">
      <body dir="rtl">{children}</body>
    </html>
  );
}
