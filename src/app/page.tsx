// src/app/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero"; 
import SocialProof from "@/components/SocialProof"; 
import ProblemSection from "@/components/ProblemSection"; 
import SolutionSection from "@/components/SolutionSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import TeamSection from "@/components/TeamSection"; 
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

// Importamos el puente que creamos en el paso anterior
import VisualEffects from "@/components/VisualEffects";

export const metadata: Metadata = {
  title: "Acclaro Labs | Ecosistemas Digitales y Estrategia de Contenido con IA",
  description: "Transformamos el caos operativo en claridad. Expertos en integración de Salesforce, desarrollo web de alto rendimiento y estrategias de contenido optimizadas para IA.",
  keywords: ["Consultoría CRM México", "Desarrollo Web Monterrey", "Estrategia de contenido IA", "Salesforce Latam"],
  openGraph: {
    title: "Acclaro Labs | From Chaos to Clarity",
    description: "Ecosistemas digitales unificados para empresas que buscan escalar.",
    images: ['/og-image-es.png'],
  },
};

export default function Home() {
  return (
    <>
      {/* CARGA DIFERIDA: VisualEffects cargará el DigitalUniverse 
          solo en el cliente, permitiendo que el servidor envíe el 
          HTML del Hero de inmediato.
      */}
      <VisualEffects />

      <div className="relative z-10 flex flex-col min-h-screen"> 
        <main className="flex-grow">
          <Hero />
          <SocialProof />
          <ProblemSection />
          <SolutionSection />
          <LeadMagnetSection /> 
          <TeamSection />
          <CallToActionSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}