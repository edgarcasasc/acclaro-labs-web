import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContentHero from '@/components/content-ux/ContentHero';
import ContentProblem from '@/components/content-ux/ContentProblem';
import ContentSolution from '@/components/content-ux/ContentSolution';
import AuditFormSection from '@/components/AuditFormSection'; 

export default function EnContentStrategyPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-oro-antiguo selection:text-black">
        <ContentHero lang="en"/>
        <ContentProblem lang="en"/>
        <ContentSolution lang="en"/>
        <AuditFormSection lang="en"/>
      </main>
    </>
  );
}