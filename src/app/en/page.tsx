// src/app/en/page.tsx
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

// 1. METADATOS MAESTROS (Alineados con la auditoría P0 y P1)
export const metadata: Metadata = {
  // Unificamos el mensaje: UX + Analytics + CRM Integration
  title: "Acclaro Labs | UX, Analytics & CRM Integration to Scale",
  description: "We integrate CRM, Salesforce, and high-performance Web with AI strategies. We optimize UX and experimentation to raise your conversion with evidence.",
  
  // P0.2 & P2.1: Canonical con Trailing Slash y reciprocidad Hreflang
  alternates: {
    canonical: "https://acclarolabs.com/en/",
    languages: {
      'es-MX': 'https://acclarolabs.com/',
      'en-US': 'https://acclarolabs.com/en/',
      'fr-FR': 'https://acclarolabs.com/fr/',
      'x-default': 'https://acclarolabs.com/en/',
    },
  },

  // P1.1: OpenGraph Completo
  openGraph: {
    title: "Acclaro Labs | From Chaos to Clarity",
    description: "Stop guessing: connect data, UX, and Salesforce to measure real impact on your revenue.",
    url: "https://acclarolabs.com/en/",
    siteName: "Acclaro Labs",
    locale: "en_US",
    alternateLocale: ["es_MX", "fr_FR"],
    type: 'website',
    images: [{
      url: '/og-image-en.png',
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Unified Digital Ecosystems',
    }],
  },

  // P1.2: Twitter unificado
  twitter: {
    card: "summary_large_image",
    title: "Acclaro Labs | Digital Forensic Audit & CRM",
    description: "We detect friction and revenue leaks in your digital ecosystem with technical evidence.",
    images: ['/og-image-en.png'],
  },
};

export default function EnHomePage() {
  return (
    <>
      {/* 2. CARGA DIFERIDA DE EFECTOS (LCP Optimization) */}
      <VisualEffects />

      {/* 3. CONTENIDO PRINCIPAL 
          Se mantiene el z-10 para flotar sobre el DigitalUniverse del layout
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