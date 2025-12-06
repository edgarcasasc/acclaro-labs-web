// src/components/informes/InformesHero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. Importamos los gráficos (MANTENEMOS TUS IMPORTS ORIGINALES)
import GraficaLinea from './GraficaLinea';
import GraficaStats from './GraficaStats';
import GraficaBarras from './GraficaBarras';

// --- 2. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Sus Datos Saben la Respuesta. Nosotros Hacemos que Hablen.",
    desc: "Deje de adivinar. Transformamos sus datos dispersos—ya sea de Salesforce, HubSpot, SAP, un ERP o archivos de Excel—en dashboards de BI e informes de IA que le ayudan a bajar costos, acelerar ventas y optimizar su producción.",
    cta: "Obtenga su Auditoría de Claridad Gratuita"
  },
  en: {
    title: "Your Data Knows the Answer. We Make It Speak.",
    desc: "Stop guessing. We transform your scattered data—whether from Salesforce, HubSpot, SAP, an ERP, or Excel files—into BI dashboards and AI reports that help you cut costs, accelerate sales, and optimize your production.",
    cta: "Get Your Free Clarity Audit"
  },
  fr: {
    title: "Vos Données Connaissent la Réponse. Nous les Faisons Parler.",
    desc: "Cessez de deviner. Nous transformons vos données dispersées — qu'elles proviennent de Salesforce, HubSpot, SAP, d'un ERP ou de fichiers Excel — en tableaux de bord BI et rapports IA qui vous aident à réduire les coûts, accélérer les ventes et optimiser votre production.",
    cta: "Obtenez votre Audit de Clarté Gratuit"
  }
};

// Clases del botón
const ctaButtonClasses = "rounded-md bg-oro-antiguo px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-oro-antiguo/90 focus:outline-none focus:ring-2 focus:ring-oro-antiguo focus:ring-offset-2";

interface Props {
  lang?: 'es' | 'en' | 'fr';
}

const InformesHero = ({ lang = 'es' }: Props) => {
  // Seleccionamos el texto según el idioma
  const t = CONTENT[lang];

  return (
    // 2. Añadimos 'relative' y 'overflow-hidden' al contenedor principal
    <section className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center overflow-hidden px-4 text-center text-blanco-pergamino">
        
      {/* 3. Añadimos 'relative z-20' para que el texto esté ENFRENTE */}
      <div className="relative z-20 flex max-w-4xl flex-col items-center">
      
        {/* Usamos 'motion' para animar la entrada del texto */}
        <motion.h1 
          className="mb-4 font-display text-5xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t.title}
        </motion.h1>
      
        <motion.h2 
          className="mb-8 max-w-3xl text-lg text-blanco-pergamino/90 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.desc}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* El botón ahora es un Link de Next */}
          <Link href="/servicios/estrategia-contenido#auditoria" className={ctaButtonClasses}>
            {t.cta}
          </Link>
        </motion.div>
      </div>

      {/* --- 4. GRÁFICOS FLOTANTES (Añadidos con z-10, DETRÁS del texto) --- */}
      
      {/* Gráfico 1: Evolución de Producción (Izquierda) */}
      <motion.div 
        className="absolute z-10 top-[15%] left-[5%] w-full max-w-xs md:max-w-md hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }} // Animación de flote
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <GraficaLinea />
        </motion.div>
      </motion.div>

      {/* Gráfico 2: Optimización IA (Arriba Derecha) */}
      <motion.div 
        className="absolute z-10 top-[20%] right-[10%] w-full max-w-[280px] hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          animate={{ y: [5, -5, 5] }} // Flote opuesto
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <GraficaStats />
        </motion.div>
      </motion.div>

      {/* Gráfico 3: Eficiencia (Abajo Derecha) */}
      <motion.div 
        className="absolute z-10 bottom-[15%] right-[15%] w-full max-w-sm hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 135 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
      >
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <GraficaBarras />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default InformesHero;