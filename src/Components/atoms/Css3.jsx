import React from "react";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function CSS3(props) {
  const { nodes, materials } = useGLTF("/css3-transformed.glb");
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, -1.58]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group
                position={[20.79, 136.75, 10.17]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              >
                <group position={[326.27, 35.49, 1926.62]}>
                  <mesh
                    geometry={nodes.Object_7.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    geometry={nodes.Object_8.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_5.geometry}
                  material={materials["Material.005"]}
                  position={[-142.94, -32.75, -5922.87]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={100}
                />
                <mesh
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.002"]}
                  position={[-182.68, 35.49, 1926.62]}
                />
              </group>
            </group>
          </group>
        </group>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

useGLTF.preload("/css3-transformed.glb");
