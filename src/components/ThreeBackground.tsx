import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const FloatingOrbs = () => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  const orbs = useMemo(() => [
    { pos: [2, 1, -3] as [number, number, number], scale: 1.2, color: "#a855f7", speed: 0.3 },
    { pos: [-3, -1, -5] as [number, number, number], scale: 1.8, color: "#7c3aed", speed: 0.2 },
    { pos: [0, 2, -4] as [number, number, number], scale: 0.8, color: "#c084fc", speed: 0.4 },
    { pos: [-1, -2, -6] as [number, number, number], scale: 2.2, color: "#6d28d9", speed: 0.15 },
    { pos: [3, -1, -7] as [number, number, number], scale: 1.5, color: "#8b5cf6", speed: 0.25 },
  ], []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const orb = orbs[i];
      mesh.position.x = orb.pos[0] + Math.sin(t * orb.speed + i) * 1.5;
      mesh.position.y = orb.pos[1] + Math.cos(t * orb.speed * 0.7 + i * 2) * 1.2;
      mesh.scale.setScalar(orb.scale + Math.sin(t * orb.speed * 0.5) * 0.15);
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) meshRefs.current[i] = el; }}
          position={orb.pos}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={orb.color}
            transparent
            opacity={0.12}
            roughness={1}
            metalness={0}
          />
        </mesh>
      ))}
    </group>
  );
};

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 300;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = t;
    pointsRef.current.rotation.x = t * 0.3;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        color="#c084fc"
        size={0.03}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#a855f7" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#7c3aed" />
        <FloatingOrbs />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
