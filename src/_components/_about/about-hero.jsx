import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function AboutHero() {
  return (
    <section className="max-w-5xl mx-auto px-4 text-center mb-12">
      <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
        The{" "}
        <span className="bg-gradient-to-r font-bold animate-bounce transition-all duration-500 from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Number One
        </span>{" "}
        Institute for Business Intelligence and Analytics
      </h1>
      <p className="mt-4 md:text-lg text-sm text-slate-600 max-w-3xl mx-auto">
        The Chartered Institute of Business Intelligence and Analytics (CIBIA)
        is Africa’s premier certifying body for professionals transforming data
        into decisions.
      </p>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <Link href="/membership">
          <Button className="text-base   px-6 py-3">Join the Institute</Button>
        </Link>
        <Link href="/qualifications">
          <Button variant="outline" className="text-base px-6 py-3">
            Explore Certifications
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default AboutHero;
