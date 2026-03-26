import { motion } from "framer-motion";

const GradientMesh = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)",
          top: "40%",
          right: "0%",
        }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -80, 0],
          scale: [1, 0.8, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow) / 0.08) 0%, transparent 70%)",
          bottom: "10%",
          left: "30%",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 80% 65% / 0.1) 0%, transparent 70%)",
          top: "60%",
          left: "60%",
        }}
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default GradientMesh;
