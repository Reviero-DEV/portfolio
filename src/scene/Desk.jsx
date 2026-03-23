import Mousepad from "../components/desk/Mousepad";

import Laptop from "../components/desk/Laptop";
import CoffeeMug from "../components/desk/CoffeeMug";
import DeskAccessories from "../components/desk/Acessories";
import Monitor from "../components/desk/Monitor";

export default function Desk({setSection}) {
  return (
    <>
      <group position={[-2, 0, -1.5]} scale={1.2}>
        <mesh position={[0, 1, -2]} castShadow receiveShadow>
          <boxGeometry args={[3.5, 0.04, 1.5]} />
          <meshStandardMaterial
            color="#8b5e3c"
            roughness={-2}
              metalness={-0.7}
          />
          <Mousepad />
          <CoffeeMug />
          <Laptop />
          <DeskAccessories />
          <Monitor setSection={setSection}/>
          <pointLight
            position={[-1, 0.5, 0.075]}
            intensity={0.7}
            color="#4da6ff"
            distance={0.59}
          />
        </mesh>

        <mesh position={[-1.57, 0.5, -2.6]} castShadow receiveShadow>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#9c9999" roughness={-7} metalness={2} />
        </mesh>

        <mesh position={[1.57, 0.5, -2.6]} castShadow receiveShadow>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#9c9999" roughness={-7} metalness={2} />
        </mesh>

        <mesh position={[-1.57, 0.5, -1.4]} castShadow receiveShadow>
          <boxGeometry args={[0.05, 1, 0.1]} />{" "}
          <meshStandardMaterial color="#9c9999" roughness={-7} metalness={2} />
        </mesh>

        <mesh position={[1.57, 0.5, -1.4]} castShadow receiveShadow>
          <boxGeometry args={[0.05, 1, 0.1]} />
          <meshStandardMaterial color="#9c9999" roughness={-7} metalness={2} />
        </mesh>
      </group>
    </>
  );
}
