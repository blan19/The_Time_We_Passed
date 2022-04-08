import { useBox, usePlane } from "@react-three/cannon";
import React from "react";

const SceneOnePhysics = (props) => {
  const [floor1] = useBox(() => ({
    mass: 0,
    position: [4, 0.3, -8],
    args: [3.4, 0.3, 5.7],
    ...props,
  }));
  const [floor2] = useBox(() => ({
    mass: 0,
    position: [0.1, 0.3, -8],
    args: [0.8, 0.4, 5.6],
    ...props,
  }));
  const [leg] = useBox(() => ({
    mass: 0,
    position: [1.4, 0.3, -6.6],
    args: [1.6, 0.1, 0.8],
    ...props,
  }));
  //   const [tree] = useBox(() => ({
  //     mass: 0,
  //     position: [5.2, 1.6, -6],
  //     args: [0.08, 2, 0.08],
  //     ...props,
  //   }));
  const [first] = useBox(() => ({
    mass: 0,
    position: [4.75, 0.3, -7.4],
    args: [0.8, 0.18, 0.1],
    ...props,
  }));
  const [second] = useBox(() => ({
    mass: 0,
    position: [4.75, 0.4, -7.7],
    args: [0.8, 0.18, 0.1],
    ...props,
  }));
  const [third] = useBox(() => ({
    mass: 0,
    position: [4.75, 0.5, -8],
    args: [0.8, 0.18, 0.1],
    ...props,
  }));
  const [floor3] = useBox(() => ({
    mass: 0,
    position: [4, 0.5, -9.65],
    args: [3, 0.4, 3],
    ...props,
  }));
  const [wall1] = useBox(() => ({
    mass: 0,
    position: [2.45, 2, -9.65],
    args: [0.00001, 3, 3],
    ...props,
  }));
  const [wall2] = useBox(() => ({
    mass: 0,
    position: [6.45, 2, -9.65],
    args: [0.00001, 3, 3],
    ...props,
  }));
  const [book] = useBox(() => ({
    mass: 0,
    position: [4, 2, -11.5],
    args: [3, 3, 0.1],
    ...props,
  }));

  return (
    <>
      <mesh ref={floor1} position={[4, 0.4, -8]}>
        <boxGeometry args={[3.4, 0.3, 5.6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={floor2} position={[0.1, 0.4, -8]}>
        <boxGeometry args={[0.8, 0.4, 5.6]} />
        <meshStandardMaterial color="red" />s
      </mesh>
      <mesh ref={leg} position={[1.4, 0.55, -6.6]}>
        <boxGeometry args={[1.6, 0.1, 0.8]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[5.2, 1.5, -6]}>
        <boxGeometry args={[0.02, 2, 0.08]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh ref={first} position={[4.75, 0.5, -7.4]}>
        <boxGeometry args={[0.8, 0.18, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={second} position={[4.75, 0.6, -7.7]}>
        <boxGeometry args={[0.8, 0.18, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={third} position={[4.75, 0.7, -8]}>
        <boxGeometry args={[0.8, 0.18, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={floor3} position={[4, 0.89, -9.65]}>
        <boxGeometry args={[3, 0.3, 3]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={floor3} position={[4, 0.3, -9.65]}>
        <boxGeometry args={[3, 0.5, 3]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[2.45, 2, -9.65]}>
        <boxGeometry args={[0.05, 3, 3]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={wall2} position={[6.45, 2, -9.65]}>
        <boxGeometry args={[0.05, 3, 3]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh ref={book} position={[4, 2, -11.5]}>
        <boxGeometry args={[3, 3, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
};

export default SceneOnePhysics;
