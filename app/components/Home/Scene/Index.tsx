"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
const Sphere = dynamic(() => import("./Sphere"), { ssr: false });

function Scene() {
  return (
    <div className="h-[70vh] w-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        gl={{ alpha: false }}
      >
        <Sphere />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Scene;
