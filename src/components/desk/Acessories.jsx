import { RoundedBox } from "@react-three/drei";

export default function DeskAccessories() {
  return (
    <>
      <RoundedBox
        args={[0.07, 0.03, 0.1]}
        radius={0.015}
        smoothness={4}
        position={[0.58, 0.04, 0.3]}
        roughness={5}
        metalness={4}
      >
        <meshStandardMaterial color="#d1c0c0" />

        <RoundedBox
          position={[0, 0.01, -0.03]}
          args={[0.02, 0.02, 0.01]}
          radius={0.009}
          smoothness={4}
          roughness={5}
          metalness={4}
          rotation={[-Math.PI / 0.2, 4.7, 0]}
        >
          <meshStandardMaterial color="#2b2b2b" />
        </RoundedBox>
        <mesh position={[0, 0.012, -0.015]}>
          <boxGeometry args={[0.04, 0.007, 0.001]} />
          <meshStandardMaterial color="#05041f" />
        </mesh>
      </RoundedBox>

      <group position={[-1.1, 0.05, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 0.05]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        <mesh position={[0, 0.32, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.6]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
        <mesh
          position={[0.11, 0.59, 0.07]}
          rotation={[0, 1, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.17, 0.07, 0.25]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
      </group>
    </>
  );
}
