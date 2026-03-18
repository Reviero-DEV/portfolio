import { RoundedBox } from "@react-three/drei";

export default function DeskAccessories() {
  return (
    <>
      <mesh position={[0, 1.07, -1.7]}>
        <boxGeometry args={[0.9, 0.05, 0.35]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <RoundedBox
        args={[0.07, 0.03, 0.1]}
        radius={0.015}
        smoothness={4}
        position={[0.58, 1.09, -1.7]}
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

      <mesh position={[-1, 1.07, -2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[-1, 1.35, -2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      <mesh position={[-0.95, 1.65, -1.9]} rotation={[0, 0.5, 0]}>
        <boxGeometry args={[0.17, 0.07, 0.25]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
    </>
  );
}