import React from "react";
import CartIcon from "../../Icons/CartIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import SearchIcon from "../../Icons/SearchIcon";

const Header = () => {
  return (
    <header className="header_area">
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
            <span>My Profile</span>
          </button>
          <button className="flex gap-4 ">
            <span className="relative">
              <CartIcon />
              <span className="items">2</span>
            </span>

            <span>Items</span>
          </button>

          <div className="flex gap-2">
            <span className="opacity-50">$00.0</span>
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
