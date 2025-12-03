import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { Group, Mesh } from 'three';
import { MotionValue } from 'framer-motion';

interface TorusDanProps {
  scrollProgress: MotionValue<number>;
}

export default function TorusDan({ scrollProgress }: TorusDanProps) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const { mouse } = useThree((state) => ({ mouse: state.mouse }));
  const [modelLoaded, setModelLoaded] = useState(false);
  const [gltf, setGltf] = useState<any>(null);

  useEffect(() => {
    useGLTF('/media/torus_dan.glb', undefined,
      (loadedGltf) => {
        setGltf(loadedGltf);
        setModelLoaded(true);
      },
      () => {
        console.log('3D model not found, using fallback geometry');
        setModelLoaded(false);
      }
    );
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    const scroll = scrollProgress.get();

    groupRef.current.rotation.x = scroll * Math.PI * 2;
    groupRef.current.rotation.y = scroll * Math.PI * 2;

    const mouseInfluence = 0.1;
    groupRef.current.rotation.x += mouse.y * mouseInfluence;
    groupRef.current.rotation.y += mouse.x * mouseInfluence;

    groupRef.current.rotation.z += 0.005;
  });

  return (
    <group ref={groupRef}>
      {modelLoaded && gltf ? (
        <primitive object={gltf.scene.clone()}>
          <MeshTransmissionMaterial
            backside={true}
            samples={16}
            resolution={1024}
            transmission={1}
            roughness={0.0}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.06}
            distortion={0.5}
            distortionScale={0.3}
            temporalDistortion={0.2}
          />
        </primitive>
      ) : (
        <mesh ref={meshRef} scale={1.5}>
          <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
          <MeshTransmissionMaterial
            backside={true}
            samples={16}
            resolution={1024}
            transmission={1}
            roughness={0.0}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.06}
            distortion={0.5}
            distortionScale={0.3}
            temporalDistortion={0.2}
          />
        </mesh>
      )}
    </group>
  );
}
