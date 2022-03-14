import React, { useRef } from "react";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ScenePage from "./ScenePage";

function Laptop({ ...props }) {
  const group = useRef();
  const monitor = useRef();
  const { offset } = useScroll();
  const { nodes, materials } = useGLTF("/gltf/mac-draco.glb");
  useFrame(() => {
    // monitor.current.rotation.set(-0.425 + offset, 0, 0);
  });
  return (
    <group
      position={[0.07, 0.46, -0.57]}
      scale={[0.03, 0.03, 0.03]}
      ref={group}
      {...props}
      dispose={null}
    >
      <group ref={monitor} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div className="wrapper">
                <ScenePage />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export default Laptop;
// rotation-x={-0.425}