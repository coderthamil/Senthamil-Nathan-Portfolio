import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

const Orb = ({
  cx, cy, radius, color, speedX, speedY, scaleSpeed, phaseX, phaseY,
}: {
  cx: number; cy: number; radius: number; color: string;
  speedX: number; speedY: number; scaleSpeed: number;
  phaseX: number; phaseY: number;
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  
  // Seamless loop: use frame/durationInFrames * 2π so animation loops perfectly
  const t = (frame / durationInFrames) * Math.PI * 2;
  
  const x = cx + Math.sin(t * speedX + phaseX) * 200;
  const y = cy + Math.cos(t * speedY + phaseY) * 150;
  const scale = 1 + Math.sin(t * scaleSpeed) * 0.3;
  
  return (
    <div
      style={{
        position: "absolute",
        left: x - radius,
        top: y - radius,
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        transform: `scale(${scale})`,
        filter: "blur(80px)",
      }}
    />
  );
};

export const MeshBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = (frame / durationInFrames) * Math.PI * 2;
  
  // Subtle overall rotation for extra depth
  const rotation = interpolate(frame, [0, durationInFrames], [0, 360]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0612" }}>
      {/* Base gradient layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 30% 50%, #1a0a2e 0%, #0a0612 70%)",
        }}
      />
      
      {/* Animated orbs - purple/violet mesh */}
      <div style={{ position: "absolute", inset: 0, transform: `rotate(${rotation * 0.02}deg)` }}>
        <Orb cx={400} cy={300} radius={500} color="rgba(168,85,247,0.25)" speedX={1} speedY={1.3} scaleSpeed={0.8} phaseX={0} phaseY={0} />
        <Orb cx={1400} cy={200} radius={600} color="rgba(124,58,237,0.2)" speedX={1.2} speedY={0.8} scaleSpeed={1.1} phaseX={1.5} phaseY={0.8} />
        <Orb cx={960} cy={700} radius={450} color="rgba(192,132,252,0.18)" speedX={0.7} speedY={1.5} scaleSpeed={0.6} phaseX={3} phaseY={2} />
        <Orb cx={200} cy={800} radius={550} color="rgba(139,92,246,0.22)" speedX={1.4} speedY={0.6} scaleSpeed={1.3} phaseX={2} phaseY={4} />
        <Orb cx={1600} cy={600} radius={400} color="rgba(109,40,217,0.2)" speedX={0.9} speedY={1.1} scaleSpeed={0.9} phaseX={4.5} phaseY={1} />
        <Orb cx={800} cy={100} radius={350} color="rgba(167,139,250,0.15)" speedX={1.1} speedY={0.9} scaleSpeed={1.2} phaseX={1} phaseY={3} />
        <Orb cx={1200} cy={500} radius={500} color="rgba(147,51,234,0.17)" speedX={0.6} speedY={1.4} scaleSpeed={0.7} phaseX={5} phaseY={2.5} />
      </div>

      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </AbsoluteFill>
  );
};
