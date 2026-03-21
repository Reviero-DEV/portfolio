import * as THREE from "three";
import { useMemo } from "react";
import Window from "./window";

export default function Wall() {
  const geometry = useMemo(() => {
    const width = 10;
    const height = 10;
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -height / 2);
    shape.lineTo(width / 2, -height / 2);
    shape.lineTo(width / 2, height / 2);
    shape.lineTo(-width / 2, height / 2);
    shape.lineTo(-width / 2, -height / 2);
    const windowWidth = 2.4;
    const windowHeight = 1.8;
    const hole = new THREE.Path();
    hole.moveTo(-windowWidth / 4, 0);
    hole.lineTo(windowWidth / 0.8, 0);
    hole.lineTo(windowWidth / 0.8, windowHeight);
    hole.lineTo(-windowWidth + 3, windowHeight);
    hole.lineTo(-windowWidth + 3, 0);
    shape.holes.push(hole);
    const extrudeSettings = {
      depth: 0.2,
      bevelEnabled: false,
    };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);
  return (
    <mesh
      geometry={geometry}
      position={[-5, 2.5, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <meshStandardMaterial color="#e5e5e5" />
      <mesh position={[0, -2.45, 0.2]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.02, 0.1, 10]} />
          <meshStandardMaterial color="#0a0f52" />
        </mesh>
      <Window />
    </mesh>
  );
}
