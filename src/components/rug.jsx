export default function Rug() {
  return (
    <>
      <mesh position={[0, 0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[5, 0.015, 3]} />
        <meshStandardMaterial color="#575656" roughness={1} metalness={0} />
      </mesh>
    </>
  );
}
