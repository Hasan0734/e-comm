import React from "react";
import Products from "../Products/Products";
import Tabs from "./Tabs";

export default function BestSeller() {
  return (
    <section className="best_seller_section">
      <div className="container mx-auto p-5">
        <div className="text-center">
          <h2 className="section_title uppercase">Best Seller</h2>
        </div>
        <Tabs />
        <Products />
      </div>
    </section>
  );
}
