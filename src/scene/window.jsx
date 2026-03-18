export default function Window() {
  return (
    <>
      <mesh position={[-4.9, 2.5, -2.5]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.2, 1, 0.05]} />
        <meshStandardMaterial color="#cfcfcf" />
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.1, 0.9]} />
          <meshStandardMaterial
            color="#87ceeb"
            transparent
            opacity={0.3}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      </mesh>
    </>
  );
}
