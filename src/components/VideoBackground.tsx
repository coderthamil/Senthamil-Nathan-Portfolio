import { motion, useScroll, useTransform } from "framer-motion";

const VideoBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, 400]);
  const scale = useTransform(scrollY, [0, 2000], [1.1, 1.25]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-motion.mp4" type="video/mp4" />
      </motion.video>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-background/30" />
    </div>
  );
};

export default VideoBackground;
