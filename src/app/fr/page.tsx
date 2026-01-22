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

// 2. METADATOS MAESTROS PARA EL MERCADO FRANCOFÓNO (FRANCIA / EUROPA)
export const metadata: Metadata = {
  title: "Écosystèmes Digitaux Unifiés & Stratégie IA | Acclaro Labs",
  description: "Nous transformons le chaos opérationnel en clarté. Experts en intégration Salesforce, développement web haute performance et stratégies de contenu pilotées par l'IA.",
  keywords: ["Conseil CRM", "Intégration Salesforce", "Automatisation IA", "Développement Web Performance"],
  
  // SEÑALIZACIÓN HREFLANG: El vínculo técnico entre las 3 versiones
  alternates: {
    canonical: "/fr",
    languages: {
      'es-MX': '/',
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },

  openGraph: {
    title: "Acclaro Labs | Du Chaos à la Clarté",
    description: "Écosystèmes digitaux unifiés pour les entreprises qui cherchent à passer à l'échelle.",
    images: [{
      url: '/og-image-fr.png', // Imagen específica para redes sociales en francés
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Écosystèmes Digitaux Unifiés',
    }],
    type: 'website',
  },
};

export default function FrHomePage() {
  return (
    <>
      {/* 3. CARGA DIFERIDA (Solo Cliente)
          Aseguramos que el H1 en francés sea visible instantáneamente.
      */}
      <VisualEffects />

      {/* 4. CONTENIDO PRINCIPAL
          Pasamos lang="fr" a cada sección para activar el diccionario francés.
      */}
      <main className="relative z-10">
        <Hero lang="fr" />
        <SocialProof lang="fr" />
        <ProblemSection lang="fr" />
        <SolutionSection lang="fr" />
        <LeadMagnetSection lang="fr" />
        <TeamSection lang="fr" />
        <CallToActionSection lang="fr" />
      </main>

      <Footer lang="fr" />
    </>
  );
}