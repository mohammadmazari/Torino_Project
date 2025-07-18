"use client";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, Mobile }) {
  return (
    <div className="container mx-auto mt-3 ">
      <Header Mobile={Mobile} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
