"use client";
import React from "react";
import Scene from "./Scene/Index";

function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="relative z-0 h-full">
        <Scene />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1 className="text-[30vh] font-bold text-[#315650] select-none tracking-wide font-reality-stone">
          Lombardi
        </h1>
      </div>
    </section>
  );
}

export default Hero;
