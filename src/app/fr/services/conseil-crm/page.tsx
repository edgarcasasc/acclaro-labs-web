import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import CrmHero from '@/components/crm/CrmHero';
import CrmProblem from '@/components/crm/CrmProblem';
import CrmSolution from '@/components/crm/CrmSolution';
import CrmAuthority from '@/components/crm/CrmAuthority';
import CrmFinalCTA from '@/components/crm/CrmFinalCTA';
import Footer from '@/components/Footer';

export default function FrCrmPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-rojo-lacre selection:text-white">
        <CrmHero lang="fr" />
        <CrmProblem lang="fr" />
        <CrmSolution lang="fr" />
        <CrmAuthority lang="fr" />
        <CrmFinalCTA lang="fr" />
      </main><Footer lang="fr" /> {/* <--- 2. Agregamos el footer en francés */}
    </>
  );
}