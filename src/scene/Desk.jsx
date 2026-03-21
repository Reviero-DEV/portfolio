import Mousepad from "../components/desk/Mousepad";

import Laptop from "../components/desk/Laptop";
import CoffeeMug from "../components/desk/CoffeeMug";
import DeskAccessories from "../components/desk/Acessories";
import Monitor from "../components/desk/Monitor";

export default function Desk() {
  return (
    <>
      <group position={[-2, 0, -1.5]} scale={1.2}>
        <mesh position={[0, 1, -2]}>
          <boxGeometry args={[3.5, 0.04, 1.5]} />
          <meshStandardMaterial
            color="#8b5e3c"
            metalness={0.1}
            roughness={0.5}
          />
          <Mousepad />
          <CoffeeMug />
          <Laptop />
          <DeskAccessories />
          <Monitor />
        </mesh>

        <mesh position={[-1.57, 0.5, -2.6]}>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>

        <mesh position={[1.57, 0.5, -2.6]}>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>

        <mesh position={[-1.57, 0.5, -1.4]}>
          <boxGeometry args={[0.05, 1, 0.1]} />{" "}
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>

        <mesh position={[1.57, 0.5, -1.4]}>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#444" roughness={1} metalness={1} />
        </mesh>
      </group>
    </>
  );
}
