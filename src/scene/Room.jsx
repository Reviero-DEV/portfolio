import { NamePlate } from "../components/decoration/NamePlate";
import Rug from "../components/decoration/rug";
import Desk from "../scene/Desk";
import Bookshelf from "../scene/Bookshelf";
import Chair from "../scene/Chair";
import Wall from "./wall";

export default function Room({setSection}) {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#cfcfcf" />
        <Rug />
      </mesh>
      <Desk setSection={setSection}/>
      <Chair />

      <mesh position={[0, 2.5, -5]} receiveShadow>
        <boxGeometry args={[10, 10, 0.2]} />
        <meshStandardMaterial color="#e5e5e5" />
        <mesh position={[0, -2.45, 0.11]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.02, 0.1, 10]} />
          <meshStandardMaterial color="#074572" />
        </mesh>
        <Bookshelf />
        <NamePlate />
      </mesh>
      <Wall/>
    </>
  );
}
