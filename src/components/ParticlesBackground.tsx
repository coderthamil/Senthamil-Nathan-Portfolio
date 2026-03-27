import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: ["#e8973e", "#d4643a", "#c9915a"] },
          links: {
            color: "#e8973e",
            distance: 160,
            enable: true,
            opacity: 0.06,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true },
            value: 35,
          },
          opacity: { value: { min: 0.03, max: 0.12 } },
          size: { value: { min: 1, max: 2 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.15 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
