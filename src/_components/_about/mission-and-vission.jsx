import Image from "next/image";
import React from "react";

function MissionAndVision() {
  return (
    <section className="grid md:grid-cols-2 gap-12 max-w-6xl text-sm md:text-lg px-4 mx-auto items-center">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Vision</h2>
        <p className="text-slate-600">
          Shaping the future of data-driven decision-making through education,
          research, and innovation.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
          Mission
        </h2>
        <p className="text-slate-600">
          To provide high-quality education, research, and professional training
          in business intelligence and analytics, equipping individuals and
          organizations with the knowledge and skills to harness data for
          strategic growth and innovation.
        </p>
      </div>
      <div className="relative h-64  overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
        <Image
          src={"/images/about-1.jpg"}
          alt="CIBIA"
          fill
          className="object-cover object-top hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}

export default MissionAndVision;
