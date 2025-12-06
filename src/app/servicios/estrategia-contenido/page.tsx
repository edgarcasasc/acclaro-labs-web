import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContentHero from '@/components/content-ux/ContentHero';
import ContentProblem from '@/components/content-ux/ContentProblem';
import ContentSolution from '@/components/content-ux/ContentSolution';
import AuditFormSection from '@/components/AuditFormSection'; // El Gran Cierre reutilizable

export default function EstrategiaContenidoPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-oro-antiguo selection:text-black">
        
        {/* 1. EL GANCHO */}
        <ContentHero />

        {/* 2. EL CONFLICTO */}
        <ContentProblem />

        {/* 3. LA GUÍA */}
        <ContentSolution />

        {/* 4. CIERRE (El Formulario Maestro) */}
        <AuditFormSection />

      </main>
    </>
  );
}