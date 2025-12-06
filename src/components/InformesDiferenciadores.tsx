'use client';
import React from 'react';

const CONTENT = {
  es: {
    title: "No solo integramos. Activamos.",
    desc: "No vendemos licencias de software. Vendemos resultados de negocio.",
    items: [
      { title: "Agnósticos de Plataforma", text: "No lo forzamos a usar una herramienta. Somos expertos en conectar cualquier fuente." },
      { title: "IA Integrada y Accionable", text: "No nos detenemos en el 'qué pasó'. Usamos IA para decirle 'qué pasará' (Mantenimiento Predictivo)." },
      { title: "Enfoque en el Problema de Negocio", text: "Usted no necesita un 'Dashboard'. Usted necesita 'reducir el tiempo extra'. Entendemos la diferencia." },
      { title: "Implementación Rápida (POC)", text: "Demostramos valor rápidamente. Podemos tener un POC funcional en 2-4 semanas." }
    ]
  },
  en: {
    title: "We don't just integrate. We activate.",
    desc: "We don't sell software licenses. We sell business results.",
    items: [
      { title: "Platform Agnostic", text: "We don't force a tool on you. We are experts in connecting any source." },
      { title: "Integrated & Actionable AI", text: "We don't stop at 'what happened.' We use AI to tell you 'what will happen'." },
      { title: "Business Problem Focus", text: "You don't need a 'Dashboard.' You need to 'reduce overtime.' We understand the difference." },
      { title: "Rapid Implementation (POC)", text: "We demonstrate value quickly. We can have a functional POC in 2-4 weeks." }
    ]
  },
  fr: {
    title: "Nous n'intégrons pas seulement. Nous activons.",
    desc: "Nous ne vendons pas de licences logicielles. Nous vendons des résultats d'affaires.",
    items: [
      { title: "Agnostiques de la Plateforme", text: "Nous ne vous forçons pas à utiliser un outil. Nous sommes experts pour connecter n'importe quelle source." },
      { title: "IA Intégrée et Actionnable", text: "Nous utilisons l'IA pour vous dire « ce qui va se passer » (Maintenance Prédictive)." },
      { title: "Focalisation sur le Problème", text: "Vous n'avez pas besoin d'un « Tableau de Bord ». Vous avez besoin de « réduire les heures supplémentaires »." },
      { title: "Mise en Œuvre Rapide (POC)", text: "Nous démontrons la valeur rapidement. POC fonctionnelle en 2-4 semaines." }
    ]
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesDiferenciadores({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative bg-blanco-pergamino py-20 text-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-xl text-gray-700">{t.desc}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.items.map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-3xl">✅</div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}