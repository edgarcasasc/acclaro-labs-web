// src/components/informes/InformesProblem.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MousePointerClick, MessageSquareWarning, Unplug, AlertOctagon } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Versión A: Digital-First) ---
const CONTENT = {
  es: {
    label: "El Problema",
    title: "¿Tu canal digital está operando como una “caja negra”?",
    desc: "Tienes datos en CRM, analytics y soporte. Pero sin una medición confiable y una lectura clara del funnel, las decisiones se vuelven intuición.",
    cards: [
      { 
        title: "Ventas & Marketing", 
        text: "¿Por qué mis leads se enfrían? Invierto en adquisición, pero no tengo claridad de qué canales y mensajes generan pipeline real." 
      },
      { 
        title: "Conversión & UX", 
        text: "¿Por qué la web no convierte? Hay fricción en formularios, páginas clave y flujos que está costando ventas y velocidad comercial." 
      },
      { 
        title: "Operación & Soporte", 
        text: "¿Por qué suben los tickets? Tengo señales en soporte y FAQs, pero no se convierten en mejoras concretas del producto o experiencia." 
      },
      { 
        title: "Integración & Medición", 
        text: "Tengo datos en CRM, ERP y Excel, pero no están conectados. No puedo atribuir, segmentar ni automatizar con confianza." 
      }
    ],
    footer: "En el Diagnóstico (Snapshot) te decimos qué cambiar primero y cómo medirlo."
  },
  en: {
    label: "The Problem",
    title: "Is your digital channel operating like a 'black box'?",
    desc: "You have data in CRM, analytics, and support. But without reliable measurement and a clear funnel view, decisions become guessing.",
    cards: [
      { 
        title: "Sales & Marketing", 
        text: "Why do leads go cold? I invest in acquisition, but lack clarity on which channels and messages generate real pipeline." 
      },
      { 
        title: "Conversion & UX", 
        text: "Why isn't the site converting? Friction in forms, key pages, and flows is costing sales and commercial velocity." 
      },
      { 
        title: "Ops & Support", 
        text: "Why are tickets rising? I have signals in support/FAQs, but they don't turn into concrete product or experience improvements." 
      },
      { 
        title: "Integration & Measurement", 
        text: "Data sits in CRM, ERP, and Excel, disconnected. I can't attribute, segment, or automate with confidence." 
      }
    ],
    footer: "In the Diagnosis (Snapshot), we tell you what to change first and how to measure it."
  },
  fr: {
    label: "Le Problème",
    title: "Votre canal numérique fonctionne-t-il comme une « boîte noire » ?",
    desc: "Vous avez des données CRM et analytics. Mais sans mesure fiable, les décisions deviennent de l'intuition.",
    cards: [
      { 
        title: "Ventes et Marketing", 
        text: "Pourquoi les leads refroidissent-ils ? J'investis, mais sans clarté sur les canaux qui génèrent un pipeline réel." 
      },
      { 
        title: "Conversion et UX", 
        text: "Pourquoi le site ne convertit-il pas ? Des frictions dans les flux coûtent des ventes et de la vitesse commerciale." 
      },
      { 
        title: "Opérations et Support", 
        text: "Pourquoi les tickets augmentent-ils ? Les signaux du support ne se transforment pas en améliorations concrètes." 
      },
      { 
        title: "Intégration et Mesure", 
        text: "Données déconnectées entre CRM, ERP et Excel. Impossible d'attribuer ou d'automatiser avec confiance." 
      }
    ],
    footer: "Dans le Diagnostic (Snapshot), nous vous disons quoi changer en premier et comment le mesurer."
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesProblem({ lang = 'es' }: Props) {
  const t = CONTENT[lang];
  
  // Iconos asignados a cada tarjeta (Digital First)
  const icons = [
    <TrendingUp key="1" className="w-8 h-8 text-rojo-lacre" />,        // Ventas
    <MousePointerClick key="2" className="w-8 h-8 text-rojo-lacre" />, // UX/Conversión
    <MessageSquareWarning key="3" className="w-8 h-8 text-rojo-lacre" />, // Soporte
    <Unplug key="4" className="w-8 h-8 text-rojo-lacre" />             // Integración (Desconectado)
  ];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden border-y border-white/5">
      
      {/* Fondo de ruido sutil */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rojo-lacre/10 border border-rojo-lacre/30 mb-8"
          >
            <AlertOctagon size={16} className="text-rojo-lacre" />
            <span className="text-rojo-lacre text-xs font-bold uppercase tracking-widest">{t.label}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl font-bold md:text-5xl text-white mb-6"
          >
            {t.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* --- GRID DE 4 TARJETAS --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }} // Efecto cascada
              className="group relative flex flex-col h-full rounded-2xl border border-white/5 bg-slate-900/50 p-8 hover:bg-slate-900 transition-all duration-300 hover:border-rojo-lacre/40 hover:-translate-y-1 hover:shadow-glow-red-sm"
            >
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-slate-950 border border-white/5 group-hover:border-rojo-lacre/20 transition-colors">
                {icons[i]}
              </div>
              <h3 className="mb-4 text-xl font-bold text-white group-hover:text-rojo-lacre transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER MICROCOPY (El cierre de conversión) --- */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="text-lg font-medium text-slate-300">
            {t.footer}
          </p>
          <div className="mt-2 h-0.5 w-16 bg-oro-antiguo/50 mx-auto rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}