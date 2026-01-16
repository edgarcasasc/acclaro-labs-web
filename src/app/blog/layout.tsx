import React from 'react';
// LA CORRECCIÓN: Usamos llaves porque es un 'named export'
import { GlobalNav } from '@/components/GlobalNav'; 
import DigitalUniverse from '@/components/DigitalUniverse';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen text-slate-100 font-sans">
      
      {/* 1. NAVEGACIÓN GLOBAL 
          Le pasamos lang="es" para que muestre los textos en español
      */}
      <GlobalNav lang="es" />

      {/* 2. FONDO DE PARTÍCULAS
          Lo mantenemos fijo al fondo para consistencia con la Home
      */}
      <div className="fixed inset-0 z-[-10]">
         <DigitalUniverse />
      </div>

      {/* 3. CONTENIDO DEL BLOG 
          Agregamos padding-top (pt-32) para que el menú no tape el título
      */}
      <main className="relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 md:p-12">
          {children}
        </div>
      </main>

    </div>
  );
}