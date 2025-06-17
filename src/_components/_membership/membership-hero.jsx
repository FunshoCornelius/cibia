import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function MembershipHero() {
  return (
    <section className="bg-gradient-to-r relative from-purple-950 to-black-200 py-28 text-center px-4">
      <div className="relative z-10 py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Unlock Your Potential with CIBIA Membership
        </h1>
        <p className="text-sm md:text-lg max-w-2xl mx-auto text-stone-300">
          Join a vibrant network of professionals, students, and experts in
          Business Intelligence and Analytics. Explore the benefits tailored to
          every stage of your career.
        </p>{" "}
        <Link href="/membership/apply">
          <Button variant="secondary" className="mt-4 text-base px-6 py-3">
            Join Now
          </Button>
        </Link>
      </div>
      <video
        src="/videos/members-hero.mp4"
        autoPlay
        loop
        muted
        className=" absolute inset-0 w-full h-full object-cover opacity-60"
      ></video>
    </section>
  );
}

export default MembershipHero;
