"use client";
import React from "react";

const NumberTag = ({ number }) => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Gradient rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-12 h-10 rounded-full animate-spin-slow"
          style={{
            background: "conic-gradient(#3b82f6, #06b6d4, #3842f6)", // blue to cyan gradient
            maskImage:
              "radial-gradient(farthest-side, transparent 60%, black 61%)",
            WebkitMaskImage:
              "radial-gradient(farthest-side, transparent 60%, black 61%)",
          }}
        ></div>
      </div>

      {/* Centered number tag */}
      <div className="w-10 h-10 bg-transparent text-[#06b6d4] rounded-full flex items-center justify-center font-bold z-10 text-xl">
        {number}
      </div>

      {/* Inline style for spin */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NumberTag;
