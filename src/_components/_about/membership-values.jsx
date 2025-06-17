import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const membershipValues = [
  "Integrity",
  "Accountability",
  "Excellence",
  "Confidentiality",
  "Innovation",
];

const tabsContent = [
  {
    title: "Integrity",
    description:
      "We demonstrate honesty, transparency, and fairness in all actions and decisions.",
    image: "/images/about-2.jpg",
  },

  {
    title: "Accountability",
    description:
      "We take responsibility for our actions, decisions, and results.",
    image: "/images/about-3.jpg",
  },
  {
    title: "Excellence",
    description:
      "We commit to the highest standards in analytics and professional development.",
    image: "/images/about-4.jpg",
  },
  {
    title: "Confidentiality",
    description:
      "We safeguard sensitive information and respect data privacy laws globally.",
    image: "/images/about-5.jpg",
  },
  {
    title: "Innovation",
    description:
      "We embrace forward-thinking and cutting-edge methodologies to drive success.",
    image: "/images/about-6.jpg",
  },
];

function MembershipValues() {
  return (
    <section className="mt-20 max-w-5xl mx-auto px-4">
      <h2 className="md:text-3xl text-xl font-bold text-slate-900 text-center mb-6">
        Our Core Membership Values
      </h2>
      <Tabs defaultValue="integrity" className="w-full space-y-9">
        <TabsList className="flex justify-center mx-auto overflow-x-auto no-scrollbar gap-6 w-full max-w-2xl">
          {membershipValues.map((value) => (
            <TabsTrigger
              key={value}
              value={value.toLowerCase()}
              className={"cursor-pointer"}
            >
              {value}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsContent.map((content, index) => (
          <TabsContent value={content.title.toLowerCase()} key={index}>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-2xl rounded-xl pl-6 gap-10 h-84 items-center">
              <figure className="relative scale-110 h-full w-full shadow-2xl md:w-3/5 gap-10 overflow-hidden rounded-xl flex items-center justify-center">
                <Image
                  src={content.image}
                  alt="CIBIA"
                  fill
                  className="object-cover object-center hover:scale-105 transition-all duration-500"
                />
              </figure>
              <div className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                  {content.title}
                </h3>
                <p className="mt-4 text-sm md:text-lg  text-slate-600">
                  {content.description}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default MembershipValues;
