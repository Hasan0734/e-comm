import React, { useEffect, useState } from "react";
import BannerProducts from "../BannerProducts/BannerProducts";

export default function OfferBanner() {
  return (
    <section className="relative mb-[300px]">
      <div
        className="banner_section flex items-center"
        style={{ background: `url(${"/assets/offer-banner.png"})` }}
      >
        <div className="container mx-auto px-5 py-5">
          <h1 className="banner_title">
            Super Flash Sale <br /> 50% Off
          </h1>
        </div>
      </div>
      <BannerProducts />
    </section>
  );
}
