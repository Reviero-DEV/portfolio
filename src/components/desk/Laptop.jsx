export default function Laptop() {
  return (
    <group position={[1.2, 0.04, -0.3]} rotation={[0, 2.5, 0]}>
      
      <mesh>
        <boxGeometry args={[0.6, 0.04, 0.4]} />
        <meshStandardMaterial color="#555353" roughness={-7} metalness={2.3}/>
      </mesh>

      <mesh position={[0, 0.04, -0.02]} rotation={[0.15, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.02, 0.4]} />
        <meshStandardMaterial color="#555353" roughness={-7} metalness={2.5}/>
      </mesh>
    </group>
  );
}