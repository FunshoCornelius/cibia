"use client";

import React, { useEffect, useRef, useState } from "react";
import NumberTag from "../_ui/number-tag";
import { objectives } from "@/constants";

function Objectives() {
  const scrollRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const scrollSpeed = 0.5; // smaller = slower

  useEffect(() => {
    const container = scrollRef.current;
    let frameId;

    const animateScroll = () => {
      if (!container || paused) {
        frameId = requestAnimationFrame(animateScroll);
        return;
      }

      container.scrollTop += scrollSpeed;

      // Reset to top when scrolled past the first full set
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0;
      }

      frameId = requestAnimationFrame(animateScroll);
    };

    frameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(frameId);
  }, [paused]);

  // Duplicate objectives for infinite loop
  const loopedObjectives = [...objectives, ...objectives];

  return (
    <section className="mt-20 max-w-6xl mx-auto px-4">
      <h2 className="md:text-3xl text-xl font-bold text-slate-900 text-center mb-6">
        Our Objectives
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 w-full md:text-left text-center shadow-2xl md:shadow-none bg-white md:bg-transparent p-6 rounded-lg">
          <p className="text-lg text-slate-700">
            The objectives of CIBIA are to promote the advancement of knowledge,
            skills, and practices in the field of business intelligence and
            analytics. We aim to achieve this through:
          </p>
        </div>
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="md:w-1/2 flex flex-col items-start relative h-80 overflow-y-scroll no-scrollbar"
        >
          {loopedObjectives.map((obj, index) => (
            <div key={index + 1} className="flex gap-4 items-start relative">
              {/* Timeline NumberTag + Line */}
              <div className="flex flex-col items-center">
                <NumberTag number={obj.id} />
                {index < objectives.length - 1 && (
                  <div className="w-px h-16 bg-blue-300"></div>
                )}
              </div>

              {/* Text Content */}
              <div className="pb-8">
                <h3 className="text-base font-semibold text-slate-800">
                  {obj.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Objectives;
