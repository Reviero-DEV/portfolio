import Mousepad from "./Mousepad";
import { Car } from "../components/car";
import Figure from "../components/figure";
export default function Desk() {
  return (
    <>
      <group>
        <mesh position={[0, 1, -2]}>
          <boxGeometry args={[3, 0.04, 1.5]} />
          <meshStandardMaterial color="#8b5e3c" metalness={0.1} roughness={0.5} />
          <Mousepad />
          <Car position={[-0.7, 0.03, 0]} scale={0.1} rotation={[0, 0.5, 0]} />
          <Figure position={[0.7, 0, 0.4]} scale={0.1} />
        </mesh>

        <mesh position={[-1.3, 0.5, -2.6]}>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>

        <mesh position={[1.3, 0.5, -2.6]}>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>

        <mesh position={[-1.3, 0.5, -1.4]}>
          <boxGeometry args={[0.05, 1, 0.1]} />{" "}
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>

        <mesh position={[1.3, 0.5, -1.4]}>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>
      </group>
    </>
  );
}
