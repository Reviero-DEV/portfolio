import { Text } from "@react-three/drei";
export default function Books() {
  return (
    <>
      <group position={[2, 0.28, 0]}>
        <mesh position={[-3.2, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#E34C26" />
          <Text
            position={[0, 0, 0.157]}
            fontSize={0.15}
            color="#777272"
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, -1.55]}
          >
            Html
          </Text>
        </mesh>
        <mesh position={[-3, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#2196F3" />
          <Text
            position={[0, 0, 0.157]}
            fontSize={0.15}
            color="#777272"
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, -1.55]}
          >
            Css
          </Text>
        </mesh>
        <mesh position={[-2.8, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#eed622" />
          <Text
            position={[0, 0, 0.157]}
            fontSize={0.1}
            color="#242522"
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, -1.55]}
          >
            JavaScript
          </Text>
        </mesh>
        <mesh position={[-2.6, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.3]} />
          <meshStandardMaterial color="#58C4DC" />
          <Text
            position={[0, 0, 0.157]}
            fontSize={0.15}
            color="#282C34"
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, -1.55]}
          >
            React
          </Text>
        </mesh>
      </group>
    </>
  );
}
