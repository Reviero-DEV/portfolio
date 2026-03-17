import Mousepad from "./Mousepad";

export default function Desk() {
  return (
    <>
      <mesh position={[0, 1, -2]}>
        <boxGeometry args={[3, 0.15, 1.5]} />
        <meshStandardMaterial color="#6b4f3b" />
        <Mousepad />
      </mesh>

      <mesh position={[-1.3, 0.5, -2.6]}>
        <boxGeometry args={[0.15, 1, 0.15]} />
        <meshStandardMaterial color="#3e2c20" />
      </mesh>

      <mesh position={[1.3, 0.5, -2.6]}>
        <boxGeometry args={[0.15, 1, 0.15]} />
        <meshStandardMaterial color="#3e2c20" />
      </mesh>

      <mesh position={[-1.3, 0.5, -1.4]}>
        <boxGeometry args={[0.15, 1, 0.15]} />{" "}
        <meshStandardMaterial color="#3e2c20" />
      </mesh>

      <mesh position={[1.3, 0.5, -1.4]}>
        <boxGeometry args={[0.15, 1, 0.15]} />
        <meshStandardMaterial color="#3e2c20" />
      </mesh>
    </>
  );
}
