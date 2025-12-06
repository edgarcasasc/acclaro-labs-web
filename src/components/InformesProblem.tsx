'use client';
import React from 'react';

const CONTENT = {
  es: {
    title: "¿Su operación es una 'caja negra'?",
    desc: "Usted tiene los datos, pero no tiene las respuestas. Si alguna de estas preguntas le suena familiar, está en el lugar correcto.",
    cards: [
      { title: "Ventas y Marketing", text: "¿Por qué mis leads se 'enfrían'? Gasto en anuncios, pero no sé qué campaña realmente genera ingresos." },
      { title: "Costos y Operaciones", text: "¿Dónde se me está fugando el dinero? Mis gastos, mermas y tiempo extra están fuera de control y no identifico la causa." },
      { title: "Producción y Eficiencia", text: "¿Por qué mis pedidos tardan tanto? Tengo cuellos de botella que no logro ver y mis clientes se quejan." },
      { title: "Tecnología", text: "Tengo datos en Salesforce, un ERP y Excels por todas partes... pero ninguno se habla entre sí." }
    ]
  },
  en: {
    title: "Is Your Operation a 'Black Box'?",
    desc: "You have the data, but you don't have the answers. If any of these questions sound familiar, you are in the right place.",
    cards: [
      { title: "Sales & Marketing", text: "Why do my leads go 'cold'? I spend on ads, but I don't know which campaign actually generates revenue." },
      { title: "Costs & Operations", text: "Where is money leaking? My expenses, waste, and overtime are out of control, and I can't identify the root cause." },
      { title: "Production & Efficiency", text: "Why are my orders taking so long? I have bottlenecks I can't see, and my clients are complaining." },
      { title: "Technology", text: "I have data in Salesforce, an ERP, and Excels everywhere... but none of them talk to each other." }
    ]
  },
  fr: {
    title: "Votre Opération est-elle une « Boîte Noire » ?",
    desc: "Vous avez les données, mais pas les réponses. Si l'une de ces questions vous semble familière, vous êtes au bon endroit.",
    cards: [
      { title: "Ventes et Marketing", text: "Pourquoi mes leads refroidissent-ils ? Je dépense en publicités, mais je ne sais pas quelle campagne génère vraiment des revenus." },
      { title: "Coûts et Opérations", text: "Où l'argent s'échappe-t-il ? Mes dépenses, pertes et heures supplémentaires sont hors de contrôle et je n'en identifie pas la cause." },
      { title: "Production et Efficacité", text: "Pourquoi mes commandes prennent-elles autant de temps ? J'ai des goulots d'étranglement que je n'arrive pas à voir et mes clients se plaignent." },
      { title: "Technologie", text: "J'ai des données dans Salesforce, un ERP et des Excels partout... mais aucun ne communique entre eux." }
    ]
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesProblem({ lang = 'es' }: Props) {
  const t = CONTENT[lang];
  const icons = ["📈", "💸", "🏭", "🔌"];

  return (
    <section className="relative bg-gris-piedra py-20 text-blanco-pergamino">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-xl text-blanco-pergamino/80">{t.desc}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card, i) => (
            <div key={i} className="rounded-lg border border-rojo-lacre/50 bg-gray-800/20 p-6 shadow-lg hover:shadow-rojo-lacre/30 transition-all">
              <div className="mb-4 text-4xl">{icons[i]}</div>
              <h3 className="mb-3 text-2xl font-semibold text-rojo-lacre">{card.title}</h3>
              <p className="text-blanco-pergamino/90">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}