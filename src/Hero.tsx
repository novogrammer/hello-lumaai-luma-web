import styles from "./Hero.module.scss";
import { Canvas,Object3DNode, extend } from "@react-three/fiber";
import { Float, PerspectiveCamera,StatsGl, OrbitControls } from "@react-three/drei";
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";

// Make LumaSplatsThree available to R3F
extend( { LumaSplats: LumaSplatsThree } );

// For typeScript support:
declare module '@react-three/fiber' {
  interface ThreeElements {
    lumaSplats: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>
  }
}

export default function Hero(){
  return <div className={styles["component"]}>
    <Canvas className={styles["component__view"]} dpr={[1,2]}>
      <StatsGl/>
      <OrbitControls/>
      <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1.0} position={[0, 3, 5]}/>
      <lumaSplats
		semanticsMask={LumaSplatsSemantics.FOREGROUND}
		source='https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67'
		position={[-1, 0, 0]}
		scale={0.5}
	/>
      <Float>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </Float>
    </Canvas>
  </div>
}