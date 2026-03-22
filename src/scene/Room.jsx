export default function Room() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#8f8f8f" />
      </mesh>

      <mesh position={[0, 2.5, -5]} receiveShadow>
        <boxGeometry args={[10, 10, 0.2]} />
        <meshStandardMaterial color="#e5e5e5" />
        <mesh position={[0, -2.45, 0.11]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.02, 0.1, 10]} />
          <meshStandardMaterial color="#0a0f52" />
        </mesh>
      </mesh>
      
      <mesh position={[-5, 2.5, 0]}>
        <mesh position={[0.1, -2.45, 0]}>
          <boxGeometry args={[0.02, 0.1, 10]} />
          <meshStandardMaterial color="#0a0f52" />
        </mesh>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>
    </>
  );
}
