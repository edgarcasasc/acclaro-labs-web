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
    <section className="relative z-10 w-full py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      
      {/* Fondo Decorativo de Red (Grid) */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        
        {/* --- CABECERA --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-blanco-pergamino mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg md:text-xl text-blanco-pergamino/70 max-w-3xl mx-auto leading-relaxed"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* --- BLUEPRINT INTERACTIVO (Reemplazo del SVG) --- */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
          
          {/* Título del Blueprint */}
          <div className="mb-12 text-center">
            <h3 className="text-sm font-bold tracking-widest text-azul-zafiro uppercase border-b border-azul-zafiro/30 inline-block pb-1">
              {t.blueprintTitle}
            </h3>
          </div>

          {/* Grid de 3 Pasos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            
            {/* LÍNEA CONECTORA ANIMADA (Solo Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 -z-10">
              <motion.div 
                className="h-full bg-azul-zafiro shadow-[0_0_10px_#2563EB]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
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
              delay={0.4}
              isCenter={true}
            />

            {/* --- PASO 3: Ejecución --- */}
            <StepCard 
              stepNumber="03" 
              title={t.steps[2].title}
              subtitle={t.steps[2].subtitle}
              desc={t.steps[2].desc}
              icon={t.steps[2].icon}
              delay={0.6}
            />
          </div>

          {/* Microcopy Footer */}
          <div className="mt-12 text-center border-t border-white/5 pt-6">
            <p className="text-sm text-gray-400 italic">
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
      className={`relative p-6 rounded-xl border ${isCenter ? 'border-azul-zafiro/50 bg-azul-zafiro/10' : 'border-white/10 bg-slate-900/50'} group hover:border-azul-zafiro/50 transition-colors duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Número de Fondo */}
      <span className="absolute -top-4 -right-2 text-6xl font-black text-white/5 select-none group-hover:text-azul-zafiro/10 transition-colors">
        {stepNumber}
      </span>

      {/* Icono con Halo */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-current opacity-20 blur-xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10 p-3 rounded-lg bg-slate-950 border border-white/10 w-fit">
          {icon}
        </div>
      </div>

      {/* Contenido */}
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-sm font-semibold text-azul-zafiro mb-3 uppercase tracking-wide text-[10px]">
        {subtitle}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>

      {/* Decoración Central (Solo para el paso 2) */}
      {isCenter && (
        <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_-5px_rgba(37,99,235,0.15)] pointer-events-none" />
      )}
    </motion.div>
  );
}