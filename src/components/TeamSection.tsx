// src/components/TeamSection.tsx
'use client'

import { motion } from 'framer-motion';
// Usaremos iconos para 'check' en las listas de experiencia
import { CheckCircle } from 'lucide-react';

export default function TeamSection() {
  return (
    // Sección con fondo 'blanco-pergamino' y texto 'gris-piedra'
    <section className="relative z-10 w-full bg-blanco-pergamino py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Título de la Sección */}
        <motion.h2 
          className="mb-16 text-center text-3xl md:text-4xl font-serif font-bold text-gris-piedra"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Un Ecosistema Híbrido Requiere un Equipo Híbrido
        </motion.h2>

        {/* Grid para los dos fundadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* --- Tarjeta de Fundador 1: Edgar (Creativo) --- */}
          <motion.div 
            className="flex flex-col rounded-lg border border-acero-forjado/30 bg-white p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Encabezado con acento 'Oro Antiguo' */}
            <div className="mb-4 pb-4 border-b-2 border-oro-antiguo">
              <h3 className="text-2xl font-serif font-bold text-gris-piedra">
                Edgar Ovidio Casas
              </h3>
              <p className="text-lg font-semibold text-oro-antiguo">
                El Estratega Creativo (Contenido & UX)
              </p>
            </div>
            
            <p className="mb-6 text-gris-piedra/80">
              Edgar es la voz del cliente y el maestro narrador. Con más de 20 años de experiencia, traduce datos fríos en historias humanas e interfaces intuitivas.            </p>
            
            <ul className="space-y-3 text-gris-piedra">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-oro-antiguo" />
                Director de Arte de calibre internacional.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-oro-antiguo" />
                Fuerza creativa para marcas como Chevrolet y Nissan.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-oro-antiguo" />
                Experto en UX y Storytelling de marca.
              </li>
            </ul>
          </motion.div>

          {/* --- Tarjeta de Fundador 2: Abdiel (Técnico) --- */}
          <motion.div 
            className="flex flex-col rounded-lg border border-acero-forjado/30 bg-white p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Encabezado con acento 'Azul Zafiro' */}
            <div className="mb-4 pb-4 border-b-2 border-azul-zafiro">
              <h3 className="text-2xl font-serif font-bold text-gris-piedra">
                Abdiel Enrique Casas
              </h3>
              <p className="text-lg font-semibold text-azul-zafiro">
                El Arquitecto Técnico (Salesforce & IA)
              </p>
            </div>
            
            <p className="mb-6 text-gris-piedra/80">
              Abdiel es el motor de ingeniería. Se especializa en construir los 'puentes' (APIs) que hacen que los sistemas complejos trabajen al unísono.
            </p>
            
            <ul className="space-y-3 text-gris-piedra">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-azul-zafiro" />
                Visión y certificación de Nivel MIT.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-azul-zafiro" />
                Experto híbrido en Salesforce y Desarrollo (React).
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-azul-zafiro" />
                Constructor de IA Generativa aplicada a negocio.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}