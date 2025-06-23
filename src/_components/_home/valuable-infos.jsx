import { ValuableInfosArr } from "@/constants";
import Link from "next/link";
import React from "react";

function Card({ title, description, link, linkText }) {
  return (
    <div className="rounded-md border border-black-50 bg-black-200 hover:scale-105 pointer-events-none transition-all px-6 py-8">
      <h2 className="font-semibold text-xl mb-6">{title}</h2>
      <p>{description}</p>
      <Link
        href={link}
        className="bg-stone-100 font-semibold px-6 py-2 hover:scale-105 transition-all rounded-full w-fit text-stone-900 mt-6 block"
      >
        {linkText}
      </Link>
    </div>
  );
}

function ValuableInfos() {
  return (
    <section className="bg-gradient-to-r bg-black-100 py-16 grid place-items-center text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 ">
        {ValuableInfosArr.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            linkText={item.linkText}
          />
        ))}
      </div>
    </section>
  );
}

export default ValuableInfos;
