import { RoundedBox } from "@react-three/drei";
import { Html } from "@react-three/drei";

export default function Monitor({ setSection }) {
  return (
    <>
      <group position={[0, -1.07, 1.7]}>
        <mesh position={[0, 1.1, -2]}>
          <boxGeometry args={[0.3, 0.02, 0.2]} />
          <meshStandardMaterial color="#222222 " />
        </mesh>

        <mesh position={[0, 1.25, -2]}>
          <boxGeometry args={[0.08, 0.4, 0.05]} />
          <meshStandardMaterial color="#2c2c2c" />
        </mesh>
        <group position={[0, 1.6, -2]}>
          <RoundedBox
            args={[1.4, 0.8, 0.07]}
            radius={0.05}
            smoothness={4}
            position={[0, 0, 0.03]}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color="#534f4f"
              roughness={-7}
              metalness={2}
              emissive="#0a0a0a"
              emissiveIntensity={-4}
            />
          </RoundedBox>

          <Html transform position={[0, 0, 0.03]} distanceFactor={1.5}>
            <div className="monitor-ui">
              <h2>Neto Reviero</h2>
              <button onClick={() => setSection("about")}>Sobre</button>
              <button onClick={() => setSection("projects")}>Projetos</button>
              <button onClick={() => setSection("contact")}>Contato</button>
            </div>
          </Html>
        </group>
         <pointLight
            position={[0, 1.57, -1.47]}
            intensity={2}
            color="#4da6ff"
            distance={1.4}
          />
      </group>
    </>
  );
}
