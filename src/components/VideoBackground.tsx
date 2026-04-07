const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-motion.mp4" type="video/mp4" />
      </video>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-background/30" />
    </div>
  );
};

export default VideoBackground;
