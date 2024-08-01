"use client";
import { useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import Hero from "./components/Home/Hero";
import Loader from "./components/Loader";

type Timeline = gsap.core.Timeline;

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(true); // Inicialmente true para evitar parpadeo
  const [timeline, setTimeline] = useState<Timeline | null>(null);

  useEffect(() => {
    const hasLoaderFinished =
      sessionStorage.getItem("loaderFinished") === "true";
    setLoaderFinished(hasLoaderFinished);
  }, []);

  useLayoutEffect(() => {
    if (!loaderFinished) {
      const context = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setLoaderFinished(true);
            sessionStorage.setItem("loaderFinished", "true");
          },
        });
        setTimeline(tl);
      });

      return () => context.revert();
    }
  }, [loaderFinished]);

  return (
    <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
  );
}
