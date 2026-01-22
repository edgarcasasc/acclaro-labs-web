'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Zap, Settings, Database, Plus } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Enfoque Híbrido/Premium) ---
const CONTENT = {
  es: {
    badges: {
      left: "Arquitectura Salesforce",
      right: "Estrategia de Negocio"
    },
    title_tech: "Entendemos el código.",
    title_biz: "Hablamos en impacto medible.",
    desc: "Somos un equipo híbrido. Aterrizamos la complejidad técnica en métricas de negocio reales, priorizando cambios por impacto/esfuerzo y garantizando gobernanza.",
    metrics: [
      { label: "Conversión", icon: GitCommit },
      { label: "Velocidad de Funnel", icon: Zap },
      { label: "Eficiencia Operativa", icon: Settings },
      { label: "Calidad del Dato", icon: Database }
    ]
  },
  en: {
    badges: {
      left: "Salesforce Architecture",
      right: "Business Strategy"
    },
    title_tech: "We understand the code.",
    title_biz: "We speak in measurable impact.",
    desc: "We are a hybrid team. We ground technical complexity in real business metrics, prioritizing changes by impact/effort and ensuring governance.",
    metrics: [
      { label: "Conversion", icon: GitCommit },
      { label: "Funnel Velocity", icon: Zap },
      { label: "Operational Efficiency", icon: Settings },
      { label: "Data Quality", icon: Database }
    ]
  },
  fr: {
    badges: {
      left: "Architecture Salesforce",
      right: "Stratégie d'Affaires"
    },
    title_tech: "Nous comprenons le code.",
    title_biz: "Nous parlons impact mesurable.",
    desc: "Nous sommes une équipe hybride. Nous ancrons la complexité technique dans des métriques réelles, en priorisant par impact/effort.",
    metrics: [
      { label: "Conversion", icon: GitCommit },
      { label: "Vitesse du Funnel", icon: Zap },
      { label: "Efficacité Opérationnelle", icon: Settings },
      { label: "Qualité des Données", icon: Database }
    ]
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function CrmAuthority({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden border-b border-white/5">
      
      {/* Fondo Dual Sutil (División Vertical) */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full bg-slate-900/20 border-r border-white/5"></div>
        <div className="w-1/2 h-full bg-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* --- 1. LA ECUACIÓN VISUAL (Pills) --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          
          {/* Left Pill (Tech) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs uppercase tracking-wider"
          >
            {t.badges.left}
          </motion.div>

          {/* Plus Sign */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-white opacity-50"
          >
            <Plus size={20} />
          </motion.div>

          {/* Right Pill (Business) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-serif italic text-sm tracking-wide"
          >
            {t.badges.right}
          </motion.div>
        </div>

        {/* --- 2. EL HEADLINE (Mono vs Serif) --- */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="block text-slate-400 font-mono text-2xl md:text-3xl mb-2"
          >
            {t.title_tech}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="block text-white font-serif"
          >
            {t.title_biz}
          </motion.span>
        </h2>

        {/* --- 3. DESCRIPCIÓN --- */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          {t.desc}
        </motion.p>

        {/* --- 4. GRID DE MÉTRICAS (Proof Points) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-8">
          {t.metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="p-3 rounded-full bg-slate-900 border border-slate-800 group-hover:border-white/20 transition-colors">
                  <Icon size={20} className="text-slate-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">
                  {metric.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}