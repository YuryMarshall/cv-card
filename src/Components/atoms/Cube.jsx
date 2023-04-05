import React from "react";
import { useRef } from "react";
import {
  PerspectiveCamera,
  RenderTexture,
  Text,
  Edges,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Cube() {
  const textRef = useRef();
  useFrame(
    (state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime))
  );
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 1]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={0.5} color="#555">
            lvl up
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}
export default Cube;
