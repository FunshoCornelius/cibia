import { Card, CardContent } from "@/components/ui/card";
import { careerBenefits } from "@/constants";
import React from "react";

function QualificationsOverview() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Choose CIBIA Certification?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive qualification framework is designed to meet
            industry demands and accelerate your professional growth in the
            data-driven economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerBenefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div
                  className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <benefit.icon className={`h-6 w-6 ${benefit.textColor}`} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualificationsOverview;
