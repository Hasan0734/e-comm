import React from "react";

export default function Tabs() {
  return (
    <div className="flex justify-center mt-4">
      <ul className="flex gap-5 md:gap-[5.75rem] tab_area">
        <li>
          <a className="tab_item active" href="#all">
            All
          </a>
        </li>
        <li>
          <a className="tab_item" href="#bags">
            Bags
          </a>
        </li>
        <li>
          <a className="tab_item" href="#sneakers">
            Sneakers
          </a>
        </li>
        <li>
          <a className="tab_item" href="#belt">
            Belt
          </a>
        </li>
        <li>
          <a className="tab_item" href="#sunglasses">
            Sunglasses
          </a>
        </li>
      </ul>
    </div>
  );
}
