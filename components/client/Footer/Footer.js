import Link from "next/link";
import React from "react";

const footerMenu = [
  {
    id: 1,
    title: "Information",
    items: [
      { id: 20, name: "About Us", url: "/about-us" },
      { id: 21, name: "Information", url: "/information" },
      { id: 22, name: "Privacy Policy", url: "/privacy-policy" },
      { id: 23, name: "Terms & Conditions", url: "/terms-and-conditions" },
    ],
  },
  {
    id: 2,
    title: "Service",
    items: [
      { id: 24, name: "About Us", url: "/about-us" },
      { id: 25, name: "Information", url: "/information" },
      { id: 26, name: "Privacy Policy", url: "/privacy-policy" },
      { id: 27, name: "Terms & Conditions", url: "/terms-and-conditions" },
    ],
  },
  {
    id: 3,
    title: "My Account",
    items: [
      { id: 28, name: "About Us", url: "/about-us" },
      { id: 29, name: "Information", url: "/information" },
      { id: 30, name: "Privacy Policy", url: "/privacy-policy" },
      { id: 31, name: "Terms & Conditions", url: "/terms-and-conditions" },
    ],
  },
  {
    id: 4,
    title: "Our Offers",
    items: [
      { id: 32, name: "About Us", url: "/about-us" },
      { id: 33, name: "Information", url: "/information" },
      { id: 34, name: "Privacy Policy", url: "/privacy-policy" },
      { id: 35, name: "Terms & Conditions", url: "/terms-and-conditions" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer_section pt-32">
      <div className="container mx-auto px-5">
        {/* first section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:pr-[17.5rem]">
            <div className="flex gap-2 items-center">
              <img className="w-11" src="/assets/logoIcon.svg" alt="logo" />
              <span className="title_logo">E-Comm</span>
            </div>
            <p className="content py-5 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="md:pr-[17.5rem]">
            <h2 className="title_sub">Follow Us</h2>
            <p className="content py-9">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
          <div className="md:pr-[17.5rem]">
            <h2 className="title_sub">Contact Us</h2>
            <p className="content py-9">
              E-Comm , 4578
              <br /> Marmora Road,
              <br /> Glasgow D04 89GR
            </p>
          </div>
        </div>

        {/* second section */}
        <div className="grid grid-1 md:grid-cols-4 mt-12 mb-12">
          {footerMenu.map((menu, i) => (
            <div key={menu.id}>
              <h3 className="title_another">{menu.title}</h3>
              <ul className="pt-6">
                {menu.items.map((item, index) => (
                  <li key={item.id}>
                    <Link href={item.url}>
                      <a className="item">{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* third section */}
        <div className="bg-[#F6F7F8] h-[2px] md:mx-10" />

        <div className="grid grid-cols-2 py-6  md:px-16">
          <div>© 2018 Ecommerce theme by www.bisenbaev.com</div>
          <div className="flex justify-end gap-3">
            <div>
              <img src="/assets/payment/Western-union.png" alt="pay img" />
            </div>
            <div>
              <img src="/assets/payment/mastercard.png" alt="pay img" />
            </div>
            <div>
              <img src="/assets/payment/Paypal.png" alt="pay img" />
            </div>
            <div>
              <img src="/assets/payment/visa.png" alt="pay img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
