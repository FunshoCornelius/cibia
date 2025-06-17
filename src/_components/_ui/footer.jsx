import { footerLinksArr } from "@/constants";
import Link from "next/link";
import React from "react";

function FooterLinks({ title, links }) {
  return (
    <div>
      <h2 className="md:text-2xl text-xl font-bold mb-5 uppercase">{title}</h2>
      <ul className="flex text-sm md:text-base flex-col gap-2">
        {links.map((link) => (
          <li
            className="hover:text-white hover:font-semibold text-stone-300 transition-all duration-300"
            key={link.text}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-black-100 text-white">
      <div className="flex flex-col md:flex-row md:max-w-7xl px-4 w-full mx-auto gap-8 md:gap-0 justify-between items-center">
        <div className="flex justify-between items-center md:w-1/2 w-full">
          {footerLinksArr.map((item) => (
            <FooterLinks key={item.title} {...item} />
          ))}
        </div>
        <div></div>
      </div>
      <p className="text-center text-xs md:text-sm mt-10 text-stone-300">
        Copyright &copy; {new Date().getFullYear()} Chattered Institue of
        Business Intelligence and Analytics CIBIA. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
