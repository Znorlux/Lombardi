import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import {
  Color,
  IcosahedronGeometry,
  MeshDepthMaterial,
  MeshPhysicalMaterial,
  RGBADepthPacking,
} from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import vertexShader from "./Shaders/vertex.glsl";
import fragmentShader from "./Shaders/fragment.glsl";

const Experiment = ({ shouldReduceQuality, isMobile, onLoaded }: any) => {
  const materialRef = useRef<
    (typeof CustomShaderMaterial & { uniforms?: any }) | null
  >(null);
  const depthMaterialRef = useRef<
    (typeof CustomShaderMaterial & { uniforms?: any }) | null
  >(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsedTime;
    }

    if (depthMaterialRef.current) {
      depthMaterialRef.current.uniforms.uTime.value = elapsedTime;
    }
  });

  const {
    gradientStrength,
    color,
    speed,
    noiseStrength,
    displacementStrength,
    fractAmount,
    roughness,
    metalness,
    clearcoat,
    reflectivity,
    ior,
    iridescence,
  } = useControls({
    gradientStrength: {
      value: 1,
      min: 1,
      max: 3,
      step: 0.001,
    },
    color: "#ed7c62",
    speed: {
      value: 3.1,
      min: 0,
      max: 20,
      step: 0.001,
    },
    noiseStrength: {
      value: 0.25,
      min: 0,
      max: 3,
      step: 0.001,
    },
    displacementStrength: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.001,
    },
    fractAmount: {
      value: 6,
      min: 0,
      max: 10,
      step: 1,
    },
    roughness: {
      value: 0.7,
      min: 0,
      max: 1,
      step: 0.001,
    },
    metalness: {
      value: 0.0,
      min: 0,
      max: 1,
      step: 0.001,
    },
    clearcoat: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.001,
    },
    reflectivity: {
      min: 0,
      max: 1,
      step: 0.001,
      value: 1,
    },
    ior: {
      min: 0.001,
      max: 5,
      step: 0.001,
      value: 2.81,
    },
    iridescence: {
      min: 0,
      max: 1,
      step: 0.001,
      value: 0.5,
    },
  });

  const { intensity: ambientLightIntensity, color: ambientLightColor } =
    useControls("Ambient light", {
      color: "#fff",
      intensity: {
        value: 1,
        min: 0,
        max: 1,
        step: 0.001,
      },
    });

  const {
    intensity: directionalLightIntensity,
    color: directionalLightColor,
    positionX: directionalLightPositionX,
    positionY: directionalLightPositionY,
    positionZ: directionalLightPositionZ,
  } = useControls("Directional light", {
    color: "#fff",
    intensity: {
      value: 5,
      min: 0,
      max: 5,
      step: 0.001,
    },
    positionX: {
      value: -2,
      min: -10,
      max: 10,
      step: 0.001,
    },
    positionY: {
      value: 2,
      min: -10,
      max: 10,
      step: 0.001,
    },
    positionZ: {
      value: 5.56,
      min: -10,
      max: 10,
      step: 0.001,
    },
  });

  const geometry = useMemo(() => {
    const geometry = mergeVertices(
      new IcosahedronGeometry(1.3, shouldReduceQuality ? 128 : 200)
    );
    geometry.computeTangents();
    return geometry;
  }, [shouldReduceQuality]);

  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new Color(color) },
    uGradientStrength: { value: gradientStrength },
    uSpeed: { value: speed },
    uNoiseStrength: { value: noiseStrength },
    uDisplacementStrength: { value: displacementStrength },
    uFractAmount: { value: fractAmount },
  };

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return (
    <>
      <mesh
        geometry={geometry}
        frustumCulled={false}
        position={[2.6, isMobile ? -1.3 * 0 : 0, 0]}
      >
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={MeshPhysicalMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          silent
          roughness={roughness}
          metalness={metalness}
          reflectivity={reflectivity}
          clearcoat={clearcoat}
          ior={ior}
          iridescence={iridescence}
          uniforms={uniforms}
        />
        <CustomShaderMaterial
          ref={depthMaterialRef}
          baseMaterial={MeshDepthMaterial}
          vertexShader={vertexShader}
          uniforms={uniforms}
          silent
          depthPacking={RGBADepthPacking}
          attach="customDepthMaterial"
        />
      </mesh>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <directionalLight
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[
          directionalLightPositionX,
          directionalLightPositionY,
          directionalLightPositionZ,
        ]}
      />
    </>
  );
};

export default Experiment;
