import React from "react";
import CustomButton from "../_ui/custom-button";

function Hero() {
  return (
    <section className="text-center px-4 pb-10 pt-32 bg-stone-100">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          Empowering{" "}
          <span className="bg-gradient-to-r font-bold animate-bounce transition-all duration-500 from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Data-Driven
          </span>{" "}
          Professionals for Tomorrow’s Business Decisions
        </h1>
        <p className="mt-4 md:text-lg text-sm text-slate-600 max-w-3xl mx-auto">
          At the Chartered Institute of Business Intelligence and Analytics
          (CIBIA), we equip individuals and organizations with cutting-edge
          skills in data analytics, decision science, and strategic
          insight—paving the way for innovation, growth, and global relevance.
        </p>
      </div>
      <div className="mt-8">
        <CustomButton text="Learn More" className="" />
      </div>
    </section>
  );
}

export default Hero;
