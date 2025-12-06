import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';

export default function BlogPage() {
  const posts = [
    {
      title: "¿Por qué tu Salesforce odia tu página web?",
      excerpt: "La desconexión entre ventas y marketing te está costando millones. Aquí explicamos cómo arreglarlo.",
      date: "05 Dic, 2025",
      category: "Estrategia"
    },
    {
      title: "El fin de las agencias tradicionales",
      excerpt: "Por qué el modelo de silos (una agencia para SEO, otra para Dev) está muerto.",
      date: "01 Dic, 2025",
      category: "Opinión"
    },
    {
      title: "Next.js 15: ¿Vale la pena la migración?",
      excerpt: "Analizamos el impacto en rendimiento y SEO de la última versión del framework de React.",
      date: "28 Nov, 2025",
      category: "Tecnología"
    }
  ];

  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 text-blanco-pergamino min-h-screen">
        <section className="pt-32 pb-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bitácora del Arquitecto</h1>
          <p className="text-gray-400">Pensamientos sobre tecnología, negocios y el caos digital.</p>
        </section>

        <section className="py-10 px-6 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-gris-piedra/60 border border-white/10 p-6 rounded-lg hover:border-oro-antiguo/50 transition-colors cursor-pointer">
              <span className="text-xs font-bold text-azul-zafiro bg-azul-zafiro/10 px-2 py-1 rounded mb-3 inline-block">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-2 hover:text-oro-antiguo transition-colors">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
              <span className="text-xs text-gray-500">{post.date}</span>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}