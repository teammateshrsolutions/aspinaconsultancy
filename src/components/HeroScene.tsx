"use client";

import dynamic from "next/dynamic";

function Fallback() {
  return <div className="hero-scene" aria-hidden="true"><div className="absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-[50%] border border-white/35" /><div className="absolute left-1/2 top-1/2 h-36 w-64 -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-[#FDDDA9]/50" /><div className="absolute left-1/2 top-1/2 h-12 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded bg-white/90 shadow-[0_12px_40px_rgb(82_120_255_/_22%)]" /></div>;
}

const Scene = dynamic(() => import("./HeroSceneCanvas"), { ssr: false, loading: () => <Fallback /> });
export default function HeroScene() { return <Scene />; }
