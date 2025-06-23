import React from "react";
import Image from "next/image";
import TitleHeader from "../_ui/title-header";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

function HomeAbout() {
  return (
    <section className="bg-stone-100 py-8">
      <div className="max-w-7xl flex flex-col md:flex-row text-center md:text-left gap-8 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="basis-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Driving Excellence in{" "}
            <span className="bg-gradient-to-r font-semibold animate-bounce transition-all duration-500 from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Data-Driven
            </span>{" "}
            Decision-Making
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            The Chartered Institute of Business Intelligence and Analytics
            (CIBIA) is a center of excellence dedicated to advancing the field
            of business intelligence, data analytics, and decision science. In
            today’s fast-paced, data-driven world, organizations constantly seek
            ways to stay ahead of the curve. The ability to collect, analyze,
            and interpret vast amounts of data has become a key differentiator
            between success and failure.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We offer certification programs, professional training, cutting-edge
            research, and access to a vibrant network of industry leaders to
            help individuals and professionals thrive in the modern data
            economy.
          </p>
        </div>
        <div className="relative basis-1/2 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/home-about.jpg"
            alt="Business Intelligence Team"
            fill
            className="object-cover object-center rounded-xl"
            priority
          />
        </div>
      </div>
      <Link
        href="/membership/apply"
        className=" w-fit flex gap-3 items-center  mx-auto mt-8 bg-black-200 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-black-300 transition duration-300 animate-bounce hover:animate-none  hover:scale-105"
      >
        <span>Apply Today</span> <CircleArrowRight className="animate-ping" />
      </Link>
    </section>
  );
}

export default HomeAbout;
