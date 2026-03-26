import { Canvas } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import Room from "./scene/Room";
import Projects from "./ui/sections/Projects";
import Contacts from "./ui/sections/Contacts";
import About from "./ui/sections/About";

export default function App() {
  const [section, setSection] = useState(null);
  const [hoveredObject, setHoveredObject] = useState(null);
  useEffect(() => console.log("section:", section), [section]);

  return (
    <>
      <Canvas
        shadows
        gl={{ antialias: true }}
        camera={{ position: [5, 3, 8], fov: 50 }}
        className="scene-canvas"
      >
        <color attach="background" args={["#0a0f1c"]} />
        <ContactShadows
          position={[0, 0.01, 0]}
          opacity={0.25}
          scale={10}
          blur={3}
          far={10}
        />
        <SoftShadows size={25} samples={16} />
        <ambientLight intensity={0.3} color="#b1bcda" />
        <directionalLight
          position={[-2, 0.5, 1]}
          intensity={0.1}
          color="#4da6ff"
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
          intensity={0.9}
          color="#ffae00e7"
          distance={7}
          decay={1.5}
        />
        <pointLight position={[1, 5, 1]} intensity={0.2} color="#00c3ff" />
        <Room
          section={section}
          setSection={setSection}
          hoveredObject={hoveredObject}
          setHoveredObject={setHoveredObject}
        />
        <OrbitControls />
      </Canvas>

      {section === "projects" && <Projects setSection={setSection} />}
      {section === "contact" && <Contacts setSection={setSection} />}
      {section === "about" && <About setSection={setSection} />}

      {hoveredObject && (
        <div className="scene-tooltip">
          {hoveredObject === "monitor" &&
            "Navegue com a tela do monitor ou objetos da parede"}
          {hoveredObject === "NamePlate" && "Ver sobre mim"}
          {hoveredObject === "Bookshelf" && "Explorar Projetos"}
          {hoveredObject === "window" && "Abrir contatos"}
        </div>
      )}
    </>
  );
}
