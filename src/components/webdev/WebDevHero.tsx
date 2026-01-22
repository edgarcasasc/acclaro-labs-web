'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layout, ArrowRight, Database, BarChart3, Globe, Server } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Opción 1: Product-Grade) ---
const CONTENT = {
  es: {
    badge: "Product-Grade Development",
    title_start: "¿Tu sitio web",
    title_highlight: "VENDE",
    title_middle: "o solo",
    title_ghost: "informa?",
    desc: "Diseñamos y construimos experiencias de producto orientadas a conversión: UX, performance e instrumentación. Conectamos tu web con CRM/ERP para que cada interacción tenga contexto y se pueda medir.",
    cta: "Solicitar diagnóstico Web & Product",
    micro: "Stack moderno (React/Next.js) + Integración Enterprise.",
    link: "/contacto"
  },
  en: {
    badge: "Product-Grade Development",
    title_start: "Does your website",
    title_highlight: "SELL",
    title_middle: "or just",
    title_ghost: "inform?",
    desc: "We design and build product experiences focused on conversion: UX, performance, and instrumentation. We connect your web with CRM/ERP so every interaction has context and is measurable.",
    cta: "Request Web & Product Diagnosis",
    micro: "Modern Stack (React/Next.js) + Enterprise Integration.",
    link: "/en/contact"
  },
  fr: {
    badge: "Développement Produit",
    title_start: "Votre site web",
    title_highlight: "VEND-IL",
    title_middle: "ou fait-il juste",
    title_ghost: "informer ?",
    desc: "Nous concevons des expériences produit orientées conversion : UX, performance et instrumentation. Nous connectons votre web au CRM/ERP pour mesurer chaque interaction.",
    cta: "Demander un diagnostic Web & Produit",
    micro: "Stack moderne (React/Next.js) + Intégration Entreprise.",
    link: "/fr/contact"
  }
};

interface WebDevHeroProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function WebDevHero({ lang = 'es' }: WebDevHeroProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-12">
      
      {/* Fondo Arquitectónico (Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Luz Ambiental Indigo */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- COLUMNA IZQUIERDA: Copy de Producto --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-8 backdrop-blur-sm">
            <Layout size={14} className="text-indigo-400" />
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">{t.badge}</span>
          </div>

          {/* Headline Contrastado */}
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-8 leading-[1.1]">
            <span className="text-white">{t.title_start}</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]">
              {t.title_highlight}
            </span> <br/>
            <span className="text-slate-400 text-3xl md:text-5xl font-sans font-light block my-2">{t.title_middle}</span>
            <span className="text-slate-700 blur-[1px] text-4xl md:text-6xl">{t.title_ghost}</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl border-l-2 border-indigo-500/30 pl-6">
            {t.desc}
          </p>

          <div className="flex flex-col items-start gap-4">
            <Link href={t.link}>
              <button className="group relative flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                <span>{t.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <p className="text-xs text-slate-500 font-mono pl-1">
              {t.micro}
            </p>
          </div>
        </motion.div>

        {/* --- COLUMNA DERECHA: Interfaz Conectada --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[450px] w-full flex items-center justify-center perspective-[1000px]"
        >
          <ConnectedInterface />
        </motion.div>

      </div>
    </section>
  );
}

// --- SUBCOMPONENTE: Interfaz Conectada (Visual System) ---
function ConnectedInterface() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* 1. MOCKUP CENTRAL (La Web) */}
      <div className="relative z-20 w-64 h-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg]">
        {/* Browser Header */}
        <div className="h-6 bg-slate-800 border-b border-slate-700 flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        </div>
        {/* Screen Content */}
        <div className="flex-1 p-4 flex flex-col gap-3 relative">
          <div className="h-20 w-full bg-slate-800/50 rounded animate-pulse"></div>
          <div className="flex gap-2">
             <div className="h-24 w-1/2 bg-slate-800/30 rounded"></div>
             <div className="h-24 w-1/2 bg-slate-800/30 rounded"></div>
          </div>
          {/* Botón de conversión destacado */}
          <div className="mt-auto h-10 w-full bg-indigo-600 rounded flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-[8px] font-bold text-white uppercase tracking-widest">Buy Now</span>
          </div>
          
          {/* Overlay de Datos (Pulsos) */}
          <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none animate-pulse"></div>
        </div>
      </div>

      {/* 2. NODOS TRASEROS (Backend / Integraciones) */}
      
      {/* Nodo CRM */}
      <FloatingNode 
        icon={Database} 
        label="CRM" 
        className="absolute top-10 left-0" 
        color="text-blue-400" 
        delay={0} 
      />
      
      {/* Nodo ERP */}
      <FloatingNode 
        icon={Server} 
        label="ERP" 
        className="absolute bottom-20 left-10" 
        color="text-emerald-400" 
        delay={1.5} 
      />

      {/* Nodo Analytics */}
      <FloatingNode 
        icon={BarChart3} 
        label="Analytics" 
        className="absolute top-1/2 right-0 transform -translate-y-1/2" 
        color="text-amber-400" 
        delay={0.8} 
      />

      {/* 3. LÍNEAS DE CONEXIÓN (Beams) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {/* Linea CRM -> Web */}
        <ConnectionLine x1="15%" y1="15%" x2="50%" y2="50%" color="#60a5fa" delay={0} />
        {/* Linea ERP -> Web */}
        <ConnectionLine x1="20%" y1="80%" x2="50%" y2="50%" color="#34d399" delay={1.5} />
        {/* Linea Web -> Analytics */}
        <ConnectionLine x1="50%" y1="50%" x2="85%" y2="50%" color="#fbbf24" delay={0.8} reverse />
      </svg>

    </div>
  );
}

// Nodo Flotante
const FloatingNode = ({ icon: Icon, label, className, color, delay }: any) => (
  <motion.div 
    className={`p-3 rounded-lg bg-slate-900 border border-slate-700 shadow-xl z-10 flex items-center gap-2 ${className}`}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
  >
    <Icon size={16} className={color} />
    <span className="text-[10px] font-bold text-slate-300 uppercase">{label}</span>
  </motion.div>
);

// Línea de Conexión Animada
const ConnectionLine = ({ x1, y1, x2, y2, color, delay, reverse }: any) => (
  <>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" strokeOpacity="0.2" />
    <motion.circle 
      r="3" 
      fill={color}
      initial={{ offsetDistance: "0%" }}
      animate={{ 
        // Simulación básica de movimiento a lo largo de la línea (SVG path sería ideal, pero esto es visualmente aceptable y rápido)
        cx: [x1, x2],
        cy: [y1, y2],
        opacity: [0, 1, 0]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "linear", 
        delay: delay,
        repeatDelay: 0.5 
      }}
    />
  </>
);