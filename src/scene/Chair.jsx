export default function Chair() {
  return (
    <group position={[0, 0, -0.6]}>
      <mesh position={[0, 0.7, 0]} scale={[1, 0.3, 1]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      <mesh position={[0, 1.1, -0.37]} scale={[1, 1.2, 0.3]}  rotation={[-0.19, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      <mesh position={[0, 0.37, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7]} />
        <meshStandardMaterial color="#555" metalness={0.8} roughness={0.3} />
      </mesh>

      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.25, 0.05, Math.sin(angle) * 0.25]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.3, 0.03, 0.05]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        );
      })}
    </group>
  );
}
