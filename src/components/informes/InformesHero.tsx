'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BarChart3, Activity, PieChart } from 'lucide-react'; // Iconos de informes

// 1. Mantenemos tus imports de gráficos (Asegúrate de que estos componentes existan)
import GraficaLinea from './GraficaLinea';
import GraficaStats from './GraficaStats';
import GraficaBarras from './GraficaBarras';

// --- DICCIONARIO (Mantenemos tu contenido intacto) ---
const CONTENT = {
  es: {
    title_start: "Tus datos ya tienen la respuesta.",
    title_end: "Nosotros la volvemos accionable.",
    desc: "Unimos UX, analítica y sistemas para eliminar fricción, medir impacto y escalar con automatización.",
    cta: "Solicitar diagnóstico"
  },
  en: {
    title_start: "Your data already has the answer.",
    title_end: "We make it actionable.",
    desc: "We unite UX, analytics, and systems to eliminate friction, measure impact, and scale with automation.",
    cta: "Request Diagnosis"
  },
  fr: {
    title_start: "Vos données ont déjà la réponse.",
    title_end: "Nous la rendons exploitable.",
    desc: "Nous unissons UX, analytique et systèmes pour éliminer les frictions, mesurer l'impact et passer à l'échelle.",
    cta: "Demander un diagnostic"
  }
};

interface Props {
  lang?: 'es' | 'en' | 'fr';
}

// --- COMPONENTES VISUALES ELITE (INTERNOS) ---

// 1. Efecto Spotlight (Luz cenital dramática)
const Spotlight = () => (
  <div className="pointer-events-none absolute -top-40 left-0 right-0 z-0 mx-auto h-[600px] w-full max-w-5xl opacity-30">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-[120px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
  </div>
);

// 2. Grid Pattern (Sensación técnica/arquitectónica)
const GridPattern = () => (
  <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
);

// 3. Tarjeta de Cristal (Contenedor para los gráficos) - Animación suavizada
const GlassCard = ({ children, className, delay, icon: Icon, title }: { children: React.ReactNode; className?: string; delay: number, icon: React.ElementType, title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateX: 5 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }} // Bezier suave
    className={`absolute hidden xl:flex flex-col
      rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl 
      shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] 
      hover:border-white/20 hover:bg-slate-800/80 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2
      transition-all duration-500 group ${className}`}
  >
    {/* Header de la tarjeta (Icono + Título) */}
    <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
            <Icon size={14} className="text-slate-400 group-hover:text-oro-antiguo transition-colors" />
            <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-wider">{title}</span>
        </div>
        <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500/20"></div>
            <div className="h-2 w-2 rounded-full bg-amber-500/20"></div>
            <div className="h-2 w-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors"></div>
        </div>
    </div>

    {/* Contenido (Gráfico) */}
    <div className="relative z-10 p-5 w-full h-full">
      {children}
    </div>
  </motion.div>
);

const InformesHero = ({ lang = 'es' }: Props) => {
  const t = CONTENT[lang];

  return (
    <section className="relative flex h-screen min-h-[850px] w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 text-center selection:bg-oro-antiguo/30">
      
      {/* --- CAPA DE FONDO --- */}
      <Spotlight />
      <GridPattern />
      
      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-20 flex max-w-5xl flex-col items-center">
        
        {/* Badge "Intelligence" */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md"
        >
          <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
          Intelligence & UX Audit
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          className="mb-8 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {t.title_start}
          <br className="hidden md:block" />
          {/* Texto con gradiente animado y efecto de brillo */}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-oro-antiguo via-amber-100 to-oro-antiguo pb-2">
            {t.title_end}
          </span>
        </motion.h1>
      
        {/* Descripción */}
        <motion.p 
          className="mb-12 max-w-3xl text-lg text-slate-400 md:text-2xl font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t.desc}
        </motion.p>

        {/* CTA Botón Premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contacto" 
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-oro-antiguo px-10 py-5 text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
          >
            <span className="relative z-10">{t.cta}</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            
            {/* Efecto de brillo pasando por el botón */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </Link>
        </motion.div>
      </div>

      {/* --- 4. GRÁFICOS FLOTANTES ENCAPSULADOS (Ambientación 3D) --- */}
      
      {/* Card 1: Tendencia (Izquierda Media) */}
      <GlassCard 
        title="Tasa de Conversión"
        icon={Activity}
        className="top-[25%] left-[4%] max-w-[340px] -rotate-2 hover:rotate-0 hover:z-50" 
        delay={0.8}
      >
        <GraficaLinea />
      </GlassCard>

      {/* Card 2: Distribución (Derecha Superior - Lejana) */}
      <GlassCard 
        title="Segmentación de Usuarios"
        icon={PieChart}
        className="top-[18%] right-[6%] max-w-[260px] rotate-3 opacity-90 blur-[0.5px] hover:blur-0 hover:opacity-100 hover:rotate-0 hover:z-50" 
        delay={0.9}
      >
        <GraficaStats />
      </GlassCard>

      {/* Card 3: Rendimiento (Derecha Inferior - Cercana) */}
      <GlassCard 
        title="Performance & ROI"
        icon={BarChart3}
        className="bottom-[18%] right-[8%] max-w-[400px] -rotate-1 hover:rotate-0 hover:z-50" 
        delay={1.0}
      >
        <GraficaBarras />
      </GlassCard>

    </section>
  );
};

export default InformesHero;