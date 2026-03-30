export default function Chair() {
  return (
    <group position={[-2.5, 0, -2.2]} rotation={[0, 2.7, 0]} scale={1.2} >
      <mesh position={[0, 0.7, 0]} scale={[1, 0.3, 1]} castShadow receiveShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#1f2937" roughness={-3}
              metalness={-1}/>
        
      </mesh>

      <mesh position={[0, 1.1, -0.37]} scale={[1, 1.2, 0.3]}  rotation={[-0.19, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#122d68" roughness={-3}
              metalness={-1}/>
      </mesh>

      <mesh position={[0, 0.37, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7]} />
        <meshStandardMaterial color="#9c9999" roughness={0} metalness={4}/>
      </mesh>

      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.25, 0.05, Math.sin(angle) * 0.25]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.3, 0.03, 0.05]} />
            <meshStandardMaterial color="#9c9999" roughness={0} metalness={3}/>
          </mesh>
        );
      })}
    </group>
  );
}
