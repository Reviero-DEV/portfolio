export default function DeskAccessories() {
  return (
    <>
      <mesh position={[0, 1.05, -1.7]}>
        <boxGeometry args={[0.9, 0.05, 0.35]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.7, 1.05, -1.7]}>
        <boxGeometry args={[0.15, 0.05, 0.25]} />
        <meshStandardMaterial color="#2b2b2b" />
      </mesh>
      <mesh position={[-1, 1.05, -2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[-1, 1.35, -2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      <mesh position={[-1, 1.65, -1.9]}>
        <boxGeometry args={[0.25, 0.12, 0.25]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
    </>
  )
}