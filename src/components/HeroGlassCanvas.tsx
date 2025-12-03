import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { MotionValue, useTransform } from 'framer-motion';
import TorusDan from './TorusDan';

interface HeroGlassCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroGlassCanvas({ scrollYProgress }: HeroGlassCanvasProps) {
  const videoScale = useTransform(scrollYProgress, [0, 0.25], [0.25, 1]);
  const videoX = useTransform(scrollYProgress, [0, 0.25], [40, 0]);
  const videoY = useTransform(scrollYProgress, [0, 0.25], [40, 0]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.25], [50, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      className="absolute right-0 top-0 w-full h-full md:w-3/5"
      style={{
        scale: videoScale,
        x: videoX,
        y: videoY,
        borderRadius: videoRadius,
        opacity: videoOpacity,
        transformOrigin: 'bottom right',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          <TorusDan scrollProgress={scrollYProgress} />

          <Environment preset="studio" />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
