import { useGLTF } from '@react-three/drei'

export function Keyboard(props) {
  const { nodes, materials } = useGLTF('/Keyboard(2).glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard1.geometry}
        material={materials.lambert3SG}
        scale={0.0025}
      />
    </group>
  )
}

useGLTF.preload('/Keyboard(2).glb')