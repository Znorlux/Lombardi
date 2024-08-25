"use client";
import React from "react";
import Scene from "./Scene/Index";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <div className="relative z-10 h-full flex flex-col items-start justify-center p-8 pointer-events-none">
        <Image
          src="/home/15.jpg"
          alt="Lombardi"
          width={300}
          height={300}
          className="absolute z-0 inset-0 top-[12vh] left-[30vw] opacity-30 select-none rounded-full"
        />
        <Image
          src="/home/9.jpg"
          alt="Lombardi"
          width={300}
          height={300}
          className="absolute z-0 inset-0 top-[50vh] left-[8vw] opacity-30 select-none rounded-full"
        />
        <h1 className="relative z-10 text-6xl md:text-8xl lg:text-[20vh] font-bold text-[#cfc9cb] select-none tracking-wide font-reality-stone mb-2">
          Lombardi
        </h1>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-[#FF69B4] select-none tracking-wide font-pangaia">
          Creative Developer
        </h2>
        <p className="relative z-10 text-lg md:text-xl lg:text-2xl text-[#cfc9cb] select-none tracking-wide font-pangaia mt-4">
          I am a creative developer specialized in creating interactive
          experiences and websites.
        </p>
      </div>
    </section>
  );
}

export default Hero;
