// src/components/GlobalNav.tsx
'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 
import { MegaMenu } from '@/components/MegaMenu';
import LogoAcclaro from '@/components/LogoAcclaro'; 

export function GlobalNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ctaButtonClasses = "rounded-md bg-oro-antiguo px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-oro-antiguo/80 transition-colors";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 
                      bg-gris-piedra/80 backdrop-blur-md ring-1 ring-blanco-pergamino/10">        
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Volver al Inicio">
            <LogoAcclaro className="h-10 w-auto text-blanco-pergamino" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* --- CAMBIO 1: Enlace Desktop apunta a la sección de auditoría en la pág de contenido --- */}
          <Link 
            href="/servicios/estrategia-contenido#auditoria" 
            className={`hidden md:block ${ctaButtonClasses}`}
          >
            Solicita tu Auditoría
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-2 text-blanco-pergamino md:hidden"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* MegaMenu solo visible en Desktop */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <MegaMenu /> 
        </div>
      </nav>

      {/* OVERLAY DE MENÚ MÓVIL */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 pt-20 text-blanco-pergamino 
                     md:hidden 
                     bg-gris-piedra/95 backdrop-blur-lg transition-all duration-300"
        >
          <Link href="/" className="text-2xl font-semibold hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          
          {/* Enlaces a Servicios Específicos en Móvil (para evitar 404 en /servicios) */}
          <div className="flex flex-col items-center gap-4 py-4 border-y border-white/10 w-full">
            <span className="text-xs uppercase tracking-widest text-gray-500">Servicios</span>
            <Link href="/servicios/consultoria-crm" className="text-xl font-medium hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>CRM & Datos</Link>
            <Link href="/servicios/desarrollo-web" className="text-xl font-medium hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>Desarrollo Web</Link>
            <Link href="/servicios/estrategia-contenido" className="text-xl font-medium hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>Estrategia & UX</Link>
          </div>
          
          <Link href="/blog" className="text-2xl font-semibold hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/contacto" className="text-2xl font-semibold hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          
          <div className="pt-8">
            {/* --- CAMBIO 2: Enlace Móvil apunta a la sección de auditoría --- */}
            <Link 
              href="/servicios/estrategia-contenido#auditoria" 
              className={ctaButtonClasses} 
              onClick={() => setIsMenuOpen(false)}
            >
              Solicita tu Auditoría
            </Link>
          </div>
        </div>
      )}
    </>
  );
}