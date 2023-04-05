import React from "react";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/reactlogo-transformed.glb");
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <mesh
                geometry={nodes["React-Logo_Material002_0"].geometry}
                material={materials["Material.002"]}
                position={[0, 7.94, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[39.17, 39.17, 52.73]}
              />
              <mesh
                geometry={nodes.Backdrop_Material001_0.geometry}
                material={materials["Material.001"]}
                position={[-17.09, 7.94, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[247.85, 247.85, 52.73]}
              />
            </group>
          </group>
        </group>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

useGLTF.preload("/reactlogo-transformed.glb");
