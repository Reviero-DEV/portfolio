import { useRef, useEffect } from "react";
import * as THREE from "three";
export default function AnimatedView() {
  const meshRef = useRef();
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/night.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.play().catch(() => {
      console.log("Autoplay bloqueado, interação necessária");
    });
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;
    if (meshRef.current) {
      meshRef.current.material.map = texture;
      meshRef.current.material.needsUpdate = true;
    }
  }, []);
  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[10, 5]} />
      <meshBasicMaterial toneMapped={false} />
    </mesh>
  );
}
