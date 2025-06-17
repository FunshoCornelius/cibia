import Link from "next/link";
import React from "react";
import NavLinks from "./navigation";
import Image from "next/image";

function Header() {
    return (
        <header className="w-full px-2 z-40 fixed top-0  py-6">
            <div
                className="max-w-6xl mx-auto px-4 sm:px-6 flex py-4 rounded-full items-center bg-white shadow-md justify-between">
                <Link href="/" className="text-xl font-bold">
                    <Image
                        src="/images/logo.png"
                        alt="CIBIA Logo"
                        width={80}
                        height={80}
                    />
                </Link>
                <NavLinks/>
            </div>
        </header>
    );
}

export default Header;
