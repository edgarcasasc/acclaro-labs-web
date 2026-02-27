'use client'

import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Database, LayoutTemplate, Zap, ArrowRight, Settings, BarChart3, Microscope } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Dejamos de adivinar. Empezamos a optimizar con evidencia.",
    desc: "No hacemos parches. Integramos datos, UX y experimentación con ejecución técnica para que cada mejora tenga impacto medible.",
    blueprintTitle: "Nuestro BLUEPRINT de 3 pasos: de datos a impacto",
    steps: [
      {
        title: "1) Diagnóstico",
        subtitle: "Detectamos fricción y oportunidades.",
        desc: "Revisamos UX, analítica, SEO técnico y el flujo comercial para entender qué frena la conversión.",
        icon: <Microscope className="w-8 h-8 text-rojo-lacre" />
      },
      {
        title: "2) Instrumentación",
        subtitle: "Conectamos para medir y decidir bien.",
        desc: "Integramos CRM y analítica (data layer, tracking) para tener una base confiable y experimentar.",
        icon: <Settings className="w-8 h-8 text-azul-zafiro" />
      },
      {
        title: "3) Ejecución",
        subtitle: "Probamos, mejoramos y medimos impacto.",
        desc: "Diseñamos y ejecutamos cambios (UX, contenido, automatización) y medimos el efecto en conversión.",
        icon: <BarChart3 className="w-8 h-8 text-oro-antiguo" />
      }
    ],
    footer: "IA y automatización no son el producto. Son una capa para escalar lo que ya funciona."
  },
  en: {
    title: "We stop guessing. We start optimizing with evidence.",
    desc: "We don't apply patches. We integrate data, UX, and experimentation with technical execution so every improvement has measurable impact.",
    blueprintTitle: "Our 3-Step BLUEPRINT: From Data to Impact",
    steps: [
      {
        title: "1) Diagnosis",
        subtitle: "We detect friction and opportunities.",
        desc: "We review UX, analytics, technical SEO, and sales flow to understand what is stalling conversion.",
        icon: <Microscope className="w-8 h-8 text-rojo-lacre" />
      },
      {
        title: "2) Instrumentation",
        subtitle: "We connect to measure and decide well.",
        desc: "We integrate CRM and analytics (data layer, tracking) to build a reliable baseline for experimentation.",
        icon: <Settings className="w-8 h-8 text-azul-zafiro" />
      },
      {
        title: "3) Execution",
        subtitle: "We test, improve, and measure impact.",
        desc: "We design and execute changes (UX, content, automation) and measure the effect on conversion.",
        icon: <BarChart3 className="w-8 h-8 text-oro-antiguo" />
      }
    ],
    footer: "AI and automation aren't the product. They are a layer to scale what already works."
  },
  fr: {
    title: "Nous cessons de deviner. Nous optimisons avec des preuves.",
    desc: "Nous ne posons pas de correctifs. Nous intégrons données, UX et expérimentation avec une exécution technique pour un impact mesurable.",
    blueprintTitle: "Notre PLAN en 3 étapes : Des Données à l'Impact",
    steps: [
      {
        title: "1) Diagnostic",
        subtitle: "Détection des frictions et opportunités.",
        desc: "Nous examinons l'UX, l'analytique et le flux commercial pour comprendre ce qui freine la conversion.",
        icon: <Microscope className="w-8 h-8 text-rojo-lacre" />
      },
      {
        title: "2) Instrumentation",
        subtitle: "Connexion pour mesurer et bien décider.",
        desc: "Nous intégrons CRM et analytique pour avoir une base fiable et expérimenter.",
        icon: <Settings className="w-8 h-8 text-azul-zafiro" />
      },
      {
        title: "3) Exécution",
        subtitle: "Test, amélioration et mesure d'impact.",
        desc: "Nous exécutons des changements (UX, contenu, automatisation) et mesurons l'effet sur la conversion.",
        icon: <BarChart3 className="w-8 h-8 text-oro-antiguo" />
      }
    ],
    footer: "L'IA et l'automatisation ne sont pas le produit. Elles sont une couche pour faire passer à l'échelle ce qui fonctionne déjà."
  }
};

