"use client";

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Mulberry32 PRNG — small, fast, and pure. Lets us seed point clouds for
 * React Strict / purity rules without using Math.random inside render.
 */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededPointCloud(count: number): Float32Array {
  const rng = mulberry32(count * 9973 + 1);
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    points[i * 3] = (rng() - 0.5) * 10;
    points[i * 3 + 1] = (rng() - 0.5) * 10;
    points[i * 3 + 2] = (rng() - 0.5) * 10;
  }
  return points;
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Group>(null);
  // Deterministic PRNG so React's purity checks don't flag us; same seed =>
  // same point cloud across renders. Seed derived from `count` so the two
  // branches (mobile 1500 / desktop 4000) produce stable but distinct clouds.
  const positions = React.useMemo(() => seededPointCloud(count), [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c0c1ff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

/**
 * Fullscreen particle backdrop. Honors prefers-reduced-motion (no scene at all)
 * and halves the particle count on coarse pointer devices to protect mobile GPUs.
 */
export default function Scene() {
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [coarse, setCoarse] = useState<boolean>(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(hover: none)').matches
  );

  useEffect(() => {
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqCoarse = window.matchMedia('(hover: none)');
    const onReduced = () => setReduced(mqReduced.matches);
    const onCoarse = () => setCoarse(mqCoarse.matches);
    mqReduced.addEventListener('change', onReduced);
    mqCoarse.addEventListener('change', onCoarse);
    return () => {
      mqReduced.removeEventListener('change', onReduced);
      mqCoarse.removeEventListener('change', onCoarse);
    };
  }, []);

  if (reduced) return null;

  const count = coarse ? 1500 : 4000;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Particles count={count} />
        </Suspense>
      </Canvas>
    </div>
  );
}
