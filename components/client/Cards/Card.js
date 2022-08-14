import React from "react";
import { CartOutline, HeartOutline, Star } from "react-ionicons";
import Cart2Icon from "../../Icons/Cart2Icon";
import Heart from "../../Icons/Heart";
export default function Card() {
  return (
    <div className="card relative">
      
        {" "}
        <img
          className="w-full card_image"
          src="/assets/product/product5.png"
          alt="product image"
        />
  
      <div className="card_body">
        <h3 className="card_title text-center">Nike Air Max 270 React</h3>
        <div className="flex gap-4 justify-center py-2">
          <Star height="15.14px" width="13.8px" color={"#FFC600"} />
          <Star height="15.14px" width="13.8px" color={"#FFC600"} />
          <Star height="15.14px" width="13.8px" color={"#FFC600"} />
          <Star height="15.14px" width="13.8px" color={"#FFC600"} />
          <Star height="15.14px" width="13.8px" color={"#C1C8CE"} />
        </div>
        <div className="flex justify-center gap-4 items-center">
          <div>
            <h4 className="card_price">$299,43</h4>
          </div>
          <div className="flex gap-2">
            <h4 className="prev_price">$534,33</h4>
            <h4 className="discount">24% Off</h4>
          </div>
        </div>
      </div>
      <div className="absolute add_card flex justify-center items-center gap-4">
        <div className="favorite">
          <Heart />
        </div>
        <div className="favorite">
          <Cart2Icon />
        </div>
      </div>
    </div>
  );
}
