import { Trophy } from "../components/decoration/trophy";
import Books from "../components/decoration/books";
import { Car } from "../components/decoration/car";
import Figure from "../components/decoration/figure";
export default function Bookshelf() {
  return (
    <>
      <mesh position={[-3, 1, 0.1]}>
        <boxGeometry args={[3, 0.05, 0.4]} />
        <meshStandardMaterial color="#6b4f3b" />
        <Trophy scale={2} position={[-0.3, 0.03, 0.2]} />
        <Books />
        <Car position={[0.7, 0.025, 0]} scale={0.1} rotation={[0, -0.5, 0]} />
        <Figure position={[1.17, 0, 0]} scale={0.1} />
        <mesh position={[0.3, 0.3, 0]}>
          <octahedronGeometry args={[0.15]} />
          <meshStandardMaterial
            color="#fde400"
            metalness={0.5}
            roughness={0.2}
          />{" "}
        </mesh>
      </mesh>
    </>
  );
}
