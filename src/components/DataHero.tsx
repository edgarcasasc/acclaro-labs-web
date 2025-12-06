// src/components/DataHero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. Importamos los gráficos (crearemos estos placeholders más abajo)
import GraficaLinea from './GraficaLinea';
import GraficaStats from './GraficaStats';
import GraficaBarras from './GraficaBarras';

// Clases del botón que ya definimos en GlobalNav.tsx
const ctaButtonClasses = "rounded-md bg-oro-antiguo px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-oro-antiguo/80 transition-colors";

export default function DataHero() {
  return (
    // Contenedor principal con 'relative' para posicionar los gráficos
    <section className="relative z-10 w-full py-48 md:py-64 flex items-center justify-center overflow-hidden">
      
      {/* --- Contenido Centrado (Texto y Botón) --- */}
      <div className="relative z-20 container mx-auto max-w-4xl px-4 text-center">
        
        {/* Título Principal */}
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold text-blanco-pergamino mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Sus Datos Saben la Respuesta.<br/> Nosotros Hacemos que Hablen.
        </motion.h1>

        {/* Subtítulo (con tu texto actualizado) */}
        <motion.p 
          className="text-lg md:text-xl text-blanco-pergamino/80 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Deje de adivinar. Transformamos sus datos dispersos—ya sea de
          Salesforce, HubSpot, SAP, un ERP o cualquier Data Lake—en dashboards
          de BI e informes de IA que le ayudan a bajar costos, acelerar ventas y
          optimizar su producción.
        </motion.p>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="/auditoria" className={`${ctaButtonClasses} px-8 py-3 text-lg`}>
            Obtenga su Auditoría de Claridad Gratuita
          </Link>
        </motion.div>
      </div>

      {/* --- GRÁFICOS FLOTANTES (Fondo) --- */}
      
      {/* Gráfico 1: Evolución de Producción (Izquierda) */}
      <motion.div 
        className="absolute z-10 top-[15%] left-[5%] w-full max-w-xs md:max-w-md hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
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
        whileInView={{ opacity: 1, x: 0 }}
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
}