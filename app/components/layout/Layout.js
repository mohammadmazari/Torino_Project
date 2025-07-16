import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="container mx-auto mt-3 px-2">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
