import { Composition } from "remotion";
import { MeshBackground } from "./MeshBackground";

export const RemotionRoot = () => (
  <Composition
    id="main"
    component={MeshBackground}
    durationInFrames={300}
    fps={30}
    width={1920}
    height={1080}
  />
);
