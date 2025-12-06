// src/components/SolutionSection.tsx
'use client'

import { motion } from 'framer-motion';
import BlueprintSvg from './BlueprintSvg'; 
import BlueprintSvgVertical from './BlueprintSvgVertical'; 

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Dejamos de adivinar. Empezamos a unificar.",
    desc: "No ponemos parches. Construimos puentes. Fusionamos la inteligencia de negocio (CRM) con la ejecución técnica (Web) para que tus datos fluyan sin fricción."
  },
  en: {
    title: "Stop guessing. Start unifying.",
    desc: "We don't apply patches. We build bridges. We fuse business intelligence (CRM) with technical execution (Web) so your data flows without friction."
  },
  fr: {
    title: "Cessez de deviner. Commencez à unifier.",
    desc: "Nous ne posons pas de pansements. Nous construisons des ponts. Nous fusionnons l'intelligence d'affaires (CRM) avec l'exécution technique (Web) pour que vos données circulent sans friction."
  }
};

// Variantes de animación
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

// --- INTERFAZ DE PROPS ---
interface SolutionSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function SolutionSection({ lang = 'es' }: SolutionSectionProps) {
  // Seleccionamos el contenido
  const t = CONTENT[lang];

  return (
    <section 
      id="solution" 
      className="relative z-10 w-full py-16 md:py-24 bg-gradient-to-b from-[#003e60] to-[#19191c]"
    >
      <motion.div 
        className="container mx-auto max-w-5xl px-4" 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* --- TEXTO INTRODUCTORIO (Contexto del Blueprint) --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-blanco-pergamino mb-6">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-blanco-pergamino/80 max-w-3xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* --- BLUEPRINT VISUAL --- */}
        
        {/* VERSIÓN DESKTOP (Horizontal) */}
        <div className="hidden md:block">
          <BlueprintSvg 
            className="w-full h-auto" 
            style={{ color: 'var(--color-blanco-pergamino)' }}
          />
        </div>

        {/* VERSIÓN MÓVIL (Vertical) */}
        <div className="md:hidden">
          <BlueprintSvgVertical
            className="w-full h-auto"
            style={{ color: 'var(--color-blanco-pergamino)' }}
          />
        </div>

      </motion.div>
    </section>
  );
}