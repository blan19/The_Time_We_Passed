import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";

export default function Ground(props) {
  const [floor] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  const [front] = usePlane(() => ({
    position: [0, 18.75, -37.5],
    ...props,
  }));
  const [left] = usePlane(() => ({
    position: [-37.5, 18.75, 0],
    rotation: [0, Math.PI / 2, 0],
    ...props,
  }));
  const [right] = usePlane(() => ({
    position: [37.5, 18.75, 0],
    rotation: [0, -Math.PI / 2, 0],
    ...props,
  }));
  // const [back] = usePlane(() => ({
  //   position: [0, 25, 100],
  //   ...props,
  // }));
  const texture = useLoader(THREE.TextureLoader, "/background/grass.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <group>
      <mesh ref={front} receiveShadow>
        <planeGeometry args={[75, 37.5]} />
        <meshStandardMaterial fog color="#d1e4e7" />
      </mesh>
      <mesh
        receiveShadow
        rotation={[0, Math.PI, 0]}
        position={[0, 18.75, 37.5]}
      >
        <planeGeometry args={[75, 37.5]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh ref={floor} receiveShadow>
        <planeGeometry args={[75, 75]} />
        <meshStandardMaterial fog color="#f3f1e3" />
      </mesh>
      <mesh ref={left} receiveShadow>
        <planeGeometry args={[75, 37.5]} />
        <meshStandardMaterial fog color="gray" />
      </mesh>
      <mesh ref={right} receiveShadow>
        <planeGeometry args={[75, 37.5]} />
        <meshStandardMaterial fog color="gray" />
      </mesh>
    </group>
  );
}
