import React from 'react';
import Link from 'next/link';

export default function CrmFinalCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 text-white">
          Estás a una auditoría de convertir tu mayor gasto tecnológico en tu <span className="text-oro-antiguo">mayor activo de marketing.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Tu competencia sigue tomando decisiones basadas en intuición. Tú puedes empezar a tomarlas basadas en evidencia.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Link href="/auditoria">
            <button className="bg-oro-antiguo text-gris-piedra px-10 py-5 rounded-full text-xl font-bold hover:bg-white transition-all shadow-glow-blue transform hover:-translate-y-1">
              Agendar mi Auditoría de Claridad
            </button>
          </Link>
          <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            Sin compromiso. Solo verdad.
          </span>
        </div>
      </div>
    </section>
  );
}