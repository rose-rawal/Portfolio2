import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import Model from "./Model.tsx";

export default function Scene({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      dpr={[1, 2]}
      frameloop={active ? "always" : "demand"}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6.5], fov: 38 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 6, 5]} intensity={1.7} />
      <directionalLight position={[-5, -2, -4]} intensity={0.55} />
      <Suspense fallback={null}>
        <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.5}>
          <Model />
        </Float>
      </Suspense>
    </Canvas>
  );
}
