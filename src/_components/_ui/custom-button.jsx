import { Navigation } from "lucide-react";
import Link from "next/link";
import React from "react";

function CustomButton({ text }) {
  return (
    <Link href="/" className="inline-block group relative">
      <div className="pl-2 pr-6 py-3 rounded-full bg-gray-900  text-white flex justify-center items-center relative overflow-hidden w-60">
        {/* Animated circle background on hover */}
        <div
          className="absolute -right-10 origin-center top-1/2 -translate-y-1/2 
          w-[120%] h-[120%] group-hover:w-10 group-hover:h-10 group-hover:right-4
          rounded-full bg-white/10 transition-all duration-500 pointer-events-none"
        />

        {/* CustomButton text */}
        <p
          className="uppercase text-sm md:text-lg text-left z-10 transition-all duration-500
          group-hover:text-white/80 group-hover:-translate-x-6 translate-x-0"
        >
          {text}
        </p>

        {/* Icon wrapper */}
        <div
          className="size-8 md:size-10 bg-white/10 rounded-full absolute right-4 top-1/2 
          -translate-y-1/2 flex justify-center items-center transition-all duration-500 z-10"
        >
          <Navigation className="size-4 md:size-5 animate-bounce group-hover:translate-y-0 transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
}

export default CustomButton;
