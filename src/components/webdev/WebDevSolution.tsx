'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Webhook, Grid, ScanSearch, CheckCircle2 } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Engineering-Led) ---
const CONTENT = {
  es: {
    title_start: "Ingeniería de precisión para",
    title_highlight: "performance y claridad.",
    desc: "En Acclaro Labs no usamos plantillas genéricas. Diseñamos y desarrollamos arquitecturas a medida orientadas a dos cosas: métricas (SEO/analítica) y experiencia (UX).",
    cards: [
      {
        title: "Performance (Core Web Vitals)",
        body: "Optimizamos velocidad, estabilidad y respuesta para reducir abandono. Una web rápida es respeto por el tiempo del usuario y una base sólida para SEO.",
        icon: Cpu,
        color: "text-cyan-400",
        badge: "LCP < 2.5s"
      },
      {
        title: "Integración (API-first)",
        body: "Tu web deja de ser una isla. La conectamos a tus sistemas (CRM, pagos, inventario) para que cada interacción tenga contexto: leads trazables y datos consistentes.",
        icon: Webhook,
        color: "text-purple-400",
        note: ">> Integramos con Salesforce, HubSpot, Stripe y tu stack actual."
      },
      {
        title: "Diseño escalable (Design System)",
        body: "Creamos sistemas de diseño y componentes para iterar sin romper consistencia. Cambios más rápidos, menor costo de mantenimiento y gobernanza real.",
        icon: Grid,
        color: "text-pink-400"
      },
      {
        title: "SEO técnico y estructura",
        body: "Más que keywords: arquitectura de información, indexabilidad, performance y datos estructurados (schema). Diseñado para que buscadores y humanos entiendan tu oferta.",
        icon: ScanSearch,
        color: "text-orange-400"
      }
    ]
  },
  en: {
    title_start: "Precision engineering for",
    title_highlight: "performance and clarity.",
    desc: "At Acclaro Labs, we don't use generic templates. We design and develop custom architectures focused on two things: metrics (SEO/analytics) and experience (UX).",
    cards: [
      {
        title: "Performance (Core Web Vitals)",
        body: "We optimize speed, stability, and response to reduce drop-off. A fast web is respect for user time and a solid foundation for SEO.",
        icon: Cpu,
        color: "text-cyan-400",
        badge: "LCP < 2.5s"
      },
      {
        title: "Integration (API-first)",
        body: "Your web stops being an island. We connect it to your systems (CRM, payments, inventory) so every interaction has context: traceable leads and consistent data.",
        icon: Webhook,
        color: "text-purple-400",
        note: ">> We integrate with Salesforce, HubSpot, Stripe, and your current stack."
      },
      {
        title: "Scalable Design (Design System)",
        body: "We create design systems and components to iterate without breaking consistency. Faster changes, lower maintenance costs, and real governance.",
        icon: Grid,
        color: "text-pink-400"
      },
      {
        title: "Technical SEO & Structure",
        body: "More than keywords: information architecture, indexability, performance, and structured data (schema). Designed so search engines and humans understand your offer.",
        icon: ScanSearch,
        color: "text-orange-400"
      }
    ]
  },
  fr: {
    title_start: "Ingénierie de précision pour",
    title_highlight: "performance et clarté.",
    desc: "Chez Acclaro Labs, pas de modèles génériques. Nous développons des architectures sur mesure orientées vers deux choses : métriques (SEO/analytique) et expérience (UX).",
    cards: [
      {
        title: "Performance (Core Web Vitals)",
        body: "Nous optimisons vitesse et stabilité pour réduire l'abandon. Un web rapide est une marque de respect pour l'utilisateur et une base solide pour le SEO.",
        icon: Cpu,
        color: "text-cyan-400",
        badge: "LCP < 2.5s"
      },
      {
        title: "Intégration (API-first)",
        body: "Votre web n'est plus une île. Nous le connectons à vos systèmes (CRM, paiements) pour donner du contexte : leads traçables et données cohérentes.",
        icon: Webhook,
        color: "text-purple-400",
        note: ">> Intégration avec Salesforce, HubSpot, Stripe et votre stack actuel."
      },
      {
        title: "Design évolutif (Design System)",
        body: "Nous créons des systèmes de design pour itérer sans briser la cohérence. Changements plus rapides, coûts de maintenance réduits et gouvernance réelle.",
        icon: Grid,
        color: "text-pink-400"
      },
      {
        title: "SEO technique et structure",
        body: "Plus que des mots-clés : architecture de l'information, indexabilité et données structurées. Conçu pour que les moteurs et les humains comprennent votre offre.",
        icon: ScanSearch,
        color: "text-orange-400"
      }
    ]
  }
};

// Logos para el marquee técnico
const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Node.js", "PostgreSQL", "GraphQL"];

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function WebDevSolution({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative py-24 px-6 bg-slate-950 border-b border-white/5 overflow-hidden">
      
      {/* Fondo de Grilla Técnica */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="md:w-2/3 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight"
          >
            {t.title_start} <br />
            <span className="text-cyan-400 font-mono tracking-tight">
              {t.title_highlight}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed font-light border-l-2 border-slate-800 pl-6"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* --- GRID SCHEMATIC (2x2 con gap-px para líneas finas) --- */}
        <div className="bg-slate-800 p-[1px] grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden shadow-2xl mb-16">
          {t.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group relative bg-slate-950 p-8 hover:bg-slate-900 transition-colors duration-300"
              >
                {/* Fondo de cuadrícula interna sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded border border-slate-800 bg-slate-900/50 ${card.color}`}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    {card.badge && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-900/20 border border-green-500/30 rounded text-[10px] font-mono text-green-400">
                        <CheckCircle2 size={10} /> {card.badge}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {card.body}
                  </p>

                  {/* Nota Técnica Específica (Integration) */}
                  {card.note && (
                    <div className="mt-4 pt-4 border-t border-slate-800/50">
                      <p className="text-xs font-mono text-slate-500">
                        {card.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- FOOTER: TECH STACK MARQUEE --- */}
        <div className="border-t border-slate-800 pt-8 overflow-hidden relative">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-600 uppercase tracking-widest whitespace-nowrap mr-8">
              Core Technologies ::
            </span>
            
            {/* Marquee Animado */}
            <div className="flex overflow-hidden w-full mask-linear-fade">
              <motion.div 
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <span key={i} className="text-sm font-mono text-slate-500 font-bold opacity-70">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}