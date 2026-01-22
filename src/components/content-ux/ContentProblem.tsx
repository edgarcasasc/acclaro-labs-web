'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, MessageSquareOff, LayoutTemplate, ArrowDown } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Premium / Conversion-First) ---
const CONTENT = {
  es: {
    headline: "Publicar por publicar es la forma más rápida de volverte",
    highlight: "invisible.",
    subheadline_start: "Tienes actividad, pero no resultados. Tienes visitas, pero no conversiones. La gente no compra lo que no entiende.",
    subheadline_end: "Si confundes, pierdes.",
    cards: [
      { 
        title: "Fricción Cognitiva", 
        body: "Tu usuario duda porque no sabe qué hacer después. La propuesta de valor no está clara, los CTAs compiten y el flujo se rompe. Cada segundo de duda cuesta conversión." 
      },
      { 
        title: "Silencio Comercial", 
        body: "Tu contenido informa, pero no habilita decisión. Habla de temas, no de problemas concretos del cliente. Sin intención y sin estructura, el blog no genera pipeline." 
      },
      { 
        title: "Desconexión Visual", 
        body: "La interfaz se ve bien, pero no comunica valor con precisión. La estética sin claridad no vende: necesitas jerarquía, pruebas y mensajes que reduzcan riesgo." 
      }
    ],
    footer: "En el Sprint de Optimización corregimos esto con evidencia: claridad del mensaje, UX del flujo y medición."
  },
  en: {
    headline: "Posting for the sake of posting is the fastest way to become",
    highlight: "invisible.",
    subheadline_start: "You have activity, but no results. You have visits, but no conversions. People don't buy what they don't understand.",
    subheadline_end: "If you confuse, you lose.",
    cards: [
      { 
        title: "Cognitive Friction", 
        body: "Your user hesitates because they don't know what to do next. The value prop isn't clear, CTAs compete, and the flow breaks. Every second of doubt costs conversion." 
      },
      { 
        title: "Commercial Silence", 
        body: "Your content informs but doesn't enable decision. It talks about topics, not concrete customer problems. Without intent and structure, the blog doesn't generate pipeline." 
      },
      { 
        title: "Visual Disconnect", 
        body: "The interface looks good but doesn't communicate value precisely. Aesthetics without clarity don't sell: you need hierarchy, proof, and risk-reducing messages." 
      }
    ],
    footer: "In the Optimization Sprint, we fix this with evidence: message clarity, flow UX, and measurement."
  },
  fr: {
    headline: "Publier pour publier est le moyen le plus rapide de devenir",
    highlight: "invisible.",
    subheadline_start: "Vous avez de l'activité, mais pas de résultats. Des visites, mais pas de conversions. Les gens n'achètent pas ce qu'ils ne comprennent pas.",
    subheadline_end: "Si vous confondez, vous perdez.",
    cards: [
      { 
        title: "Friction Cognitive", 
        body: "Votre utilisateur hésite car il ne sait pas quoi faire ensuite. La proposition de valeur n'est pas claire, les CTA sont en concurrence. Chaque seconde de doute coûte la conversion." 
      },
      { 
        title: "Silence Commercial", 
        body: "Votre contenu informe mais ne permet pas la décision. Il parle de sujets, pas de problèmes clients concrets. Sans intention ni structure, le blog ne génère pas de pipeline." 
      },
      { 
        title: "Déconnexion Visuelle", 
        body: "L'interface est belle mais ne communique pas la valeur avec précision. L'esthétique sans clarté ne vend pas : vous avez besoin de hiérarchie, de preuves et de messages qui réduisent le risque." 
      }
    ],
    footer: "Dans le Sprint d'Optimisation, nous corrigeons cela avec des preuves : clarté du message, UX du flux et mesure."
  }
};

interface ContentProblemProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function ContentProblem({ lang = 'es' }: ContentProblemProps) {
  const t = CONTENT[lang];
  
  // Iconos asignados a cada tarjeta
  const icons = [
    <BrainCircuit key="1" className="w-8 h-8 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />,
    <MessageSquareOff key="2" className="w-8 h-8 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />,
    <LayoutTemplate key="3" className="w-8 h-8 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />
  ];

  return (
    <section className="relative py-24 px-6 bg-slate-950 border-y border-white/5 overflow-hidden">
      
      {/* Fondo de rejilla sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-8 text-white leading-tight"
          >
            {t.headline} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 decoration-emerald-500/30 underline decoration-4 underline-offset-8">
              {t.highlight}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed font-light"
          >
            {t.subheadline_start} <strong className="text-white font-medium">{t.subheadline_end}</strong>
          </motion.p>
        </div>

        {/* --- GRID DE 3 TARJETAS --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.cards.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.15) }}
              className="group relative p-8 bg-transparent hover:bg-slate-900/40 border-l-2 border-slate-800 hover:border-emerald-500 transition-all duration-500 rounded-r-xl"
            >
              {/* Icono Flotante */}
              <div className="mb-6 p-3 rounded-lg bg-slate-900 border border-slate-800 w-fit group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER TRANSICIÓN --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-2">
            <p className="text-sm md:text-base italic text-slate-500 max-w-2xl">
              {t.footer}
            </p>
            <ArrowDown className="w-4 h-4 text-slate-600 animate-bounce mt-2" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}