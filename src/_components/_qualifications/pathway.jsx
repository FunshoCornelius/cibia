import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { qualificationStages } from "@/constants";
import { CheckCircle } from "lucide-react";
import React from "react";

function QualificationPathway() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Your Learning Pathway
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Progress through three comprehensive stages, each building upon the
            previous to develop your expertise systematically.
          </p>
        </div>

        {qualificationStages.map((stage) => (
          <div key={stage.stage} className="mb-16">
            {/* Stage Header */}
            <div className="flex items-center mb-8">
              <div
                className={`w-12 h-12 ${stage.badgeColor} rounded-lg flex items-center justify-center mr-4`}
              >
                <stage.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {stage.stage} Stage
                </h3>
                <p className="text-slate-600">{stage.description}</p>
              </div>
            </div>

            {/* Levels Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {stage.levels.map((level) => (
                <Card
                  key={level.level}
                  className={`${stage.color} hover:shadow-lg transition-all duration-300`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <level.icon className="h-5 w-5 text-slate-700" />
                      </div>
                      <div>
                        <CardTitle className="text-slate-900">
                          {stage.stage} {level.level}
                        </CardTitle>
                        <CardDescription className="text-slate-600">
                          {level.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {level.courses.map((course) => (
                        <div
                          key={course}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a href={level.brochure} download>
                      <Button
                        variant={"outline"}
                        className={"text-xs"}
                        size={"sm"}
                      >
                        Download Brochure
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QualificationPathway;
