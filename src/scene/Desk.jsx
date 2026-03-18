import Mousepad from "./Mousepad";
import { Car } from "../components/car";
import  Figure from "../components/figure";
export default function Desk() {
  return (
    <>
      <group>
        <mesh position={[0, 1, -2]}>
          <boxGeometry args={[3, 0.15, 1.5]} />
          <meshStandardMaterial color="#6b4f3b" />
        </mesh>
        <Mousepad />
        <Car position={[1.2, 1.08, -2]} scale={0.1} />
        <Figure position={[1, 1, -2]} scale={0.1} />
      </group>

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
