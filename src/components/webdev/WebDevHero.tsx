'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WebDevHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-8">
          ¿Tu Sitio Web es un <span className="text-azul-zafiro text-shadow-glow">Vendedor de Élite</span> o Solo un <span className="text-gray-500 line-through decoration-rojo-lacre decoration-4">Folleto Digital Caro</span>?
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Dejamos de construir "páginas informativas". Desarrollamos <strong>ecosistemas de conversión ultrarrápidos</strong> con Next.js. Conectamos tu web directamente al corazón de tu negocio (CRM y ERP) para que cada clic cuente.
        </p>

        <Link href="/contacto" className="inline-block">
          <button className="bg-azul-zafiro text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-900 transition-all shadow-glow-blue transform hover:scale-105 border border-white/10">
            Quiero una Web que Venda
          </button>
        </Link>
      </motion.div>
    </section>
  );
}