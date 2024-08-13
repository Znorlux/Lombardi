import React from "react";
import { Canvas } from "@react-three/fiber";

function Sphere() {
  return (
    <>
      <mesh>
        <icosahedronGeometry args={[1.3, 200]} />
        <meshPhysicalMaterial
          roughness={0.56}
          metalness={0.76}
          clearcoat={0}
          ior={2.81}
          iridescence={0.96}
        />
      </mesh>
      <ambientLight />
      <directionalLight intensity={5} position={[-2, 2, 3.5]} />
    </>
  );
}

export default Sphere;
