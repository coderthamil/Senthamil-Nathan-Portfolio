import { motion } from "framer-motion";

const GradientMesh = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Warm amber orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(32 95% 55% / 0.08) 0%, hsl(32 95% 55% / 0.02) 40%, transparent 70%)",
          top: "-10%",
          right: "-10%",
        }}
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(12 80% 58% / 0.06) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
        animate={{
          x: [0, 100, -40, 0],
          y: [0, -50, 70, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(32 95% 55% / 0.05) 0%, hsl(12 80% 58% / 0.03) 50%, transparent 70%)",
          top: "40%",
          left: "40%",
        }}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 40, -60, 0],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
};

export default GradientMesh;
