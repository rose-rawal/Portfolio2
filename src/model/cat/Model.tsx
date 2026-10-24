import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";

useGLTF.preload("/cat_dispenser.glb");

/**
 * The cat dispenser model, normalised to a fixed size, slowly turning,
 * bobbing and leaning toward the pointer.
 */
export default function Model() {
  const { scene } = useGLTF("/cat_dispenser.glb");
  const model = useMemo(() => scene.clone(), [scene]);
  const group = useRef<Group>(null);

  const fitted = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const max = Math.max(size.x, size.y, size.z) || 1;
    const scale = 2.8 / max;
    return {
      scale,
      position: new THREE.Vector3(
        -center.x * scale,
        -center.y * scale,
        -center.z * scale
      ),
    };
  }, [model]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;

    g.rotation.y += delta * 0.32;
    g.rotation.x += (py * 0.3 - g.rotation.x) * 0.04;
    g.rotation.z += (-px * 0.18 - g.rotation.z) * 0.04;
    g.position.y = Math.sin(t * 0.8) * 0.12;
  });

  return (
    <group ref={group}>
      <primitive
        object={model}
        scale={fitted.scale}
        position={fitted.position}
      />
    </group>
  );
}
