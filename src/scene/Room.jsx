export default function Room() {
  return (
    <>
      <mesh rotation={[- Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#8f8f8f" />
      </mesh>

      <mesh position={[0, 2.5 , -5]}>
        <boxGeometry args={[10, 5, 0.2 ]} />
        <meshStandardMaterial color="#e5e5e5" />
      </mesh>
      
      <mesh position={[-5, 2.5 , 0]}>
        <boxGeometry args={[ 0.2 , 5, 10]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>
    </>
  ) }