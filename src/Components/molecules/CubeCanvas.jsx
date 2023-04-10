import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Cube from "../atoms/Cube.jsx";

import styles from "./molecule.module.css";

function CubeCanvas() {
  return (
    <div className={styles.cube} id="Test">
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}
export default CubeCanvas;
