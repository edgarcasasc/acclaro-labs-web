// src/components/CallToActionSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // <-- 1. IMPORTANTE: Importamos Link

export default function CallToActionSection() {
  return (
    <section className="relative z-10 w-full bg-gris py-24 md:py-32 bg-gris-piedra"> {/* Aseguré el color de fondo correcto */}
      <div className="container mx-auto max-w-3xl px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} // <-- 2. CORRECCIÓN: Eliminamos 'ease' para evitar error de Build
        >
          <h2 className="footer-glow-text text-3xl md:text-5xl font-serif font-bold text-blanco-pergamino">
            Deja de adivinar. Empieza a unificar.
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-blanco-pergamino/80">
            Estás a una auditoría de convertir tu mayor gasto tecnológico (Salesforce) en tu mayor activo de marketing.
          </p>
          
          {/* --- 3. CORRECCIÓN: Envolvemos el botón en Link --- */}
          <Link href="/servicios/estrategia-contenido#auditoria"> {/* Cambio de ruta con ancla */}
            <motion.button 
              className="mt-10 bg-oro-antiguo text-gris-piedra font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agenda tu Auditoría de Claridad
            </motion.button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}