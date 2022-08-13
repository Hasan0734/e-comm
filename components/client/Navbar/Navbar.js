import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="container mx-auto px-5 py-5">
      <nav className=" navbar_area pt-10  grid grid-flow-col">
        <div className="col-span-4">
          {/* logo here */}
          <Link href="/">
            <a className="flex gap-2 items-center">
              <img
                className="w-11"
                src="/assets/logoIcon.svg"
                alt="logo image"
              />
              <span className="title">E-Comm</span>
            </a>
          </Link>
        </div>
        <div className="col-span-8 flex items-center">
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
