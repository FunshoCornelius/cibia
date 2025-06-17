import Link from "next/link";
import React from "react";

function GetInvolved() {
  return (
    <section className="relative bg-[url('/images/members.jpg')] bg-cover bg-top bg-no-repeat h-[400px] flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

      {/* Section content */}
      <div className="relative z-10 max-w-xl mx-auto text-center     text-white  ">
        <h2 className="text-3xl md:text-4xl font-bold">Get Involved</h2>
        <p>
          If you are committed to being a better leader, becoming a CILG member
          will give you the tools to achieve your goals with our range of
          exclusive benefits. We offer a different membership programme, that is
          tailored to your needs. Find out more and get involved.
        </p>
        <Link
          href="/membership-upgrade"
          className=" w-fit flex gap-3 items-center  mx-auto mt-8 bg-white text-black-200 py-2 px-8 rounded-full text-lg font-semibold hover:bg-black-300 hover:scale-105 transition-all duration-500"
        >
          <span>Become a Member</span>{" "}
        </Link>
      </div>
    </section>
  );
}

export default GetInvolved;
