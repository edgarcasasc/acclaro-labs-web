// src/components/MegaMenu.tsx
'use client'; 

import React from 'react';
import Link from 'next/link';
import { ChevronDown, Globe } from 'lucide-react'; 
import * as Popover from '@radix-ui/react-popover'; 

// --- Iconos SVG (Asegúrate de que existan) ---
// --- Iconos SVG ---
const CrmIcon = () => (
<svg className="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A9.065 9.065 0 0 1 12 3c2.17 0 4.207.576 5.963 1.584a9.065 9.065 0 0 1-5.963 16.416Z" />
 <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
</svg>
);
const WebIcon = () => (
<svg className="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 16.5" />
</svg>
);
const BiIcon = () => (
<svg className="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 9.75 19.875V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>
);
// --- Fin de Iconos SVG ---


export function MegaMenu() {
  // --- 1. Constante de Idiomas (Solo ES, EN, FR con ES activo) ---
  const languages = [
    { code: 'es', name: 'Español', active: true }, 
    { code: 'en', name: 'English', active: false },
    { code: 'fr', name: 'Français', active: false },
  ];

  const activeLanguage = languages.find(lang => lang.active)?.name || 'Idioma';

  return (
    <div className="flex items-center gap-6">
      <Link href="/" className="text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors">
        Inicio
      </Link>

      {/* --- Popover de Servicios --- */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="group flex items-center gap-1 text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors focus:outline-none">
            Servicios
            <ChevronDown size={16} className="transition-transform group-data-[state=open]:rotate-180" />
          </button>
        </Popover.Trigger>
        
        <Popover.Portal>
          <Popover.Content 
            sideOffset={15}
            align="center"
            className="z-[51] w-screen max-w-sm rounded-lg bg-gris-piedra/90 backdrop-blur-md 
                       text-blanco-pergamino shadow-2xl ring-1 ring-blanco-pergamino/10"
          >
            <div className="p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blanco-pergamino/60">
                Nuestros Servicios
              </h3>
              <div className="flex flex-col gap-2">
                {/* Item 1: CRM */}
                <Link href="/servicios/consultoria-crm" className="group rounded-md p-3 hover:bg-azul-zafiro/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1"><CrmIcon /></div>
                    <div>
                      <h4 className="font-semibold text-blanco-pergamino">Consultoría CRM y Datos</h4>
                      <p className="text-sm text-blanco-pergamino/70">Unifique Salesforce y HubSpot para acelerar su ciclo de venta.</p>
                    </div>
                  </div>
                </Link>
                {/* Item 2: Web Dev */}
                <Link href="/servicios/desarrollo-web" className="group rounded-md p-3 hover:bg-azul-zafiro/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1"><WebIcon /></div>
                    <div>
                      <h4 className="font-semibold text-blanco-pergamino">Desarrollo Web y Aplicaciones</h4>
                      <p className="text-sm text-blanco-pergamino/70">Construya las plataformas personalizadas que conectan su operación.</p>
                    </div>
                  </div>
                </Link>
                {/* Item 3: Estrategia / UX */}
                <Link href="/servicios/estrategia-contenido" className="group rounded-md p-3 hover:bg-azul-zafiro/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1"><BiIcon /></div>
                    <div>
                      <h4 className="font-semibold text-blanco-pergamino">Estrategia de Contenido y UX</h4>
                      <p className="text-sm text-blanco-pergamino/70">Psicología aplicada al pixel para guiar al usuario a la conversión.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      {/* Blog ELIMINADO de la navegación de escritorio */}
      
      <Link href="/contacto" className="text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors">
        Contacto
      </Link>

      {/* --- Popover de Idioma (Actualizado para ES/EN/FR) --- */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="group flex items-center gap-1 text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors focus:outline-none">
            <Globe size={16} />
            <span>{activeLanguage}</span>
            <ChevronDown size={16} className="transition-transform group-data-[state=open]:rotate-180" />
          </button>
        </Popover.Trigger>
        
        <Popover.Portal>
          <Popover.Content 
            sideOffset={15}
            align="center"
            className="z-[51] w-screen max-w-[200px] rounded-lg bg-gris-piedra/90 backdrop-blur-md 
                       text-blanco-pergamino shadow-2xl ring-1 ring-blanco-pergamino/10"
          >
            <div className="p-2">
              <ul className="flex flex-col gap-1">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    {/* Al hacer clic, enviamos al path del idioma. */}
                    <Link 
                      href={`/${lang.code}/`} 
                      className={`
                        block w-full p-2 text-left text-sm rounded-md transition-colors 
                        ${lang.active 
                          ? 'bg-azul-zafiro/50 font-semibold text-blanco-pergamino' 
                          : 'text-blanco-pergamino/70 opacity-90 hover:bg-azul-zafiro/30'
                        }
                      `}
                    >
                      {lang.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}