import { RoundedBox } from "@react-three/drei";

export default function Monitor() {
  return (
    <>
      <mesh position={[0, 1.1, -2]}>
        <boxGeometry args={[0.3, 0.02, 0.2]} />
        <meshStandardMaterial color="#222222 " />
      </mesh>

      <mesh position={[0, 1.25, -2]}>
        <boxGeometry args={[0.08, 0.4, 0.05]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>

      <RoundedBox
        args={[1.4, 0.8, 0.07]}
        radius={0.05}
        smoothness={4}
        position={[0, 1.6, -2]}
      >
        <meshStandardMaterial color="#f7f4f4" />
      </RoundedBox>
    </>
  );
}
