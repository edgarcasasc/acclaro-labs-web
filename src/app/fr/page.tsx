// src/app/fr/page.tsx
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
import VisualEffects from "@/components/VisualEffects";

// 1. METADATOS MAESTROS (Mercado Francófono - Alineación P0/P1)
export const metadata: Metadata = {
  // Unificación de mensaje: UX, Analítica e Integración CRM
  title: "Acclaro Labs | UX, Analytique et Intégration CRM pour Scaler",
  description: "Nous intégrons CRM, Salesforce et Web haute performance avec des stratégies d'IA. Nous optimisons l'UX et l'expérimentation pour augmenter votre conversion.",

  // P0.2 & P2.1: Canonical y Hreflang recíproco con trailing slash
  alternates: {
    canonical: "https://acclarolabs.com/fr/",
    languages: {
      'es-MX': 'https://acclarolabs.com/',
      'en-US': 'https://acclarolabs.com/en/',
      'fr-FR': 'https://acclarolabs.com/fr/',
      'x-default': 'https://acclarolabs.com/en/',
    },
  },

  // P1.1: OpenGraph optimizado para Francia/Europa
  openGraph: {
    title: "Acclaro Labs | Du Chaos à la Clarté",
    description: "Arrêtez de deviner : connectez vos données, l'UX et Salesforce pour mesurer l'impact réel sur vos revenus.",
    url: "https://acclarolabs.com/fr/",
    siteName: "Acclaro Labs",
    locale: "fr_FR",
    alternateLocale: ["es_MX", "en_US"],
    type: 'website',
    images: [{
      url: '/og-image-fr.png',
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Écosystèmes Digitaux Unifiés',
    }],
  },

  // P1.2: Twitter/X unificado
  twitter: {
    card: "summary_large_image",
    title: "Acclaro Labs | Audit Forensique Numérique et CRM",
    description: "Nous détectons les frictions et les pertes de revenus dans votre écosystème numérique avec des preuves techniques.",
    images: ['/og-image-fr.png'],
  },
};

export default function FrHomePage() {
  return (
    <>
      {/* 2. CARGA DIFERIDA DE EFECTOS (Optimización LCP) */}
      <VisualEffects />

      {/* 3. CONTENIDO PRINCIPAL
          Forzamos lang="fr" para activar el diccionario de internacionalización.
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