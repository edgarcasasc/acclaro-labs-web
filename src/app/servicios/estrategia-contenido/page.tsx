import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import Footer from '@/components/Footer'; // <--- Importamos el Footer

// Componentes de la Landing
import ContentHero from '@/components/content-ux/ContentHero';
import ContentProblem from '@/components/content-ux/ContentProblem';
import ContentSolution from '@/components/content-ux/ContentSolution';
import AuditFormSection from '@/components/AuditFormSection'; 

export default function EstrategiaContenidoPage() {
  return (
    <>
      {/* Fondo Global */}
      <DigitalUniverse />
      
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-oro-antiguo selection:text-black">
        <ContentHero lang="es"/>
        <ContentProblem lang="es"/>
        <ContentSolution lang="es"/>
        <AuditFormSection lang="es"/>
      </main>

      {/* Footer Global */}
      <Footer />
    </>
  );
}