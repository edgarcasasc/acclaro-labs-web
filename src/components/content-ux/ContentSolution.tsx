'use client';
import React from 'react';
import { BrainCircuit, PenTool, Bot } from 'lucide-react';

const CONTENT = {
  es: {
    title: "Psicología aplicada al Pixel.",
    desc: "No somos una agencia creativa tradicional. Somos arquitectos de comportamiento. Utilizamos datos y empatía para construir caminos digitales irresistibles.",
    steps: [
      { title: "UX/UI de Alta Conversión", desc: "Aplicamos principios de Neuromarketing. Eliminamos cada barrera. Hacemos que comprarte sea la decisión más fácil del día para tu cliente." },
      { title: "Contenido con Intención (SEO + Storytelling)", desc: "Dejamos de escribir para rellenar huecos. Respondemos a las preguntas que tu cliente le hace a Google a las 2 AM, posicionándote como la autoridad." },
      { title: "Producción Aumentada por IA", desc: "Analizamos patrones masivos para personalizar el mensaje, pero mantenemos el toque humano radical que genera confianza." }
    ],
    quote: "\"Estrategias validadas por datos, no por opiniones. Convertimos visitas anónimas en nombres y apellidos en tu CRM.\""
  },
  en: {
    title: "Psychology applied to the Pixel.",
    desc: "We are not a traditional creative agency. We are behavioral architects. We use data and empathy to build irresistible digital paths.",
    steps: [
      { title: "High-Conversion UX/UI", desc: "We apply Neuromarketing principles. We eliminate every barrier. We make buying from you the easiest decision of the day for your client." },
      { title: "Content with Intent (SEO + Storytelling)", desc: "We stop writing just to fill gaps. We answer the questions your client asks Google at 2 AM, positioning you as the authority." },
      { title: "AI-Augmented Production", desc: "We analyze massive patterns to personalize the message, but we keep the radical human touch that builds trust." }
    ],
    quote: "\"Strategies validated by data, not opinions. We turn anonymous visits into names and surnames in your CRM.\""
  },
  fr: {
    title: "La psychologie appliquée au Pixel.",
    desc: "Nous ne sommes pas une agence créative traditionnelle. Nous sommes des architectes comportementaux. Nous utilisons les données et l'empathie pour construire des parcours numériques irrésistibles.",
    steps: [
      { title: "UX/UI à Haute Conversion", desc: "Nous appliquons des principes de Neuromarketing. Nous éliminons chaque barrière. Nous faisons en sorte qu'acheter chez vous soit la décision la plus facile de la journée pour votre client." },
      { title: "Contenu avec Intention (SEO + Storytelling)", desc: "Nous arrêtons d'écrire pour combler le vide. Nous répondons aux questions que votre client pose à Google à 2 heures du matin, vous positionnant ainsi comme l'autorité." },
      { title: "Production Augmentée par l'IA", desc: "Nous analysons des modèles massifs pour personnaliser le message, mais nous conservons la touche humaine radicale qui génère la confiance." }
    ],
    quote: "« Des stratégies validées par des données, pas des opinions. Nous transformons les visites anonymes en noms et prénoms dans votre CRM. »"
  }
};

interface ContentSolutionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function ContentSolution({ lang = 'es' }: ContentSolutionProps) {
  const t = CONTENT[lang];
  const icons = [<BrainCircuit key={1} size={32} />, <PenTool key={2} size={32} />, <Bot key={3} size={32} />];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center md:text-left">
          <span className="text-oro-antiguo font-bold tracking-widest text-sm uppercase">
            {lang === 'fr' ? 'Notre Méthodologie' : (lang === 'en' ? 'Our Methodology' : 'Nuestra Metodología')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-serif mt-2 mb-6 text-white">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="space-y-8">
          {t.steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-oro-antiguo/50 transition-all">
              <div className="bg-oro-antiguo/20 p-4 rounded-lg text-oro-antiguo">
                {icons[i]}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">{t.quote}</p>
        </div>
      </div>
    </section>
  );
}