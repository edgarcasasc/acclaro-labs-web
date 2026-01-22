'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, Zap, Layers, Link as LinkIcon } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Variante 2: Motor vs Cementerio) ---
const CONTENT = {
  es: {
    eyebrow: "Integración & Medición",
    title_start: "¿Tu CRM es un",
    title_highlight: "Motor Comercial",
    title_middle: "o un",
    title_end: "Cementerio de Datos?",
    desc: "Cuando CRM, web, ads y soporte no se hablan, la atribución falla y el pipeline se enfría. Conectamos fuentes, limpiamos señales clave y dejamos instrumentado lo necesario para decidir con evidencia.",
    cta: "Solicitar diagnóstico",
    micro: "Trabajamos sobre tu stack actual (Salesforce, HubSpot, etc)."
  },
  en: {
    eyebrow: "Integration & Measurement",
    title_start: "Is Your CRM a",
    title_highlight: "Revenue Engine",
    title_middle: "or a",
    title_end: "Data Graveyard?",
    desc: "When CRM, web, ads, and support don't talk, attribution fails and pipeline goes cold. We connect sources, clean key signals, and instrument what's needed to decide with evidence.",
    cta: "Request Diagnosis",
    micro: "We work on your current stack (Salesforce, HubSpot, etc)."
  },
  fr: {
    eyebrow: "Intégration & Mesure",
    title_start: "Votre CRM est-il un",
    title_highlight: "Moteur de Revenus",
    title_middle: "ou un",
    title_end: "Cimetière de Données ?",
    desc: "Quand CRM, web, pubs et support ne se parlent pas, l'attribution échoue. Nous connectons les sources et instrumentons le nécessaire pour décider avec des preuves.",
    cta: "Demander un diagnostic",
    micro: "Nous travaillons sur votre stack actuel."
  }
};

interface CrmHeroProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CrmHero({ lang = 'es' }: CrmHeroProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-12">
      
      {/* Fondo técnico: Grid y Luz */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none opacity-60" />

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- COLUMNA IZQUIERDA: Copy Estratégico --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {/* Eyebrow / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6 backdrop-blur-sm">
            <LinkIcon size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{t.eyebrow}</span>
          </div>

          {/* Headline de Contraste */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] mb-6 text-white">
            {t.title_start} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-sm">
              {t.title_highlight}
            </span> <br/>
            <span className="text-3xl md:text-5xl font-sans font-light text-slate-500 block my-2">
              {t.title_middle}
            </span>
            <span className="text-slate-400 decoration-slate-700 underline decoration-4 underline-offset-4 decoration-wavy">
              {t.title_end}
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed border-l-2 border-blue-500/30 pl-6 font-light">
            {t.desc}
          </p>

          <div className="flex flex-col items-start gap-4">
            <Link href="/contacto">
              <button className="group relative overflow-hidden bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-3">
                <span className="relative z-10">{t.cta}</span>
                <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                
                {/* Efecto Shine */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </button>
            </Link>
            <p className="text-xs text-slate-600 font-mono pl-1">
              {t.micro}
            </p>
          </div>
        </motion.div>

        {/* --- COLUMNA DERECHA: Visual de Integración (Sistema Solar) --- */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
          <OrbitingCrmSystem />
        </div>

      </div>
    </section>
  );
}

// --- SUBCOMPONENTE: Sistema Solar de Integración ---
function OrbitingCrmSystem() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* NÚCLEO CENTRAL (Data Core / Single Source of Truth) */}
      <div className="relative z-20 w-32 h-32 bg-slate-900 border border-blue-500/30 rounded-full flex items-center justify-center shadow-[0_0_60px_-10px_rgba(59,130,246,0.4)] backdrop-blur-md">
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse" />
        <Database className="w-12 h-12 text-blue-400" />
        <div className="absolute -bottom-8 text-[10px] font-bold uppercase tracking-widest text-blue-500 text-center w-full">
          Single Source<br/>of Truth
        </div>
      </div>

      {/* ORBITA 1: Salesforce (Azul Profundo) */}
      <OrbitRing size={260} duration={25} delay={0}>
        <div className="w-14 h-14 bg-slate-900 border border-blue-600/40 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:scale-110 transition-transform cursor-help" title="Salesforce">
          <span className="font-bold text-blue-500 text-[10px]">SFDC</span>
        </div>
      </OrbitRing>

      {/* ORBITA 2: HubSpot (Naranja) */}
      <OrbitRing size={360} duration={30} delay={-5} reverse>
        <div className="w-12 h-12 bg-slate-900 border border-orange-500/40 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:scale-110 transition-transform cursor-help" title="HubSpot">
          <span className="font-bold text-orange-500 text-[10px]">Hub</span>
        </div>
      </OrbitRing>

      {/* ORBITA 3: Custom / Ads / Analytics (Violeta) */}
      <OrbitRing size={190} duration={18} delay={-2} reverse>
        <div className="w-10 h-10 bg-slate-900 border border-violet-500/40 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-110 transition-transform cursor-help" title="Custom API / Ads">
          <Layers className="w-4 h-4 text-violet-400" />
        </div>
      </OrbitRing>
      
      {/* Líneas de órbita visuales (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <circle cx="50%" cy="50%" r="95" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" strokeDasharray="4 4" />
        <circle cx="50%" cy="50%" r="130" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" strokeDasharray="4 4" />
        <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// Helper para animar las órbitas
function OrbitRing({ size, duration, delay, reverse, children }: { size: number, duration: number, delay: number, reverse?: boolean, children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{ width: size, height: size }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
    >
      <div className="absolute top-0 -translate-y-1/2">
        <motion.div 
           // Rotamos el hijo al revés para que siempre esté "de pie"
           animate={{ rotate: reverse ? 360 : -360 }}
           transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}