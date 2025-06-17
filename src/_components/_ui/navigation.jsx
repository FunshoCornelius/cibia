"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { routes } from "@/constants";

function NavLink({ href, title }) {
  return (
    <>
      {/* Desktop Dropdown */}
      <li className="relative z-20 group cursor-pointer hidden lg:block">
        <Link href={href} className="">
          {title}
        </Link>
      </li>

      {/* Mobile Dropdown */}
      <li className="lg:hidden">
        <Link
          href={href}
          className="w-full text-left font-bold flex items-center justify-between"
        >
          {title}
        </Link>
      </li>
    </>
  );
}

function NavLinks() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {/* Toggle for Mobile Menu */}
      <button
        className="lg:hidden block z-50"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Nav */}
      <nav className="relative z-20 hidden lg:block">
        <ul className="flex gap-10 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          {routes.map((route) => (
            <NavLink
              key={route.text}
              title={route.text}
              href={route.href}
              className={pathName === route.href ? "text-primary" : ""}
            />
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-[90%] mx-auto bg-white shadow-md py-4 px-6 z-40">
          <ul className="flex flex-col gap-4 font-semibold">
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            {routes.map((route) => (
              <NavLink key={route.text} title={route.text} href={route.href} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavLinks;
