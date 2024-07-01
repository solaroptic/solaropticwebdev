"use client";
import React, { useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Stars, useGLTF } from "@react-three/drei";
import Loader from "../Loader";
import { LOD } from "three";
import * as THREE from "three";
// import { Physics, usePlane, useBox } from '@react-three/cannon' for the Physics if you need a physics engine

function UranusModel() {
  const gtlf = useGLTF("/realistic_uranus/scene.gltf");
  const modelRef = useRef();

  const lod = new LOD();
  const lowDetail = gtlf.scene.clone();
  const mediumDetail = gtlf.scene.clone();
  const highDetail = gtlf.scene.clone();
  const light = new THREE.AmbientLight(0xffffff);
  gtlf.scene.add(light);

  useEffect(() => {
    lod.addLevel(lowDetail, 0);
    lod.addLevel(mediumDetail, 20);
    lod.addLevel(highDetail, 40);
    console.log(gtlf);
  }, [gtlf.scene]);

  return (
    <primitive
      object={gtlf.scene}
      ref={modelRef}
      scale={0.002}
      position={[0, 1, -6]}
      rotation={[-0.35, -0.35, 0.25]}
      className="z-0"
    />
  );
}

const Uranus = () => {
  return (
    <section className="absolute bottom-40 w-full top-0  flex-shrink-0 overflow-hidden">
      <Canvas shadows frameloop="always" dpr={[1, 2]} className="">
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[60, 0, 100]} intensity={2} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <UranusModel />
          <Preload all />
          {/* <Stars /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Uranus;
