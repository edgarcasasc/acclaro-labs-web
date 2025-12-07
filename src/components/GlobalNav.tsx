// src/components/GlobalNav.tsx
'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { Menu, X, Globe } from 'lucide-react'; 
import { MegaMenu } from '@/components/MegaMenu';
import LogoAcclaro from '@/components/LogoAcclaro'; 

// --- 1. DICCIONARIO DE NAVEGACIÓN (GLOBAL) ---
const NAV_CONTENT = {
  es: {
    cta: "Solicita tu Auditoría",
    home: "Inicio",
    services: "Servicios",
    contact: "Contacto",
    menu_crm: "CRM & Datos",
    menu_web: "Desarrollo Web",
    menu_strategy: "Estrategia & UX",
    menu_bi: "Informes BI & IA",
    // Rutas localizadas
    link_crm: "/servicios/consultoria-crm",
    link_web: "/servicios/desarrollo-web",
    link_strategy: "/servicios/estrategia-contenido",
    link_bi: "/servicios/informes-ia",
    link_contact: "/contacto",
    lang_label: "Idioma"
  },
  en: {
    cta: "Request your Audit",
    home: "Home",
    services: "Services",
    contact: "Contact",
    menu_crm: "CRM & Data",
    menu_web: "Web Development",
    menu_strategy: "Strategy & UX",
    menu_bi: "BI & AI Reporting",
    // Rutas localizadas
    link_crm: "/en/services/crm-consulting",
    link_web: "/en/services/web-development",
    link_strategy: "/en/services/content-strategy",
    link_bi: "/en/services/bi-ai-reporting",
    link_contact: "/en/contact",
    lang_label: "Language"
  },
  fr: {
    cta: "Demandez votre Audit",
    home: "Accueil",
    services: "Services",
    contact: "Contact",
    menu_crm: "CRM & Données",
    menu_web: "Dév. Web",
    menu_strategy: "Stratégie & UX",
    menu_bi: "Rapports BI & IA",
    // Rutas localizadas
    link_crm: "/fr/services/conseil-crm",
    link_web: "/fr/services/developpement-web",
    link_strategy: "/fr/services/strategie-contenu",
    link_bi: "/fr/services/rapports-bi-ia",
    link_contact: "/fr/contact",
    lang_label: "Langue"
  }
};

export function GlobalNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detectar idioma actual
  type LangCode = 'es' | 'en' | 'fr';
  const currentLangCode: LangCode = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/fr') ? 'fr' : 'es';
  const t = NAV_CONTENT[currentLangCode];

  // Enlace de inicio dinámico
  const homeLink = currentLangCode === 'es' ? '/' : `/${currentLangCode}`;

  const ctaButtonClasses = "rounded-md bg-oro-antiguo px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-oro-antiguo/80 transition-colors";

  // --- CORRECCIÓN: Definición de la función handleLanguageChange ---
  const handleLanguageChange = (lang: string) => {
    // 1. Guardar Cookie
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    // 2. Determinar ruta destino
    const targetUrl = lang === 'es' ? '/' : `/${lang}`;
    // 3. Forzar navegación "dura" para que el Middleware lea la cookie nueva
    window.location.href = targetUrl;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 
                      bg-gris-piedra/80 backdrop-blur-md ring-1 ring-blanco-pergamino/10">        
        <div className="flex items-center gap-4">
          <Link href={homeLink} aria-label="Volver al Inicio">
            <LogoAcclaro className="h-10 w-auto text-blanco-pergamino" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* CTA DESKTOP */}
          <Link 
            href={`${t.link_strategy}#auditoria`} 
            className={`hidden md:block ${ctaButtonClasses}`}
          >
            {t.cta}
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-2 text-blanco-pergamino md:hidden"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <MegaMenu /> 
        </div>
      </nav>

      {/* OVERLAY DE MENÚ MÓVIL */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 pt-20 text-blanco-pergamino 
                     md:hidden 
                     bg-gris-piedra/95 backdrop-blur-lg transition-all duration-300 overflow-y-auto"
        >
          <Link href={homeLink} className="text-2xl font-semibold hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>
            {t.home}
          </Link>
          
          <div className="flex flex-col items-center gap-4 py-4 border-y border-white/10 w-3/4">
            <span className="text-xs uppercase tracking-widest text-gray-500">{t.services}</span>
            <Link href={t.link_crm} className="text-xl font-medium hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>
              {t.menu_crm}
            </Link>
            <Link href={t.link_web} className="text-xl font-medium hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>
              {t.menu_web}
            </Link>
            <Link href={t.link_strategy} className="text-xl font-medium hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>
              {t.menu_strategy}
            </Link>
            <Link href={t.link_bi} className="text-xl font-medium hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>
              {t.menu_bi}
            </Link>
          </div>
          
          <Link href={t.link_contact} className="text-2xl font-semibold hover:text-oro-antiguo" onClick={() => setIsMenuOpen(false)}>
            {t.contact}
          </Link>
          
          <div className="pt-4">
            <Link 
              href={`${t.link_strategy}#auditoria`} 
              className={ctaButtonClasses} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t.cta}
            </Link>
          </div>

          {/* SELECTOR DE IDIOMA MÓVIL */}
          <div className="mt-8 border-t border-white/10 pt-6 w-full flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
              <Globe size={14} /> {t.lang_label}
            </span>
            <div className="flex gap-4">
              {/* Usamos button en lugar de Link para controlar la navegación */}
              <button 
                onClick={() => handleLanguageChange('es')}
                className={`px-4 py-2 rounded-full border transition-all ${currentLangCode === 'es' ? 'bg-white text-black border-white font-bold' : 'border-white/30 text-white/70 hover:border-white'}`}
              >
                ES
              </button>
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-4 py-2 rounded-full border transition-all ${currentLangCode === 'en' ? 'bg-white text-black border-white font-bold' : 'border-white/30 text-white/70 hover:border-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('fr')}
                className={`px-4 py-2 rounded-full border transition-all ${currentLangCode === 'fr' ? 'bg-white text-black border-white font-bold' : 'border-white/30 text-white/70 hover:border-white'}`}
              >
                FR
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}