import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      <main>{children}</main>

      <Footer/>
    </div>
  );
}
