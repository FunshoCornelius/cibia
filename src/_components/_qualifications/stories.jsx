import React from "react";

function QualificationStories() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-slate-600">
            Real professionals, real results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b332da12?w=300&h=300&fit=crop&crop=face"
                alt="Professional headshot"
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-slate-600 mb-4 italic">
                  "CIBIA certification opened doors I never thought possible.
                  Within 6 months, I was promoted to Senior Data Analyst."
                </p>
                <div className="font-semibold text-slate-900">
                  Sarah Johnson
                </div>
                <div className="text-sm text-slate-600">
                  Senior Data Analyst, Tech Corp
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Professional headshot"
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-slate-600 mb-4 italic">
                  "The structured pathway helped me transition from finance to
                  analytics. Best career decision I've made."
                </p>
                <div className="font-semibold text-slate-900">Michael Chen</div>
                <div className="text-sm text-slate-600">
                  BI Manager, Financial Services
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
                alt="Professional headshot"
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-slate-600 mb-4 italic">
                  "CIBIA gave me the credibility to lead data initiatives. My
                  salary increased by 45%."
                </p>
                <div className="font-semibold text-slate-900">
                  Emma Rodriguez
                </div>
                <div className="text-sm text-slate-600">
                  Data Strategy Director, Retail Chain
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default QualificationStories;
