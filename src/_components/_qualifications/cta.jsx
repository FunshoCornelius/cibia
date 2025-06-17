import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

function QualificationCTA() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          Join thousands of professionals who have accelerated their careers
          with CIBIA qualifications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-700">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">6-18</div>
            <div className="text-slate-400">Months to Complete</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">100%</div>
            <div className="text-slate-400">Online Learning</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-slate-400">Student Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualificationCTA;
