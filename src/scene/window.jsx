import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import AnimatedView from "../components/decoration/windowLandscape"

export default function Window() {
  const viewRef = useRef()
  const glassRef = useRef()
  const { camera } = useThree()
  useFrame(() => {
    if (!viewRef.current) return
    viewRef.current.position.x = camera.position.x * 0.1
    viewRef.current.position.y = camera.position.y * 0.1
    if (glassRef.current) {
      glassRef.current.rotation.y = camera.position.x * 0.02
    }
  })
  return (
    <group position={[1.77, 1, -0.2]}>
     
      <AnimatedView />
     
      <group position={[0, 0, 0.4]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[2.49, 0.1, 0.1]} />
          <meshStandardMaterial color="#11111188" />
        </mesh>
        <mesh position={[0, -1.05, 0]}>
          <boxGeometry args={[2.49, 0.1, 0.1]} />
          <meshStandardMaterial color="#11111181" />
        </mesh>
        <mesh position={[-1.2, -0.097, 0]}>
          <boxGeometry args={[0.1, 1.8, 0.1]} />
          <meshStandardMaterial color="#1111117a" />
        </mesh>
        <mesh position={[1.2, -0.097, 0]}>
          <boxGeometry args={[0.1, 1.8, 0.1]} />
          <meshStandardMaterial color="#1111118e" />
        </mesh>
      </group>
      <mesh ref={glassRef}>
        <planeGeometry args={[3, 2]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.5}
          roughness={0.1}
          metalness={0.3}
          transmission={0.7}
          position={[0, 0, 1]}
        />
      </mesh>
    </group>
  )
}