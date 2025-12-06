'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CrmHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-8">
          ¿Tu Salesforce es un <span className="text-oro-antiguo">Motor de Ingresos</span> o un <span className="text-rojo-lacre text-shadow-glow">Costoso Cementerio de Datos</span>?
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          De nada sirve tener el mejor CRM del mundo si tus datos están sucios, desconectados y en silencio. Transformamos tu Salesforce de una agenda glorificada a la <strong className="text-white">base de operaciones de tu rentabilidad.</strong>
        </p>

        <Link href="/auditoria" className="inline-block">
          <button className="bg-rojo-lacre text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-glow-red transform hover:scale-105">
            Detener la Fuga de Dinero
          </button>
        </Link>
      </motion.div>
    </section>
  );
}