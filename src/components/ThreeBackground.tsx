import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GradientBlob = ({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.position.x = position[0] + Math.sin(t * speed + offset) * 2;
    meshRef.current.position.y = position[1] + Math.cos(t * speed * 0.8 + offset) * 1.5;
    meshRef.current.scale.setScalar(scale + Math.sin(t * speed * 0.4 + offset) * 0.3);
    meshRef.current.rotation.z = t * speed * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        ref={materialRef}
        color={color}
        transparent
        opacity={0.15}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#a855f7" />
        <pointLight position={[-4, -3, 4]} intensity={0.4} color="#7c3aed" />

        <GradientBlob position={[3, 1.5, -2]} color="#a855f7" speed={0.25} scale={2.2} />
        <GradientBlob position={[-3, -1, -3]} color="#7c3aed" speed={0.18} scale={2.8} />
        <GradientBlob position={[0, 2.5, -4]} color="#c084fc" speed={0.3} scale={1.6} />
        <GradientBlob position={[-1.5, -2.5, -5]} color="#6d28d9" speed={0.12} scale={3.2} />
        <GradientBlob position={[2, -1, -6]} color="#8b5cf6" speed={0.2} scale={2.0} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
