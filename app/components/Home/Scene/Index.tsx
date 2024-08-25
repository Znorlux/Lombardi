"use client";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "usehooks-ts";
import dynamic from "next/dynamic";
const Experiment = dynamic(() => import("./Sphere"), { ssr: false });

function Scene() {
  const isTablet = useMediaQuery("(max-width: 1199px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      document.body.classList.remove("loading");
    }
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, isTablet ? 9 : 6],
          fov: 48,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          alpha: true, // Habilitar transparencia
        }}
        style={{ background: "#222222" }}
      >
        <Suspense fallback={null}>
          <Experiment
            shouldReduceQuality={isTablet}
            isMobile={isMobile}
            onLoaded={handleLoad}
          />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

export default Scene;
