import React from "react";
import CartIcon from "../../Icons/CartIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import SearchIcon from "../../Icons/SearchIcon";

const Header = () => {
  return (
    <header className="header_area container mx-auto px-5 py-4 md:py-5">
      <div className="grid grid-cols-2">
        <div className="flex gap-3">
          <select>
            <option>ENG</option>
            <option>Ban</option>
          </select>
          <select>
            <option>USD</option>
            <option>EURO</option>
          </select>
        </div>
        <div className="flex justify-end gap-6">
          <button className="flex gap-2">
            <ProfileIcon />
            <span className="hidden md:block">My Profile</span>
          </button>
          <button className="flex gap-4 ">
            <span className="relative">
              <CartIcon />
              <span className="items">2</span>
            </span>

            <span className="hidden md:block">Items</span>
          </button>

          <div className="flex gap-2">
            <span className="opacity-50 hidden md:block">$00.0</span>
            <button>
              {" "}
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
