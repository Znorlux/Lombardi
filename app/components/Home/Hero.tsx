"use client";
import React from "react";
import Scene from "./Scene/Index";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <div className="relative z-10 h-full flex flex-col items-start justify-center p-8 pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-[20vh] font-bold text-[#cfc9cb] select-none tracking-wide font-reality-stone mb-2">
          Lombardi
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FF69B4] select-none tracking-wide font-pangaia">
          Creative Developer
        </h2>
      </div>
    </section>
  );
}

export default Hero;
