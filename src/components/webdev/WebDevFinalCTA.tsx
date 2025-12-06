import React from 'react';
import Link from 'next/link';

export default function WebDevFinalCTA() {
  return (
    <section className="py-24 px-6 text-center bg-gris-piedra">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-white">
          Deja de adivinar. <span className="text-azul-zafiro">Empieza a unificar.</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          No necesitas otro rediseño estético. Necesitas una reingeniería de conversión. Convierte tu tráfico en ingresos y tus visitas en datos accionables.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Link href="/auditoria">
            <button className="bg-azul-zafiro text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-glow-blue hover:-translate-y-1">
              Auditar mi Arquitectura Web
            </button>
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            Analizaremos velocidad, SEO y conectividad.
          </span>
        </div>
      </div>
    </section>
  );
}