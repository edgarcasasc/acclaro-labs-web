// src/app/servicios/consultoria-crm/page.tsx
import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import CrmHero from '@/components/crm/CrmHero';
import CrmProblem from '@/components/crm/CrmProblem';
import CrmSolution from '@/components/crm/CrmSolution';
import CrmAuthority from '@/components/crm/CrmAuthority';
import CrmFinalCTA from '@/components/crm/CrmFinalCTA';

export default function ConsultoriaCRMPage() {
  return (
    <>
      {/* CAPA 1: El Universo Digital (Fondo) */}
      <DigitalUniverse />

      {/* CAPA 2: Narrativa Estratégica */}
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-rojo-lacre selection:text-white">
        
        {/* 1. EL GANCHO: Atención inmediata */}
        <CrmHero />

        {/* 2. EL CONFLICTO: Agitación del dolor */}
        <CrmProblem />

        {/* 3. LA GUÍA: Solución y Puente */}
        <CrmSolution />

        {/* 4. ETHOS: Autoridad */}
        <CrmAuthority />

        {/* 5. CIERRE: Llamada a la acción */}
        <CrmFinalCTA />

      </main>
    </>
  );
}