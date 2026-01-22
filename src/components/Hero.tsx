'use client'

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LogoAnimado from './LogoAnimado';
import Link from 'next/link';

extend(THREE as any);

const CONTENT = {
  es: {
    title: "Acelera el negocio digital de tu empresa.",
    desc: "Optimizamos UX, analítica y experimentación, conectando tus sistemas (CRM/ERP/soporte) para medir impacto y escalar con automatización/IA cuando conviene.",
    ctaPrimary: "Solicitar Diagnóstico",
    ctaSecondary: "Ver método y entregables",
    linkPrimary: "/servicios/estrategia-contenido#auditoria",
    linkSecondary: "/servicios/desarrollo-web"
  },
  en: {
    title: "Accelerate your company's digital growth.",
    desc: "We improve UX, analytics, and experimentation—connecting your systems (CRM/ERP/support) so you can measure impact and scale with automation/AI only when it makes business sense.",
    ctaPrimary: "Request a Diagnostic",
    ctaSecondary: "See our Method & Deliverables",
    linkPrimary: "/servicios/estrategia-contenido#auditoria",
    linkSecondary: "/servicios/desarrollo-web"
  },
  fr: {
    title: "Accélérez la performance digitale de votre entreprise.",
    desc: "Nous optimisons l'UX, l'analytics et l'expérimentation, en connectant vos systèmes (CRM/ERP/support) pour mesurer l’impact et passer à l’échelle avec l’automatisation/IA quand cela crée une vraie valeur.",
    ctaPrimary: "Demander un diagnostic",
    ctaSecondary: "Voir la méthode et les livrables",
    linkPrimary: "/servicios/estrategia-contenido#auditoria",
    linkSecondary: "/servicios/desarrollo-web"
  }
};

// MODIFICACIÓN SEO: Opacity 1 por defecto para que los bots lean el H1 de inmediato
const glitchVariants: Variants = {
  initial: { opacity: 1, y: 0 }, 
  animate: {
    textShadow: [
      '2px 2px 0px #0D3A61, -2px -2px 0px #B59A6A', 
      '-1px 0px 0px #0D3A61, 1px 0px 0px #B59A6A',
      '0px 0px 0px #0D3A61, 0px 0px 0px #B59A6A',
      '1px -1px 0px #0D3A61, -1px 1px 0px #B59A6A',
      '0px 0px 0px #0D3A61, 0px 0px 0px #B59A6A'
    ],
    x: [1, -1, 0, 0.5, 0],
    y: [-0.5, 0.5, 0, -0.5, 0],
    transition: {
      duration: 1.5,
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },
};

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
        const target = new THREE.Vector3((mouse.x * viewport.width) / 2.5, (mouse.y * viewport.height) / 2.5, 0);
        ref.current.position.lerp(target, 0.02);
    }
  });
  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#B59A6A" size={0.015} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
};

interface HeroProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function Hero({ lang = 'es' }: HeroProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Fondo 3D: Envuelto en Suspense para evitar el Bailout de renderizado */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-slate-950" />}>
          <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
              <ambientLight intensity={0.2} />
              <Particles />
          </Canvas>
        </Suspense>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        
        <LogoAnimado className="w-40 h-40 mb-4" />

        <motion.h1
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl font-serif text-blanco-pergamino uppercase tracking-wider"
        >
          {t.title}
        </motion.h1>

        {/* MODIFICACIÓN SEO: Eliminamos opacity 0 inicial. 
            El usuario verá un suave "asentamiento" (y: 10 -> 0) pero el bot leerá el texto siempre. */}
        <motion.p 
          initial={{ y: 10, opacity: 1 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mt-8 text-lg md:text-xl text-blanco-pergamino/80"
        >
          {t.desc}
        </motion.p>
        
        <motion.div 
          initial={{ y: 10, opacity: 1 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link href={t.linkPrimary}>
            <motion.button 
              className="bg-azul-zafiro text-blanco-pergamino font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-lg hover:shadow-glow-blue"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}    
            >
              {t.ctaPrimary}
            </motion.button>
          </Link>
          
          <Link href={t.linkSecondary} className="flex items-center gap-2 text-oro-antiguo font-semibold hover:underline cursor-pointer group">
            {t.ctaSecondary}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}