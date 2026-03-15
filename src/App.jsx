import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Room from "./scene/Room"
export default function App() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 60 }}>
     
      {/* luz ambiente */}
      <ambientLight intensity={ 0.6 } />
      {/* luz principal */}
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Room />
      <OrbitControls />
     
    </Canvas>
  ) }