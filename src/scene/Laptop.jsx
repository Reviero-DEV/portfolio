export default function Laptop() {
  return (
    <group position={[1.2, 1.095, -2]} rotation={[0, 2.5, 0]}>
      
      <mesh>
        <boxGeometry args={[0.6, 0.04, 0.4]} />
        <meshStandardMaterial color="#2b2b2b" />
      </mesh>

      <mesh position={[0, 0.03, -0.02]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[0.6, 0.02, 0.4]} />
        <meshStandardMaterial color="#1f1f1f" />
      </mesh>
    </group>
  );
}
