import { Canvas } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Room from "./scene/Room";

export default function App() {
  const [section, setSection] = useState("home");
  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      camera={{ position: [5, 3, 8], fov: 50 }}
      className="scene-canvas"
    >
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={10}
      />
      <SoftShadows size={25} samples={16} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={0.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, 10, -10, 1, 20]}
        />
      </directionalLight>
      <pointLight
        position={[-3, 3.5, -2]}
        intensity={1.5}
        color="#7abfff"
        distance={10}
        decay={1}
      />
      <pointLight position={[0, 4, 0]} intensity={3} color="#ffffff" />
      <Room section={section} setSection={setSection} />
      <OrbitControls />
    </Canvas>
  );
}