import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-5 py-5">
      <Header />
      <Navbar />
      {children}
    </div>
  );
}
