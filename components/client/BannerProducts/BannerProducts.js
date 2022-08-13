import React from "react";
export default function BannerProducts() {
  return (
    <div className="banner_product">
      <div className="container mx-auto px-5 py-5 ">
        <div className="grid grid-cols-3 bg-[#f6f6f6]">
          {/* first card */}
          <div
            className="card first_card rounded-md relative"
            style={{ background: "url(/assets/product/product3.png)" }}
          >
            <h3 className="uppercase title">Fs - Quilted Maxi Cross Bag</h3>
            <div className="absolute discount_area">
              <div className="flex gap-3 ">
                <span className="prev_price">$534.33</span>
                <span className="discount">24% Off</span>
              </div>
            </div>
            <div className="absolute price">
              <h3 className="">$299.43</h3>
            </div>
          </div>
          {/* second card */}
          <div
            className="card second_card rounded-md relative"
            style={{ background: "url(/assets/product/product1.png)" }}
          >
            <div className="flex justify-between">
              <h3 className=" title">
                Fs - Nike Air <br /> Max 270 React...
              </h3>
              <h3 className="price">$299.43</h3>
            </div>
            <div className="absolute discount_area">
              <div className="flex gap-3 ">
                <span className="prev_price">$534.33</span>
                <span className="discount">24% Off</span>
              </div>
            </div>
          </div>
          {/* third card */}
          <div
            className="card third_card rounded-md relative"
            style={{ background: "url(/assets/product/product2.png)" }}
          >
            <h3 className="uppercase title">
              Fs - Nike Air <br /> Max 270 React...
            </h3>

            <div className="discount_area">
              <div className="flex gap-3 ">
                <span className="prev_price">$534.33</span>
                <span className="discount">24% Off</span>
              </div>
            </div>
            <div className="absolute price">
              <h3 className="">$299.43</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
