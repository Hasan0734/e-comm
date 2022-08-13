import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const menuItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Bags", url: "/bags" },
  { id: 3, title: "Sneakers", url: "/sneakers" },
  { id: 4, title: "Belt", url: "/belt" },
  { id: 5, title: "Contact", url: "/contact" },
];
export default function Menu() {
  const { pathname } = useRouter();
  return (
    <>
      <ul className="nav_items flex justify-between w-full">
              {menuItems.map((menu, i) => {
            return (
          <li key={menu.id}>
            <Link href={menu.url}>
              <a className={`nav_item ${pathname === menu.url ? 'active' : ''}`}>{menu.title}</a>
            </Link>
          </li>)
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
    </>
  );
}
