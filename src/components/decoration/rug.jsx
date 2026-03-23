export default function Rug() {
  return (
    <>
      <mesh position={[-2, 2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <boxGeometry args={[5, 0.015, 3]} />
        <meshStandardMaterial color="#7c7a7a" roughness={3} metalness={0.3} />
      </mesh>
    </>
  );
}
