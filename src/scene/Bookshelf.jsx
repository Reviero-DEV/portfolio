import { Trophy } from "../components/trophy";
export default function Bookshelf() {
  return (
    <>
      {/* prateleira */}
      <mesh position={[-2.5, 3.5, -4.8]}>
        <boxGeometry args={[2, 0.15, 0.4]} />
        <meshStandardMaterial color="#6b4f3b" />
        <Trophy scale={2} position={[0.2, 0.07, 0.2]} />
      </mesh>
      {/* livros */}
      <mesh position={[-3.2, 3.82, -4.7]}>
        <boxGeometry args={[0.2, 0.5, 0.3]} />
        <meshStandardMaterial color="#c0392b" />
      </mesh>
      <mesh position={[-3, 3.82, -4.7]}>
        <boxGeometry args={[0.2, 0.5, 0.3]} />
        <meshStandardMaterial color="#2980b9" />
      </mesh>
      <mesh position={[-2.8, 3.82, -4.7]}>
        <boxGeometry args={[0.2, 0.5, 0.3]} />
        <meshStandardMaterial color="#27ae60" />
      </mesh>
      <mesh position={[-2.6, 3.82, -4.7]}>
        <boxGeometry args={[0.2, 0.5, 0.3]} />
        <meshStandardMaterial color="#f39c12" />
      </mesh>
      <mesh position={[-1.7, 3.8, -4.7]}>
        <octahedronGeometry args={[0.15]} />
        <meshStandardMaterial color="#fde400" metalness={0.5} roughness={0.2} />{" "}
      </mesh>
      
    </>
  );
}