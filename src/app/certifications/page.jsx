"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/constants";
import Image from "next/image";

const CertificationsSection = () => {
  return (
    <section className="bg-gray-50 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Explore Our Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Validate your expertise and accelerate your career with our
            industry-recognized programs.
          </p>
        </div>

        <Tabs defaultValue="cap" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-3 mb-8">
            {certifications.map((cert) => (
              <TabsTrigger
                key={cert.id}
                value={cert.id}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border bg-white hover:bg-blue-50 shadow-sm"
              >
                {cert.icon}
                {cert.id.toLocaleUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {certifications.map((cert) => (
            <TabsContent key={cert.id} value={cert.id}>
              <Card className="overflow-hidden shadow-xl">
                <aside className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <figure className="relative h-64 md:h-auto">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <CardContent className="p-8 space-y-4 bg-white">
                    <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                      {cert.icon} {cert.title}
                    </h3>
                    <p className="text-gray-600 text-md">{cert.summary}</p>
                    <div>
                      <h4 className="text-sm text-gray-500 font-semibold uppercase mb-2">
                        Modules Covered
                      </h4>
                      <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                        {cert.modules.map((mod) => (
                          <li key={mod}>{mod}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Duration:</strong> {cert.duration}
                    </p>
                  </CardContent>
                </aside>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CertificationsSection;
