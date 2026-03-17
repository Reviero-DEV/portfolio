import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Room from "./scene/Room"
import Desk from "./scene/Desk"
import Monitor from "./scene/Monitor"
import Window from "./scene/window"
import Bookshelf from "./scene/Bookshelf"
import DeskAccessories from "./scene/Acessories"
import Chair from "./scene/Chair"

export default function App() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 60 }}>
     
      <ambientLight intensity={ 0.6 } />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Room />
      <Desk />
      <Monitor />
      <Window />
      <Bookshelf />
      <DeskAccessories />
      <group rotation={[0, 2.5, 0]} position={[0, 0, -0.9]}>
        <Chair />
      </group>
      
      <OrbitControls />
     
    </Canvas>
  ) }