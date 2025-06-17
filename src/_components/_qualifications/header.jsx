import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function QualificationsHeader() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          <div className="flex flex-col text-center lg:text-left justify-center lg:justify-left">
            <div className="flex items-center mx-auto lg:ml-0 space-x-2 mb-4">
              <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">
                Professional Certification
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              CIBIA Professional Qualifications
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your career with industry-leading certifications in
              Business Intelligence and Analytics. Our structured pathway takes
              you from foundations to expert-level mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mx-auto lg:ml-0">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className=" w-full ">
            <div className="bg-slate-900 rounded-2xl p-10 text-white">
              <figure className="mb-6 p-10 h-58 relative">
                <Image
                  fill
                  sizes="100%"
                  src="/images/qualification-hero.jpg"
                  alt="Business professionals in meeting"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </figure>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm opacity-80">
                    Certified Professionals
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualificationsHeader;
