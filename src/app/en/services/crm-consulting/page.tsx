import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import CrmHero from '@/components/crm/CrmHero';
import CrmProblem from '@/components/crm/CrmProblem';
import CrmSolution from '@/components/crm/CrmSolution';
import CrmAuthority from '@/components/crm/CrmAuthority';
import CrmFinalCTA from '@/components/crm/CrmFinalCTA';

export default function EnCrmPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-rojo-lacre selection:text-white">
        <CrmHero lang="en" />
        <CrmProblem lang="en" />
        <CrmSolution lang="en" />
        <CrmAuthority lang="en" />
        <CrmFinalCTA lang="en" />
      </main>
    </>
  );
}