import styles from "./Hero.module.scss";
import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";

export default function Hero(){
  return <div className={styles["component"]}>
    <Canvas className={styles["component__view"]}>
      <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1.0} position={[0, 3, 5]}/>
      
      <Float>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </Float>
    </Canvas>
  </div>
}