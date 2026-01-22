import { Metadata } from "next";
import Hero from "@/components/Hero"; 
import SocialProof from "@/components/SocialProof"; 
import ProblemSection from "@/components/ProblemSection"; 
import SolutionSection from "@/components/SolutionSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import TeamSection from "@/components/TeamSection"; 
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import VisualEffects from "@/components/VisualEffects";

// 1. METADATOS MAESTROS (SEO Internacional y GEO)
export const metadata: Metadata = {
  title: "Acclaro Labs | Ecosistemas Digitales y Estrategia de Contenido con IA",
  description: "Transformamos el caos operativo en claridad. Expertos en integración de Salesforce, desarrollo web de alto rendimiento y estrategias de contenido optimizadas para IA.",
  keywords: ["Consultoría CRM México", "Desarrollo Web Monterrey", "Estrategia de contenido IA", "Salesforce Latam", "Auditoría UX B2B"],
  
  // SEÑALIZACIÓN HREFLANG: Crucial para que Google no vea contenido duplicado
  alternates: {
    canonical: "/",
    languages: {
      'es-MX': '/',
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },

  openGraph: {
    title: "Acclaro Labs | Del Caos a la Claridad",
    description: "Ecosistemas digitales unificados para empresas que buscan escalar con estrategia y tecnología.",
    images: [{
      url: '/og-image-es.png',
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Ecosistemas Digitales Unificados',
    }],
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      {/* CAPA 1: EFECTOS VISUALES (CLIENT-SIDE)
          Carga diferida para proteger el LCP (Largest Contentful Paint) 
      */}
      <VisualEffects />

      {/* CAPA 2: CONTENIDO PRINCIPAL (SERVER-SIDE) */}
      <div className="relative z-10 flex flex-col min-h-screen"> 
        <main className="flex-grow">
          {/* Pasamos explícitamente lang="es" para asegurar que 
              cada componente use el diccionario correcto.
          */}
          <Hero lang="es" />
          <SocialProof lang="es" />
          <ProblemSection lang="es" />
          <SolutionSection lang="es" />
          <LeadMagnetSection lang="es" /> 
          <TeamSection lang="es" />
          <CallToActionSection lang="es" />
        </main>
        
        <Footer lang="es" />
      </div>
    </>
  );
}