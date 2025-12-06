'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MessageSquareX, Compass } from 'lucide-react';

const CONTENT = {
  es: {
    title: "Publicar por publicar es la forma más rápida de ser",
    highlight: "ignorado.",
    intro: "Tienes tráfico, pero no clientes. Tienes \"likes\", pero no ventas. La gente no compra lo que no entiende. Si confundes, pierdes.",
    cards: [
      { title: "Fricción Cognitiva", desc: "Tu usuario se pierde en tu web porque no sabe qué hacer a continuación. Cada segundo de duda es una venta perdida." },
      { title: "Silencio Incómodo", desc: "Tu blog habla mucho de ti, pero no resuelve los problemas de tu cliente. Es un monólogo, no una solución." },
      { title: "Desconexión Visual", desc: "Tu diseño es bonito, pero tu mensaje es confuso. La belleza no paga las facturas si no comunica valor." }
    ]
  },
  en: {
    title: "Posting for the sake of posting is the fastest way to be",
    highlight: "ignored.",
    intro: "You have traffic, but no clients. You have \"likes\", but no sales. People don't buy what they don't understand. If you confuse, you lose.",
    cards: [
      { title: "Cognitive Friction", desc: "Your user gets lost on your website because they don't know what to do next. Every second of doubt is a lost sale." },
      { title: "Awkward Silence", desc: "Your blog talks a lot about you, but doesn't solve your client's problems. It's a monologue, not a solution." },
      { title: "Visual Disconnect", desc: "Your design is pretty, but your message is confusing. Beauty doesn't pay the bills if it doesn't communicate value." }
    ]
  },
  fr: {
    title: "Publier pour publier est le moyen le plus rapide d'être",
    highlight: "ignoré.",
    intro: "Vous avez du trafic, mais pas de clients. Des « likes », mais pas de ventes. Les gens n'achètent pas ce qu'ils ne comprennent pas. Si vous semez la confusion, vous perdez la vente.",
    cards: [
      { title: "Friction Cognitive", desc: "Votre utilisateur se perd sur votre site car il ne sait pas quoi faire ensuite. Chaque seconde d'hésitation est une vente perdue." },
      { title: "Silence Gênant", desc: "Votre blog parle beaucoup de vous, mais ne résout pas les problèmes de votre client. C'est un monologue, pas une solution." },
      { title: "Déconnexion Visuelle", desc: "Votre design est joli, mais votre message est confus. La beauté ne paie pas les factures si elle ne communique pas de valeur." }
    ]
  }
};

interface ContentProblemProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function ContentProblem({ lang = 'es' }: ContentProblemProps) {
  const t = CONTENT[lang];
  const icons = [<Compass key={1} className="w-10 h-10 text-rojo-lacre mb-4" />, <MessageSquareX key={2} className="w-10 h-10 text-rojo-lacre mb-4" />, <MousePointerClick key={3} className="w-10 h-10 text-rojo-lacre mb-4" />];

  return (
    <section className="py-20 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            {t.title} <span className="text-rojo-lacre">{t.highlight}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((card, index) => (
            <div key={index} className="bg-gris-piedra/60 p-8 rounded-xl border border-white/10">
              {icons[index]}
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}