interface SolutionSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function SolutionSection({ lang = 'es' }: SolutionSectionProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 w-full py-32 bg-slate-950 overflow-hidden">

      {/* Fondo Decorativo Avanzado */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" style={{ backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 pointer-events-none z-0" />
      <div className="absolute top-1/4 -right-[10%] w-[40%] h-[40%] rounded-full bg-azul-zafiro/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-[10%] w-[40%] h-[40%] rounded-full bg-rojo-lacre/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">

        {/* --- CABECERA --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-slate-400 tracking-wide uppercase"
          >
            La Solución
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            {t.title.split('.')[0]}. <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-200">
              {t.title.split('.')[1]}.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* --- BLUEPRINT INTERACTIVO --- */}
        <div className="relative rounded-3xl border border-white/5 bg-slate-900/30 p-8 md:p-16 backdrop-blur-2xl shadow-2xl overflow-hidden group">

          <div className="absolute inset-0 bg-gradient-to-br from-azul-zafiro/10 via-transparent to-transparent opacity-50" />

          {/* Título del Blueprint */}
          <div className="mb-16 text-center relative z-10">
            <h3 className="text-sm font-bold tracking-widest text-blue-400 uppercase border-b border-blue-500/30 inline-block pb-2">
              {t.blueprintTitle}
            </h3>
          </div>

          {/* Grid de 3 Pasos */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 z-10">

            {/* LÍNEA CONECTORA ANIMADA (Línea de Continuidad Tech) */}
            <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-[3px] bg-slate-800 rounded-full z-0 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-azul-zafiro via-blue-400 to-azul-zafiro relative"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              >
                {/* Cabeza del rayo de luz */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 blur-lg rounded-full animate-pulse" />
              </motion.div>
            </div>

            {/* --- PASO 1: Diagnóstico --- */}
            <StepCard
              stepNumber="01"
              title={t.steps[0].title}
              subtitle={t.steps[0].subtitle}
              desc={t.steps[0].desc}
              icon={t.steps[0].icon}
              delay={0.2}
            />

            {/* --- PASO 2: Instrumentación (Central) --- */}
            <StepCard
              stepNumber="02"
              title={t.steps[1].title}
              subtitle={t.steps[1].subtitle}
              desc={t.steps[1].desc}
              icon={t.steps[1].icon}
              delay={0.5}
              isCenter={true}
            />

            {/* --- PASO 3: Ejecución --- */}
            <StepCard
              stepNumber="03"
              title={t.steps[2].title}
              subtitle={t.steps[2].subtitle}
              desc={t.steps[2].desc}
              icon={t.steps[2].icon}
              delay={0.8}
            />
          </div>

          {/* Microcopy Footer */}
          <div className="mt-16 text-center border-t border-white/10 pt-8 relative z-10">
            <p className="text-sm text-slate-500 italic font-light tracking-wide">
              "{t.footer}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- SUBCOMPONENTE DE TARJETA ---
function StepCard({ stepNumber, title, subtitle, desc, icon, delay, isCenter = false }: any) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl border ${isCenter ? 'border-azul-zafiro/40 bg-slate-900/80 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'border-white/5 bg-slate-900/60 hover:bg-slate-900/80'} backdrop-blur-lg group hover:border-azul-zafiro/50 transition-all duration-500 z-10`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Efecto Glow Hover Interno */}
      <div className="absolute inset-0 bg-gradient-to-b from-azul-zafiro/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      {/* Número de Fondo Esmerilado */}
      <span className="absolute -top-6 -right-2 text-8xl font-black text-white/[0.02] select-none group-hover:text-azul-zafiro/5 transition-colors duration-500 pointer-events-none">
        {stepNumber}
      </span>

      {/* Icono con Halo Flotante */}
      <div className="mb-8 relative flex justify-center md:justify-start">
        <div className="absolute inset-0 bg-current opacity-30 blur-2xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-700" />
        <div className="relative z-10 p-4 rounded-xl bg-slate-950 border border-white/10 shadow-xl group-hover:border-azul-zafiro/30 transition-colors mx-auto md:mx-0">
          {icon}
        </div>
      </div>

      {/* Contenido */}
      <div className="text-center md:text-left">
        <h4 className="text-2xl font-bold font-sans text-white mb-2 tracking-tight">{title}</h4>
        <p className="text-xs font-bold text-blue-400 mb-4 uppercase tracking-widest">
          {subtitle}
        </p>
        <p className="text-slate-400 text-base leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}