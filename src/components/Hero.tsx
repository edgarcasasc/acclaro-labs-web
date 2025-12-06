// src/components/Hero.tsx
'use client'

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LogoAnimado from './LogoAnimado';
import Link from 'next/link'; // <-- Importado correctamente

// Hacemos que THREE esté disponible para JSX
extend(THREE as any);

// Variantes de animación "Glitch" para el H1
const glitchVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    textShadow: [
      '2px 2px 0px #0D3A61, -2px -2px 0px #B59A6A', 
      '-1px 0px 0px #0D3A61, 1px 0px 0px #B59A6A',
      '0px 0px 0px #0D3A61, 0px 0px 0px #B59A6A',
      '1px -1px 0px #0D3A61, -1px 1px 0px #B59A6A',
      '0px 0px 0px #0D3A61, 0px 0px 0px #B59A6A'
    ],
    x: [2, -2, 0, 1, 0],
    y: [-1, 1, 0, -1, 0],
    transition: {
      duration: 1.5,
      times: [0, 0.25, 0.5, 0.75, 1],
      // ease: "circOut", // <-- COMENTADO para evitar error de build
    },
  },
};

// Componente de Partículas 3D
const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();

  const [sphere] = useState(() => {
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


// --- Componente Principal HERO ---
export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Fondo 3D: Canvas con z-0 (detrás) */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <Particles />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Contenido de Texto: Div con z-10 (delante) */}
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        
        <LogoAnimado className="w-40 h-40 mb-4" />

        <motion.h1
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl font-serif text-blanco-pergamino uppercase tracking-wider"
        >
          FROM CHAOS TO CLARITY.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="max-w-2xl mt-8 text-lg md:text-xl text-blanco-pergamino/80"
        >
          Tu CRM no habla con tu sitio web. Tu marketing crea a ciegas. Nosotros construimos el puente que unifica tus datos (vengan de Salesforce, HubSpot o cualquier Data Lake), tu plataforma y tu contenido.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-6"
        >
          {/* --- CORRECCIÓN: Botón envuelto en Link --- */}
       <Link href="/servicios/estrategia-contenido"> {/* Cambio de ruta */}
            <motion.button 
              className="bg-azul-zafiro text-blanco-pergamino font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-lg hover:shadow-glow-blue"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}    
            >
              Obtén tu Auditoría Gratuita de Claridad
            </motion.button>
          </Link>
          
          {/* Enlace secundario a la sección de solución o servicios */}
          <Link href="/servicios/desarrollo-web" className="flex items-center gap-2 text-oro-antiguo font-semibold hover:underline cursor-pointer">
            Ver nuestro blueprint de 3 pasos
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}