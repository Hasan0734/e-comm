import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { MenuSharp } from "react-ionicons";
import { useState } from "react";

const menuItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Bags", url: "/bags" },
  { id: 3, title: "Sneakers", url: "/sneakers" },
  { id: 4, title: "Belt", url: "/belt" },
  { id: 5, title: "Contact", url: "/contact" },
];
export default function Menu() {
  const { pathname } = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex md:hidden justify-end w-full">
        <MenuSharp onClick={() => setToggle(!toggle)} width={25} />
      </div>
      <ul className="nav_items hidden md:flex justify-between w-full">
        {menuItems.map((menu, i) => {
          return (
            <li key={menu.id}>
              <Link href={menu.url}>
                <a
                  className={`nav_item ${
                    pathname === menu.url ? "active" : ""
                  }`}
                >
                  {menu.title}
                </a>
              </Link>
            </li>
          );
        })}
        {/* <li>
          <Link href="/bags">
            <a>Bags</a>
          </Link>
        </li>
        <li>
          <Link href="/sneakers">
            <a>Sneakers</a>
          </Link>
        </li>
        <li>
          <Link href="belt">
            <a>Belt</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li> */}
      </ul>
      {toggle && (
        <div
          className="absolute w-full bg-white shadow-[-6px_-15px_44px_-10px_rgba(0,0,0,0.19)]
     block md:hidden top-[11rem] z-50 px-6 left-0 "
        >
          <ul className="nav_items  w-full">
            {menuItems.map((menu, i) => {
              return (
                <li className="border-b" key={menu.id}>
                  <Link href={menu.url}>
                    <a
                      className={`text-[16px] font-semibold text-[#262626] block py-4  ${
                        pathname === menu.url ? "active" : ""
                      }`}
                    >
                      {menu.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
