// src/components/MegaMenu.tsx
'use client'; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react'; 
import * as Popover from '@radix-ui/react-popover'; 

// --- Iconos SVG (Sin cambios) ---
const CrmIcon = () => ( <svg className="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A9.065 9.065 0 0 1 12 3c2.17 0 4.207.576 5.963 1.584a9.065 9.065 0 0 1-5.963 16.416Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>);
const WebIcon = () => ( <svg className="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 16.5" /></svg>);
const BiIcon = () => ( <svg className="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 9.75 19.875V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 9.75 19.875V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>);
const DataIcon = () => ( <svg className="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 9.75 19.875V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>);

// --- DICCIONARIO CON RUTAS LOCALIZADAS ---
const MENU_CONTENT = {
  es: {
    home: "Inicio",
    services: "Servicios",
    contact: "Contacto",
    our_services_title: "Nuestros Servicios",
    service_crm: {
      title: "Consultoría CRM y Datos",
      desc: "Unifique Salesforce y HubSpot para acelerar su ciclo de venta.",
      href: "/servicios/consultoria-crm"
    },
    service_web: {
      title: "Desarrollo Web y Aplicaciones",
      desc: "Construya las plataformas personalizadas que conectan su operación.",
      href: "/servicios/desarrollo-web"
    },
    service_strategy: {
      title: "Estrategia de Contenido y UX",
      desc: "Psicología aplicada al pixel para guiar al usuario a la conversión.",
      href: "/servicios/estrategia-contenido"
    },
    service_bi: {
      title: "Informes Inteligentes (BI & IA)",
      desc: "Active sus datos con dashboards de Tableau y Power BI.",
      href: "/servicios/informes-ia"
    },
    link_contact: "/contacto"
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    our_services_title: "Our Services",
    service_crm: {
      title: "CRM & Data Consulting",
      desc: "Unify Salesforce and HubSpot to accelerate your sales cycle.",
      href: "/en/services/crm-consulting"
    },
    service_web: {
      title: "Web & App Development",
      desc: "Build custom platforms that connect your operations.",
      href: "/en/services/web-development"
    },
    service_strategy: {
      title: "Content Strategy & UX",
      desc: "Psychology applied to the pixel to guide users to conversion.",
      href: "/en/services/content-strategy"
    },
    service_bi: {
      title: "Intelligent Reports (BI & AI)",
      desc: "Activate your data with Tableau and Power BI dashboards.",
      href: "/en/services/bi-ai-reporting"
    },
    link_contact: "/en/contact"
  },
  fr: {
    home: "Accueil",
    services: "Services",
    contact: "Contact",
    our_services_title: "Nos Services",
    service_crm: {
      title: "Conseil CRM et Données",
      desc: "Unifiez Salesforce et HubSpot pour accélérer votre cycle de vente.",
      href: "/fr/services/conseil-crm"
    },
    service_web: {
      title: "Développement Web et Applications",
      desc: "Construisez des plateformes personnalisées qui connectent vos opérations.",
      href: "/fr/services/developpement-web"
    },
    service_strategy: {
      title: "Stratégie de Contenu et UX",
      desc: "La psychologie appliquée au pixel pour guider l'utilisateur vers la conversion.",
      href: "/fr/services/strategie-contenu"
    },
    service_bi: {
      title: "Rapports Intelligents (BI & IA)",
      desc: "Activez vos données avec des tableaux de bord Tableau et Power BI.",
      href: "/fr/services/rapports-bi-ia"
    },
    link_contact: "/fr/contact"
  }
};

export function MegaMenu() {
  const pathname = usePathname();
  
  type LangCode = 'es' | 'en' | 'fr';
  const currentLangCode: LangCode = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/fr') ? 'fr' : 'es';
  
  const t = MENU_CONTENT[currentLangCode];

  // --- CORRECCIÓN: Función robusta para cambio de idioma ---
  const handleLanguageChange = (lang: string) => {
    // 1. Guardar Cookie
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    // 2. Determinar ruta destino
    const targetUrl = lang === 'es' ? '/' : `/${lang}`;
    // 3. Forzar navegación "dura"
    window.location.href = targetUrl;
  };

  const languages = [
    { code: 'es', name: 'Español' }, 
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ];

  const activeLanguageName = languages.find(l => l.code === currentLangCode)?.name || 'Español';
  const homeLink = currentLangCode === 'es' ? '/' : `/${currentLangCode}`;

  return (
    <div className="flex items-center gap-6">
      <Link href={homeLink} className="text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors">
        {t.home}
      </Link>

      {/* Popover de Servicios */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="group flex items-center gap-1 text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors focus:outline-none">
            {t.services}
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
                {t.our_services_title}
              </h3>
              <div className="flex flex-col gap-2">
                <Link href={t.service_crm.href} className="group rounded-md p-3 hover:bg-azul-zafiro/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1"><CrmIcon /></div>
                    <div>
                      <h4 className="font-semibold text-blanco-pergamino">{t.service_crm.title}</h4>
                      <p className="text-sm text-blanco-pergamino/70">{t.service_crm.desc}</p>
                    </div>
                  </div>
                </Link>
                <Link href={t.service_web.href} className="group rounded-md p-3 hover:bg-azul-zafiro/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1"><WebIcon /></div>
                    <div>
                      <h4 className="font-semibold text-blanco-pergamino">{t.service_web.title}</h4>
                      <p className="text-sm text-blanco-pergamino/70">{t.service_web.desc}</p>
                    </div>
                  </div>
                </Link>
                <Link href={t.service_strategy.href} className="group rounded-md p-3 hover:bg-azul-zafiro/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1"><BiIcon /></div>
                    <div>
                      <h4 className="font-semibold text-blanco-pergamino">{t.service_strategy.title}</h4>
                      <p className="text-sm text-blanco-pergamino/70">{t.service_strategy.desc}</p>
                    </div>
                  </div>
                </Link>
                <Link href={t.service_bi.href} className="group rounded-md p-3 hover:bg-azul-zafiro/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1"><DataIcon /></div>
                    <div>
                      <h4 className="font-semibold text-blanco-pergamino">{t.service_bi.title}</h4>
                      <p className="text-sm text-blanco-pergamino/70">{t.service_bi.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      
      {/* Link de Contacto dinámico */}
      <Link href={t.link_contact} className="text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors">
        {t.contact}
      </Link>

      {/* Popover de Idioma (CORREGIDO) */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="group flex items-center gap-1 text-sm font-medium text-blanco-pergamino/80 hover:text-blanco-pergamino transition-colors focus:outline-none">
            <Globe size={16} />
            <span>{activeLanguageName}</span>
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
                {languages.map((lang) => {
                  const isActive = lang.code === currentLangCode;

                  return (
                    <li key={lang.code}>
                      {/* Usamos button para ejecutar la lógica de cookie + recarga */}
                      <button 
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`
                          block w-full p-2 text-left text-sm rounded-md transition-colors 
                          ${isActive 
                            ? 'bg-azul-zafiro/50 font-semibold text-blanco-pergamino' 
                            : 'text-blanco-pergamino/70 opacity-90 hover:bg-azul-zafiro/30'
                          }
                        `}
                      >
                        {lang.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}