'use client';
import React from 'react';
import { BrainCircuit, PenTool, Bot } from 'lucide-react';

export default function ContentSolution() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center md:text-left">
          <span className="text-oro-antiguo font-bold tracking-widest text-sm uppercase">Nuestra Metodología</span>
          <h2 className="text-4xl md:text-6xl font-bold font-serif mt-2 mb-6 text-white">
            Psicología aplicada al Pixel.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            No somos una agencia creativa tradicional. Somos arquitectos de comportamiento. Utilizamos datos y empatía para construir caminos digitales irresistibles.
          </p>
        </div>

        <div className="space-y-8">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-oro-antiguo/50 transition-all">
            <div className="bg-oro-antiguo/20 p-4 rounded-lg text-oro-antiguo">
              <BrainCircuit size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">UX/UI de Alta Conversión</h3>
              <p className="text-gray-400 text-lg">Aplicamos principios de Neuromarketing. Eliminamos cada barrera. Hacemos que comprarte sea la decisión más fácil del día para tu cliente.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-oro-antiguo/50 transition-all">
            <div className="bg-oro-antiguo/20 p-4 rounded-lg text-oro-antiguo">
              <PenTool size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Contenido con Intención (SEO + Storytelling)</h3>
              <p className="text-gray-400 text-lg">Dejamos de escribir para rellenar huecos. Respondemos a las preguntas que tu cliente le hace a Google a las 2 AM, posicionándote como la autoridad.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-oro-antiguo/50 transition-all">
            <div className="bg-oro-antiguo/20 p-4 rounded-lg text-oro-antiguo">
              <Bot size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Producción Aumentada por IA</h3>
              <p className="text-gray-400 text-lg">Analizamos patrones masivos para personalizar el mensaje, pero mantenemos el toque humano radical que genera confianza.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">"Estrategias validadas por datos, no por opiniones. Convertimos visitas anónimas en nombres y apellidos en tu CRM."</p>
        </div>
      </div>
    </section>
  );
}