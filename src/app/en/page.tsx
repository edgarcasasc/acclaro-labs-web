import React from 'react';
import { Metadata } from "next";
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import TeamSection from '@/components/TeamSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

// 1. IMPORTAMOS EL PUENTE PARA RENDIMIENTO (LCP)
import VisualEffects from "@/components/VisualEffects";

// 2. METADATOS MAESTROS PARA EL MERCADO GLOBAL (EE.UU. / EUROPA)
export const metadata: Metadata = {
  title: "Unified Digital Ecosystems & AI Strategy | Acclaro Labs",
  description: "We transform operational chaos into clarity. Experts in Salesforce integration, high-performance web development, and AI-driven content strategies for B2B growth.",
  keywords: ["CRM Consulting", "Salesforce Integration", "AI Business Automation", "High-Performance Web Dev"],
  
  // SEÑALIZACIÓN HREFLANG: Espejo exacto de la versión en español
  alternates: {
    canonical: "/en",
    languages: {
      'es-MX': '/',
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },

  openGraph: {
    title: "Acclaro Labs | From Chaos to Clarity",
    description: "Scale your business with unified digital ecosystems and AI-driven strategy.",
    images: [{
      url: '/og-image-en.png', // Imagen específica para redes sociales en inglés
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Unified Digital Ecosystems',
    }],
    type: 'website',
  },
};

export default function EnHomePage() {
  return (
    <>
      {/* 3. CARGA DIFERIDA (Solo Cliente)
          Evitamos bloquear el renderizado del texto inicial.
      */}
      <VisualEffects />

      {/* 4. CONTENIDO PRINCIPAL
          Forzamos lang="en" en todos los componentes para usar el diccionario inglés.
      */}
      <main className="relative z-10">
        <Hero lang="en" />
        <SocialProof lang="en" />
        <ProblemSection lang="en" />
        <SolutionSection lang="en" />
        <LeadMagnetSection lang="en" />
        <TeamSection lang="en" />
        <CallToActionSection lang="en" />
      </main>

      <Footer lang="en" />
    </>
  );
}