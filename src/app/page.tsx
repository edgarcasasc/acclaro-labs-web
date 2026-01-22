// src/app/page.tsx
import Hero from "@/components/Hero"; 
import SocialProof from "@/components/SocialProof"; 
import ProblemSection from "@/components/ProblemSection"; 
import SolutionSection from "@/components/SolutionSection";
import DigitalUniverse from "@/components/DigitalUniverse";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import TeamSection from "@/components/TeamSection"; 
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer"; // <-- 1. IMPORTAR FOOTER

export default function Home() {
  return (
    <>
      {/* --- CAPA 1: FONDO FIJO  --- */}
      <DigitalUniverse />

      {/* --- CAPA 2: CONTENIDO SCROLLABLE  --- */}
      <div className="relative z-10 flex flex-col min-h-screen"> 
        {/* Envolvemos en un div flex para asegurar que el footer vaya al final si hay poco contenido */}
        
        <main className="flex-grow">
          <Hero />
          <SocialProof />
          <ProblemSection />
          <SolutionSection />
          <LeadMagnetSection /> 
          <TeamSection />
          <CallToActionSection />
        </main>

        {/* FOOTER AL FINAL DEL SCROLL */}
        <Footer /> {/* <-- 2. AÑADIR COMPONENTE */}
      </div>
    </>
  );
}