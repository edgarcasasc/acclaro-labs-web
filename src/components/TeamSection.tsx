// src/components/TeamSection.tsx
'use client'

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    heading: "Un Ecosistema Híbrido Requiere un Equipo Híbrido",
    edgar: {
      title: "El Estratega Creativo (Contenido & UX)",
      desc: "Edgar es la voz del cliente y el maestro narrador. Con más de 20 años de experiencia, traduce datos fríos en historias humanas e interfaces intuitivas.",
      points: [
        "Director de Arte de calibre internacional.",
        "Fuerza creativa para marcas como Chevrolet y Nissan.",
        "Experto en UX y Storytelling de marca."
      ]
    },
    abdiel: {
      title: "El Arquitecto Técnico (Salesforce & IA)",
      desc: "Abdiel es el motor de ingeniería. Se especializa en construir los 'puentes' (APIs) que hacen que los sistemas complejos trabajen al unísono.",
      points: [
        "Visión y certificación de Nivel MIT.",
        "Experto híbrido en Salesforce y Desarrollo (React).",
        "Constructor de IA Generativa aplicada a negocio."
      ]
    }
  },
  en: {
    heading: "A Hybrid Ecosystem Requires a Hybrid Team",
    edgar: {
      title: "The Creative Strategist (Content & UX)",
      desc: "Edgar is the voice of the customer and the master storyteller. With over 20 years of experience, he translates cold data into human stories and intuitive interfaces.",
      points: [
        "International-caliber Art Director.",
        "Creative force for brands like Chevrolet and Nissan.",
        "Expert in UX and Brand Storytelling."
      ]
    },
    abdiel: {
      title: "The Technical Architect (Salesforce & AI)",
      desc: "Abdiel is the engineering powerhouse. He specializes in building the 'bridges' (APIs) that make complex systems work in unison.",
      points: [
        "MIT-level vision and certification.",
        "Hybrid expert in Salesforce and Development (React).",
        "Builder of Generative AI applied to business."
      ]
    }
  },
  fr: {
    heading: "Un Écosystème Hybride Exige une Équipe Hybride",
    edgar: {
      title: "Le Stratège Créatif (Contenu & UX)",
      desc: "Edgar est la voix du client et le maître narrateur. Avec plus de 20 ans d'expérience, il traduit des données froides en histoires humaines et en interfaces intuitives.",
      points: [
        "Directeur Artistique de calibre international.",
        "Force créative pour des marques comme Chevrolet et Nissan.",
        "Expert en UX et Storytelling de marque."
      ]
    },
    abdiel: {
      title: "L'Architecte Technique (Salesforce & IA)",
      desc: "Abdiel est le moteur d'ingénierie. Il se spécialise dans la construction des « passerelles » (API) qui permettent aux systèmes complexes de travailler à l'unisson.",
      points: [
        "Vision et certification de niveau MIT.",
        "Expert hybride en Salesforce et Développement (React).",
        "Bâtisseur d'IA Générative appliquée aux affaires."
      ]
    }
  }
};

// --- INTERFAZ DE PROPS ---
interface TeamSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function TeamSection({ lang = 'es' }: TeamSectionProps) {
  // Seleccionamos el contenido
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 w-full bg-blanco-pergamino py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        
        <motion.h2 
          className="mb-16 text-center text-3xl md:text-4xl font-serif font-bold text-gris-piedra"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* --- Tarjeta de Fundador 1: Edgar --- */}
          <motion.div 
            className="flex flex-col rounded-lg border border-acero-forjado/30 bg-white p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 pb-4 border-b-2 border-oro-antiguo">
              <h3 className="text-2xl font-serif font-bold text-gris-piedra">
                Edgar Ovidio Casas
              </h3>
              <p className="text-lg font-semibold text-oro-antiguo">
                {t.edgar.title}
              </p>
            </div>
            
            <p className="mb-6 text-gris-piedra/80">
              {t.edgar.desc}
            </p>
            
            <ul className="space-y-3 text-gris-piedra">
              {t.edgar.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-oro-antiguo" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- Tarjeta de Fundador 2: Abdiel --- */}
          <motion.div 
            className="flex flex-col rounded-lg border border-acero-forjado/30 bg-white p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 pb-4 border-b-2 border-azul-zafiro">
              <h3 className="text-2xl font-serif font-bold text-gris-piedra">
                Abdiel Enrique Casas
              </h3>
              <p className="text-lg font-semibold text-azul-zafiro">
                {t.abdiel.title}
              </p>
            </div>
            
            <p className="mb-6 text-gris-piedra/80">
              {t.abdiel.desc}
            </p>
            
            <ul className="space-y-3 text-gris-piedra">
              {t.abdiel.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-azul-zafiro" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}