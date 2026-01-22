'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, ArrowRight, Timer } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Sprint & Optimización) ---
const CONTENT = {
  es: {
    badge: "Sprint de 2 Semanas",
    title_start: "¿Tu canal digital",
    title_highlight: "CONVIERTE",
    title_middle: "o solo recibe",
    title_ghost: "VISITAS?",
    desc: "En 2 semanas ejecutamos un Sprint de Optimización: detectamos fricción, instrumentamos lo mínimo necesario y entregamos 1–2 mejoras con medición de impacto.",
    cta: "Solicitar Sprint de Optimización",
    micro: "Ideal si ya tienes tráfico y quieres mejorar eficiencia sin humo.",
    link: "/contacto"
  },
  en: {
    badge: "2-Week Sprint",
    title_start: "Does your digital channel",
    title_highlight: "CONVERT",
    title_middle: "or just get",
    title_ghost: "VISITS?",
    desc: "In 2 weeks, we execute an Optimization Sprint: we detect friction, instrument the bare minimum, and deliver 1–2 improvements with measured impact.",
    cta: "Request Optimization Sprint",
    micro: "Ideal if you have traffic and want efficiency without the fluff.",
    link: "/en/contact"
  },
  fr: {
    badge: "Sprint de 2 Semaines",
    title_start: "Votre canal numérique",
    title_highlight: "CONVERTIT-IL",
    title_middle: "ou reçoit-il juste des",
    title_ghost: "VISITES ?",
    desc: "En 2 semaines, nous exécutons un Sprint d'Optimisation : détection de frictions, instrumentation minimale et livraison de 1–2 améliorations mesurées.",
    cta: "Demander un Sprint d'Optimisation",
    micro: "Idéal si vous avez du trafic et visez l'efficacité.",
    link: "/fr/contact"
  }
};

interface ContentHeroProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function ContentHero({ lang = 'es' }: ContentHeroProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-10">
      
      {/* Fondo técnico: Grid en movimiento lento */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- COLUMNA IZQUIERDA: Propuesta de Valor Quirúrgica --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8 backdrop-blur-sm">
            <Timer size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{t.badge}</span>
          </div>

          {/* Headline de Alto Contraste */}
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-8 leading-[1.1]">
            <span className="text-white">{t.title_start}</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">
              {t.title_highlight}
            </span> <br/>
            <span className="text-slate-400 text-3xl md:text-5xl font-light">{t.title_middle}</span> <br/>
            <span className="text-slate-700 blur-[1px] text-4xl md:text-6xl">{t.title_ghost}</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl border-l-2 border-emerald-500/30 pl-6">
            {t.desc}
          </p>

          <div className="flex flex-col items-start gap-4">
            <Link href={t.link}>
              <button className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                <span>{t.cta}</span>
                <Zap className="w-5 h-5 group-hover:fill-current transition-colors" />
              </button>
            </Link>
            <p className="text-xs text-slate-600 font-mono pl-1">
              {t.micro}
            </p>
          </div>
        </motion.div>

        {/* --- COLUMNA DERECHA: Metáfora Visual (Data Filtration) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] w-full flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden"
        >
          <DataFiltrationSystem />
        </motion.div>

      </div>
    </section>
  );
}

// --- SUBCOMPONENTE: Sistema de Filtrado de Datos (Corregido) ---
function DataFiltrationSystem() {
  // Usamos estado para almacenar las posiciones aleatorias SOLO en el cliente
  const [particles, setParticles] = useState<{ y: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    // Generamos las partículas solo una vez que el componente se monta en el cliente
    const newParticles = Array.from({ length: 20 }).map(() => ({
      y: Math.random() * 380,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* 1. INPUT: Ruido / Caos (Izquierda) */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 overflow-hidden">
        {/* Renderizamos partículas solo si el estado ya está poblado (cliente) */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-slate-600"
            initial={{ x: -20, y: p.y, opacity: 0 }}
            animate={{ 
              x: 200, 
              opacity: [0, 0.5, 0],
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay 
            }}
          />
        ))}
      </div>

      {/* 2. PROCESS: El Prisma / Lente (Centro) */}
      <div className="relative z-10 w-2 h-48 bg-emerald-500/20 border border-emerald-500/50 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] backdrop-blur-md flex flex-col justify-center items-center">
         <div className="w-full h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-50 animate-pulse"></div>
      </div>

      {/* 3. OUTPUT: Señal / Conversión (Derecha) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center">
        {/* Haz de luz central */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-transparent shadow-[0_0_20px_#10b981]" />
        
        {/* Partículas organizadas (Conversiones) */}
        {/* Estas no necesitan ser aleatorias, son estables */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`c-${i}`}
            className="absolute h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
            style={{ top: '50%', marginTop: -6 }}
            initial={{ x: 0, opacity: 0 }}
            animate={{ 
              x: 300, 
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeOut",
              delay: i * 0.5 
            }}
          />
        ))}
      </div>

      {/* Etiquetas Flotantes */}
      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-slate-600 uppercase">Tráfico (Ruido)</div>
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-emerald-500 uppercase font-bold">Conversión (Señal)</div>

    </div>
  );
}