"use client";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Hero from "./components/Home/Hero";
import Loader from "./components/Loader";

type Timeline = gsap.core.Timeline;

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useLayoutEffect(() => {
    // Comprobar si ya se ha cargado la página antes
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      // Si ya se ha cargado antes, omitir la animación del Loader
      setLoaderFinished(true);
      setCheckingSession(false);
    } else {
      // Si no se ha cargado antes, ejecutar la animación del Loader
      const context = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setLoaderFinished(true);
            // Guardar el estado en sessionStorage
            sessionStorage.setItem("hasLoaded", "true");
            setCheckingSession(false);
          },
        });
        setTimeline(tl as Timeline);
      });

      return () => context.revert();
    }
  }, []);

  {
    /*if (checkingSession) {
    return (
      <div className="flex items-center justify-center h-screen">
        Cargando...
      </div>
    );
  }*/
  }

  return (
    <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
  );
}
