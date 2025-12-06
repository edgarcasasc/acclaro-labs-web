// src/components/DigitalUniverse.tsx
'use client'

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random'; 
import * as THREE from 'three';

// Componente de Partículas 3D (del código de Gemini/Hero)
const Particles = () => {
const ref = useRef<THREE.Points>(null);
const { viewport, mouse } = useThree();

const [sphere] = useState(() => {
// Usamos el array del tamaño correcto
const positions = new Float32Array(5000 * 3); 
for (let i = 0; i < 5000; i++) {
const r = 4.5 + Math.random() * 2;
const phi = Math.random() * Math.PI * 2;
const theta = Math.random() * Math.PI;
positions[i * 3] = r * Math.cos(phi) * Math.sin(theta);
positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
positions[i * 3 + 2] = r * Math.cos(theta);
}
return positions;
});

useFrame((state, delta) => {
if (ref.current) {
ref.current.rotation.x -= delta / 25;
ref.current.rotation.y -= delta / 20;

const target = new THREE.Vector3(
(mouse.x * viewport.width) / 2.5,
(mouse.y * viewport.height) / 2.5,
0
);
ref.current.position.lerp(target, 0.02);
}
});

return (
<Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
<PointMaterial transparent color="#B59A6A" size={0.015} sizeAttenuation={true} depthWrite={false} />
</Points>
);
};

// --- Componente Principal del FONDO ---
export default function DigitalUniverse() {
return (
// ESTA ES LA ARQUITECTURA: Fijo, clavado al fondo (z-index negativo)
<div className="fixed top-0 left-0 w-full h-screen -z-10">
<Canvas camera={{ position: [0, 0, 5] }}>
<Suspense fallback={null}>
<ambientLight intensity={0.2} />
<Particles />
</Suspense>
</Canvas>
</div>
);
}