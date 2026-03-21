import { useGLTF } from '@react-three/drei'

export function Trophy(props) {
  const { nodes, materials } = useGLTF('/Trophy.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trophy.geometry}
        material={materials.Material}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Trophy.glb')