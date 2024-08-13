"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material";
import * as THREE from "three";
import vertexShader from "./Shaders/vertex.glsl";

function Sphere() {
  const materialRef = useRef<any>(null);

  return (
    <>
      <mesh>
        <icosahedronGeometry args={[1.3, 200]} />
        <CustomShaderMaterial
          ref={materialRef}
          silent
          baseMaterial={THREE.MeshPhysicalMaterial}
          roughness={0.56}
          metalness={0.76}
          clearcoat={0}
          ior={2.81}
          iridescence={0.96}
          vertexShader={vertexShader}
        />
      </mesh>
      <ambientLight />
      <directionalLight intensity={5} position={[-2, 2, 3.5]} />
    </>
  );
}

export default Sphere;
