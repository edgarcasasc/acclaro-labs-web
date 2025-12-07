// src/components/CallToActionSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Deja de adivinar. Empieza a unificar.",
    desc: "Estás a una auditoría de convertir tus datos dispersos (incluso tus Excels) en tu mayor activo de marketing.",
    cta: "Agenda tu Auditoría de Claridad"
  },
  en: {
    title: "Stop guessing. Start unifying.",
    desc: "You are one audit away from turning your scattered data (even your Excels) into your greatest marketing asset.",
    cta: "Schedule your Clarity Audit"
  },
  fr: {
    title: "Cessez de deviner. Commencez à unifier.",
    desc: "Vous n'êtes qu'à un audit de transformer vos données dispersées (même vos fichiers Excel) en votre plus grand atout marketing.",
    cta: "Planifiez votre Audit de Clarté"
  }
};

// --- INTERFAZ DE PROPS ---
interface CallToActionSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CallToActionSection({ lang = 'es' }: CallToActionSectionProps) {
  // Seleccionamos el contenido
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 w-full bg-gris-piedra py-24 md:py-32">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="footer-glow-text text-3xl md:text-5xl font-serif font-bold text-blanco-pergamino">
            {t.title}
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-blanco-pergamino/80">
            {t.desc}
          </p>
          
          {/* Botón CTA */}
          <Link href="/servicios/estrategia-contenido#auditoria">
            <motion.button 
              className="mt-10 bg-oro-antiguo text-gris-piedra font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.cta}
            </motion.button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}