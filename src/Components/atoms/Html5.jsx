import React from "react";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function HTML5(props) {
  const { nodes, materials } = useGLTF("/html5-transformed.glb");
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <group {...props} dispose={null}>
          <group position={[-0.01, 0, 0]} rotation={[-Math.PI / 2, 0.01, -1.6]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group
                position={[11.81, 52.91, -1.08]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={82.79}
              >
                <mesh
                  geometry={nodes.Plane001_orange_0.geometry}
                  material={materials.orange}
                />
                <mesh
                  geometry={nodes["Plane001_orange-lite_0"].geometry}
                  material={materials["orange-lite"]}
                />
              </group>
              <mesh
                geometry={nodes["Plane_escudo-2_0"].geometry}
                material={materials["escudo-2"]}
                position={[0, 0, -1.08]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Plane002_five_0.geometry}
                material={materials.five}
                position={[61.85, 307.49, 35.17]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              />
            </group>
          </group>
        </group>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

useGLTF.preload("/html5-transformed.glb");
