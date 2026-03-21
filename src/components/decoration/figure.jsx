import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Figure(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Animated Robot.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;
    const animation = Object.values(actions)[2];
    if (animation) {
      animation.setEffectiveTimeScale(0.5);
      animation.reset().fadeIn(0.5).play();
    }

    return () => {
      if (animation) {
        animation.fadeOut(0.5);
      }
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="RobotArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Bone} />
          </group>
          <group
            name="HandR"
            position={[-0.003, 2.37, -0.021]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <skinnedMesh
              name="HandR_1"
              geometry={nodes.HandR_1.geometry}
              material={materials.Main}
              skeleton={nodes.HandR_1.skeleton}
            />
            <skinnedMesh
              name="HandR_2"
              geometry={nodes.HandR_2.geometry}
              material={materials.Grey}
              skeleton={nodes.HandR_2.skeleton}
            />
          </group>
          <group
            name="HandL"
            position={[-0.003, 2.37, -0.021]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <skinnedMesh
              name="HandL_1"
              geometry={nodes.HandL_1.geometry}
              material={materials.Main}
              skeleton={nodes.HandL_1.skeleton}
            />
            <skinnedMesh
              name="HandL_2"
              geometry={nodes.HandL_2.geometry}
              material={materials.Grey}
              skeleton={nodes.HandL_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Animated Robot.glb");
