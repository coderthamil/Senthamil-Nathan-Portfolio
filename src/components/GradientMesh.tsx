import { motion } from "framer-motion";

const GradientMesh = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* SVG filter for liquid/gooey distortion */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="liquid-mesh">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006"
              numOctaves="3"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                values="0.006;0.009;0.004;0.006"
                dur="30s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="80" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: "url(#liquid-mesh)" }}>
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)",
            top: "5%",
            left: "0%",
          }}
          animate={{
            x: [0, 120, -60, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.18) 0%, hsl(var(--accent) / 0.04) 40%, transparent 70%)",
            top: "35%",
            right: "-5%",
          }}
          animate={{
            x: [0, -90, 50, 0],
            y: [0, 70, -100, 0],
            scale: [1, 0.75, 1.2, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--glow) / 0.12) 0%, transparent 70%)",
            bottom: "5%",
            left: "25%",
          }}
          animate={{
            x: [0, 140, -70, 0],
            y: [0, -50, 80, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, hsl(var(--accent) / 0.06) 50%, transparent 70%)",
            top: "55%",
            left: "55%",
          }}
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 40, -70, 0],
            scale: [1, 1.1, 0.8, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, hsl(var(--primary) / 0.04) 50%, transparent 70%)",
            top: "15%",
            left: "50%",
          }}
          animate={{
            x: [0, 60, -80, 0],
            y: [0, -90, 30, 0],
            scale: [0.9, 1.2, 1, 0.9],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
};

export default GradientMesh;
