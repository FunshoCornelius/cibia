import React from "react";

function TitleHeader({ title, sub }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-black-200 py-2 px-8 animate-bounce transition-all duration-500 text-white rounded-full w-fit text-sm md:text-base text-nowrap">
        <h2 className="font-semibold text-lg">{sub}</h2>
      </div>
    </div>
  );
}

export default TitleHeader;
