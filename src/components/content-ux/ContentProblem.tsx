'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MessageSquareX, Compass } from 'lucide-react';

export default function ContentProblem() {
  return (
    <section className="py-20 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            Publicar por publicar es la forma más rápida de ser <span className="text-rojo-lacre">ignorado.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tienes tráfico, pero no clientes. Tienes "likes", pero no ventas. La gente no compra lo que no entiende. Si confundes, pierdes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gris-piedra/60 p-8 rounded-xl border border-white/10">
            <Compass className="w-10 h-10 text-rojo-lacre mb-4" />
            <h3 className="text-xl font-bold mb-2">Fricción Cognitiva</h3>
            <p className="text-gray-400">Tu usuario se pierde en tu web porque no sabe qué hacer a continuación. Cada segundo de duda es una venta perdida.</p>
          </div>
          <div className="bg-gris-piedra/60 p-8 rounded-xl border border-white/10">
            <MessageSquareX className="w-10 h-10 text-rojo-lacre mb-4" />
            <h3 className="text-xl font-bold mb-2">Silencio Incómodo</h3>
            <p className="text-gray-400">Tu blog habla mucho de ti, pero no resuelve los problemas de tu cliente. Es un monólogo, no una solución.</p>
          </div>
          <div className="bg-gris-piedra/60 p-8 rounded-xl border border-white/10">
            <MousePointerClick className="w-10 h-10 text-rojo-lacre mb-4" />
            <h3 className="text-xl font-bold mb-2">Desconexión Visual</h3>
            <p className="text-gray-400">Tu diseño es bonito, pero tu mensaje es confuso. La belleza no paga las facturas si no comunica valor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}