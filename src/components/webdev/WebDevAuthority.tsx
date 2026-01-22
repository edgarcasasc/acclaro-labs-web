'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, WifiOff, Zap, CheckCircle2 } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Opción 1: Premium/Precisa) ---
const CONTENT = {
  es: {
    label: "MOBILE & PWA",
    title: "Equipo full-stack + UX, en una sola mesa.",
    desc: "Construimos PWAs con experiencia tipo app: rápidas, instalables y orientadas a conversión, sin depender de App Store.",
    features: [
      { label: "Instalable", icon: Download },
      { label: "Offline Ready", icon: WifiOff },
      { label: "Push Notif", icon: Zap }
    ],
    visual: {
      notification: "Agregado a Pantalla de Inicio",
      speed: "Load: 0.8s"
    }
  },
  en: {
    label: "MOBILE & PWA",
    title: "Full-stack team + UX, at the same table.",
    desc: "We build PWAs with app-like experience: fast, installable, and conversion-oriented, without depending on the App Store.",
    features: [
      { label: "Installable", icon: Download },
      { label: "Offline Ready", icon: WifiOff },
      { label: "Push Notif", icon: Zap }
    ],
    visual: {
      notification: "Added to Home Screen",
      speed: "Load: 0.8s"
    }
  },
  fr: {
    label: "MOBILE & PWA",
    title: "Équipe full-stack + UX, à la même table.",
    desc: "Nous construisons des PWA avec une expérience type app : rapides, installables et orientées conversion, sans dépendre de l'App Store.",
    features: [
      { label: "Installable", icon: Download },
      { label: "Offline Ready", icon: WifiOff },
      { label: "Push Notif", icon: Zap }
    ],
    visual: {
      notification: "Ajouté à l'écran d'accueil",
      speed: "Load: 0.8s"
    }
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function WebDevPwa({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative py-24 px-6 bg-slate-950 border-b border-white/5 overflow-hidden">
      
      {/* Luz Ambiental Indigo/Purple */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- COLUMNA IZQUIERDA: Propuesta de Valor --- */}
        <div className="text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Smartphone size={16} className="text-indigo-400" />
            <span className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">
              {t.label}
            </span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight"
          >
            {t.title}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 mb-10 leading-relaxed font-light max-w-lg"
          >
            {t.desc}
          </motion.p>

          {/* Badges Técnicos */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {t.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 shadow-sm">
                  <Icon size={14} className="text-indigo-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wide">{feature.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* --- COLUMNA DERECHA: Visual "Phantom App" --- */}
        <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px]">
          <PhantomApp visualText={t.visual} />
        </div>

      </div>
    </section>
  );
}

// --- SUBCOMPONENTE: Mockup de App Flotante ---
function PhantomApp({ visualText }: { visualText: any }) {
  return (
    <motion.div 
      className="relative w-72 h-[480px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden"
      initial={{ y: 20 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Reflejo de Pantalla */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />

      {/* Notch / Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-b-xl z-30" />

      {/* Contenido de la Pantalla (Abstracto) */}
      <div className="w-full h-full bg-slate-950 flex flex-col p-4 pt-12">
        {/* Header App */}
        <div className="flex justify-between items-center mb-6">
           <div className="w-8 h-8 rounded-full bg-indigo-500/20"></div>
           <div className="w-24 h-3 rounded-full bg-slate-800"></div>
           <div className="w-6 h-6 rounded bg-slate-800"></div>
        </div>

        {/* Hero Card */}
        <div className="w-full h-32 bg-gradient-to-br from-indigo-900/50 to-slate-900 rounded-2xl mb-4 border border-indigo-500/20 p-4 flex flex-col justify-end">
           <div className="w-1/2 h-4 bg-indigo-400/20 rounded mb-2"></div>
           <div className="w-1/3 h-3 bg-slate-700/50 rounded"></div>
        </div>

        {/* List Items */}
        <div className="space-y-3">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
               <div className="w-10 h-10 rounded-lg bg-slate-800"></div>
               <div className="flex-1">
                 <div className="w-20 h-3 bg-slate-700 rounded mb-1.5"></div>
                 <div className="w-12 h-2 bg-slate-800 rounded"></div>
               </div>
               <div className="w-4 h-4 rounded-full border border-indigo-500/50"></div>
            </div>
          ))}
        </div>

        {/* Botón Flotante de Acción */}
        <div className="mt-auto mx-auto w-12 h-12 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center">
          <Zap size={20} className="text-white fill-white" />
        </div>
      </div>

      {/* ELEMENTOS FLOTANTES (Pop-ups) */}
      
      {/* 1. Notificación de Instalación */}
      <motion.div 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] bg-slate-800/90 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-xl z-40 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <div className="p-1.5 bg-green-500/20 rounded-full">
           <CheckCircle2 size={12} className="text-green-400" />
        </div>
        <span className="text-[10px] font-bold text-white">{visualText.notification}</span>
      </motion.div>

      {/* 2. Speed Indicator (Lateral) */}
      <motion.div 
        className="absolute bottom-20 -right-8 bg-slate-900 border border-emerald-500/30 py-1.5 px-3 rounded-lg shadow-lg z-40 rotate-[-5deg]"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-mono font-bold text-emerald-400">{visualText.speed}</span>
      </motion.div>

    </motion.div>
  );
}