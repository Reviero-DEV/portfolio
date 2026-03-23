export default function CoffeeMug() {
  return (
    <group position={[1, 0.08, 0.3]} rotation={[0, -0.7, 0]}>
      
      <mesh>
        <cylinderGeometry args={[0.08, 0.08, 0.12, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, 0.055, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.02, 32]} />
        <meshStandardMaterial color="#4b2e1e" />
      </mesh>

      <mesh position={[0.09, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.04, 0.01, 16, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}