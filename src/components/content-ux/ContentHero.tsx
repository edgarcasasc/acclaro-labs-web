'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContentHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-8">
          ¿Tu Marca es <span className="text-gray-500 blur-[2px]">Ruido de Fondo</span> o una <span className="text-oro-antiguo text-shadow-glow">Señal Clara</span>?
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          El contenido sin estrategia es solo gasto. La estética sin usabilidad es solo decoración. Diseñamos <strong>narrativas estratégicas</strong> que guían a tu usuario desde la curiosidad hasta la conversión, sin fricción.
        </p>

        <Link href="#auditoria">
          <button className="bg-oro-antiguo text-gris-piedra px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all shadow-glow-blue border border-white/20">
            Diseñar mi Estrategia de Conversión
          </button>
        </Link>
      </motion.div>
    </section>
  );
}