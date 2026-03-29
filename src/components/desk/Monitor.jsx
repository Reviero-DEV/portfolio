import { RoundedBox } from "@react-three/drei";
import { Html } from "@react-three/drei";

export default function Monitor({ section, setSection, setHoveredObject }) {
  const isActive = section === null;
  return (
    <>
      <group position={[0, -1.07, 1.7]}>
        <mesh position={[0, 1.1, -2]}>
          <boxGeometry args={[0.3, 0.02, 0.2]} />
          <meshStandardMaterial color="#222222" />
        </mesh>

        <mesh position={[0, 1.25, -2]}>
          <boxGeometry args={[0.08, 0.4, 0.05]} />
          <meshStandardMaterial color="#2c2c2c" />
        </mesh>
        <group
          position={[0, 1.6, -2]}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = "pointer";
            setHoveredObject("monitor", Html);
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            document.body.style.cursor = "default";
            setHoveredObject(null);
          }}
        >
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

          {isActive && (
            <Html
              transform
              scale={0.45}
              position={[0, 0, 0.03]}
              distanceFactor={2}
            >
              <div
                className="monitor-ui"
                onPointerOver={(e) => {
                  e.stopPropagation();
                  document.body.style.cursor = "default";
                  setHoveredObject(null);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                onPointerUp={(e) => e.stopPropagation()}
                onPointerMove={(e) => e.stopPropagation()}
                onPointerEnter={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
              >
                <span className="monitor-badge">PORTFÓLIO INTERATIVO</span>
                <h2>Olá, eu sou Neto Reviero</h2>
                <p className="monitor-role">
                  Desenvolvedor Front-end focado em React e experiências
                  interativas
                </p>
                <div className="monitor-buttons">
                  <button onClick={() => setSection("about")}>Sobre mim</button>
                  <button onClick={() => setSection("projects")}>
                    Projetos
                  </button>
                  <button onClick={() => setSection("contact")}>Contato</button>
                </div>
                <span className="monitor-hint">
                  Explore os objetos das paredes para navegar
                </span>
              </div>
            </Html>
          )}
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
