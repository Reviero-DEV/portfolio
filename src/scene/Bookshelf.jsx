import { Trophy } from "../components/decoration/trophy";
import Books from "../components/decoration/books";
import { Car } from "../components/decoration/car";
import Figure from "../components/decoration/figure";
export default function Bookshelf({
  setSection,
  hoveredObject,
  setHoveredObject,
}) {
  return (
    <>
      <mesh
        position={[-3, 1, 0.3]}
        castShadow
        receiveShadow
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
          setHoveredObject("Bookshelf");
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
          setHoveredObject(null);
        }}
        onClick={() => setSection("projects")}
      >
        <boxGeometry args={[3, 0.05, 0.4]} />
        <meshStandardMaterial
          color={hoveredObject === "Bookshelf" ? "#ffffffbe" : "#6b4f3b"}
          roughness={2}
          metalness={3.5}
          emissive={hoveredObject === "Bookshelf" ? "#00ffff" : "#000000"}
          emissiveIntensity={hoveredObject === "Bookshelf" ? 0.2 : 0}
        />
        <Trophy
          scale={2}
          position={[-0.3, 0.03, 0.2]}
          castShadow
          receiveShadow
        />
        <Books castShadow receiveShadow />
        <Car
          position={[0.7, 0.025, 0]}
          scale={0.1}
          rotation={[0, -0.5, 0]}
          castShadow
          receiveShadow
        />
        <Figure position={[1.17, 0, 0]} scale={0.1} castShadow receiveShadow />
        <mesh position={[0.3, 0.3, 0]} castShadow receiveShadow>
          <octahedronGeometry args={[0.15]} />
          <meshStandardMaterial
            color="#fde400"
            metalness={0.5}
            roughness={0.2}
          />{" "}
          <pointLight
            position={[0, 0.1, 0.19]}
            intensity={0.3}
            color="#4da6ff"
            distance={2}
          />
        </mesh>
      </mesh>
    </>
  );
}
