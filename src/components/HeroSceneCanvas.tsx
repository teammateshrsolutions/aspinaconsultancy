"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Torus, Tube } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { CatmullRomCurve3, Vector3, type Group } from "three";

function Book() {
  return <group position={[0, -.08, 0]}>
    <mesh position={[0, -.05, 0]}><boxGeometry args={[.12, .08, .76]} /><meshStandardMaterial color="#FCA423" metalness={.5} roughness={.3} /></mesh>
    <mesh position={[-.25, 0, 0]} rotation={[0, 0, .09]}><boxGeometry args={[.5, .04, .7]} /><meshPhysicalMaterial color="#FFFFFF" roughness={.3} clearcoat={.5} /></mesh>
    <mesh position={[.25, 0, 0]} rotation={[0, 0, -.09]}><boxGeometry args={[.5, .04, .7]} /><meshPhysicalMaterial color="#FFFFFF" roughness={.3} clearcoat={.5} /></mesh>
    {[-1, 1].map((side) => <group key={side} position={[side * .27, .026, -.18]} rotation={[0, 0, side * -.09]}>{[0, 1, 2].map((line) => <mesh key={line} position={[side * -.025, 0, line * .12]}><boxGeometry args={[.23 - line * .025, .004, .008]} /><meshBasicMaterial color="#023760" /></mesh>)}</group>)}
  </group>;
}

function Markers({ reduced }: { reduced: boolean }) {
  const speed = reduced ? 0 : .75;
  const lift = reduced ? 0 : .23;
  return <>
    <Float speed={speed} floatIntensity={lift} rotationIntensity={reduced ? 0 : .12}><group position={[-1.05, .58, .1]}><mesh><octahedronGeometry args={[.12, 0]} /><meshStandardMaterial color="#FDDDA9" metalness={.4} roughness={.2} emissive="#FCA423" emissiveIntensity={.2} /></mesh><Torus args={[.2, .006, 8, 48]} rotation={[.8, .2, .2]}><meshBasicMaterial color="#FDDDA9" transparent opacity={.7} /></Torus></group></Float>
    <Float speed={speed} floatIntensity={lift} rotationIntensity={reduced ? 0 : .1}><group position={[1.08, .44, -.1]}><mesh><boxGeometry args={[.18, .22, .16]} /><meshStandardMaterial color="#FDDDA9" metalness={.45} roughness={.25} /></mesh><mesh position={[0, .16, 0]}><coneGeometry args={[.1, .11, 4]} /><meshStandardMaterial color="#FFFFFF" /></mesh></group></Float>
    <Float speed={speed} floatIntensity={lift} rotationIntensity={reduced ? 0 : .15}><mesh position={[.72, -.75, .32]} rotation={[.3, .2, .4]}><icosahedronGeometry args={[.1, 0]} /><meshStandardMaterial color="#FFFFFF" metalness={.5} roughness={.2} /></mesh></Float>
  </>;
}

function SceneArtwork({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);
  const route = useMemo(() => new CatmullRomCurve3([new Vector3(-1.25, -.08, .1), new Vector3(-.98, .48, .12), new Vector3(-.46, .58, .06), new Vector3(.08, .38, .05), new Vector3(.64, .2, -.03), new Vector3(1.13, .42, -.1)]), []);
  useFrame((state, delta) => { if (!group.current || reduced) return; group.current.rotation.y += delta * .032; group.current.rotation.x = Math.sin(state.clock.elapsedTime * .16) * .02; });
  return <group ref={group}><Book /><Tube args={[route, 96, .008, 8, false]}><meshBasicMaterial color="#FDDDA9" transparent opacity={.8} /></Tube><Torus args={[1.4, .006, 8, 128]} rotation={[1.05, .22, -.46]}><meshBasicMaterial color="#FDDDA9" transparent opacity={.52} /></Torus><Torus args={[1.6, .004, 8, 128]} rotation={[.8, -.38, .6]}><meshBasicMaterial color="#FCA423" transparent opacity={.6} /></Torus><Markers reduced={reduced} /></group>;
}

export default function HeroSceneCanvas() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => { const media = window.matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReduced(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update); }, []);
  return <div className="hero-scene" role="img" aria-label="Interactive three-dimensional open book with a route connecting study and campus markers. Drag to explore."><Canvas camera={{ position: [0, 0, 4.8], fov: 38 }} dpr={[1, 1.35]} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}><ambientLight intensity={1.35} /><directionalLight position={[3, 4, 5]} intensity={2.2} /><pointLight position={[-2, 1.5, 2]} intensity={7} color="#FCA423" /><SceneArtwork reduced={reduced} />{!reduced && <Sparkles count={26} scale={3.8} size={1.2} speed={.15} opacity={.35} color="#FDDDA9" />}<OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 1.65} rotateSpeed={.38} /></Canvas></div>;
}
