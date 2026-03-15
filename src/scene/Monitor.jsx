export default function Monitor() {
  return (
    <>
    
      <mesh position={[0, 1.02 , -2]}>
        <boxGeometry args={[ 0.6 , 0.05 , 0.4 ]} />
        <meshStandardMaterial color="# 222222 " />
      </mesh>

      <mesh position={[0, 1.25 , -2]}>
        <boxGeometry args={[ 0.08 , 0.4 , 0.08 ]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>

      <mesh position={[0, 1.6 , -2]}>
        <boxGeometry args={[ 1.4 , 0.8 , 0.05 ]} />
        <meshStandardMaterial color="# 111111 " />
      </mesh>
    </>
  ) }