export default function Mousepad() {
  return (
    <>
      <mesh position={[0, 1.08, -2]}>
        <boxGeometry args={[2.7, 0.015, 1]} />
        <meshStandardMaterial color="#29435c" />
      </mesh>
    </>
  );
}
