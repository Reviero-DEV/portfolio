import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const { nodes, materials } = useGLTF("/Car.glb");
  if (!nodes || !materials) return null;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_Cube006-Mesh"]?.geometry}
        material={materials.White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_Cube006-Mesh_1"].geometry}
        material={materials.Windows}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_Cube006-Mesh_2"].geometry}
        material={materials.Grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_Cube006-Mesh_3"].geometry}
        material={materials.Headlights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_Cube006-Mesh_4"].geometry}
        material={materials.TailLights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_BackWheels_Cylinder002-Mesh"].geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_BackWheels_Cylinder002-Mesh_1"].geometry}
        material={materials.Grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_FrontLeftWheel_Cylinder017-Mesh"].geometry}
        material={materials.Grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["SportsCar2_FrontLeftWheel_Cylinder017-Mesh_1"].geometry
        }
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SportsCar2_FrontRightWheel_Cylinder018-Mesh"].geometry}
        material={materials.Grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["SportsCar2_FrontRightWheel_Cylinder018-Mesh_1"].geometry
        }
        material={materials.Black}
      />
    </group>
  );
}

useGLTF.preload("/Car.glb");
