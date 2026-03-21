export default function Books() {
  return (
    <>
      <group position={[2, 0.28, 0]} >
        <mesh position={[-3.2, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#c0392b" />
        </mesh>
        <mesh position={[-3, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#2980b9" />
        </mesh>
        <mesh position={[-2.8, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#27ae60" />
        </mesh>
        <mesh position={[-2.6, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#f39c12" />
        </mesh>
      </group>
    </>
  );
}
