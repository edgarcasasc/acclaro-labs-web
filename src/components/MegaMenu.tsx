// src/components/MegaMenu.tsx
'use client'; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Globe, Database, Laptop, PenTool, BarChart3, Search, Zap, LayoutTemplate, Cable } from 'lucide-react'; 
import * as Popover from '@radix-ui/react-popover'; 
import { motion, AnimatePresence } from 'framer-motion';

// --- DICCIONARIO CON RUTAS LOCALIZADAS ---
const MENU_CONTENT = {
  es: {
    home: "Inicio",
    services: "Servicios",
    contact: "Contacto",
    our_services_title: "Modelos de Engagement", // Cambio sutil para elevar el tono
    service_diag: {
      title: "Diagnóstico (Snapshot)",
      desc: "Identificamos fricción y oportunidades de conversión con prioridades claras.",
      href: "/servicios/informes-ia" // Apunta a la lógica de auditoría
    },
    service_sprint: {
      title: "Sprint de Optimización",
      desc: "Instrumentación + hipótesis + experimentos en ciclos cortos de 2 semanas.",
      href: "/servicios/estrategia-contenido" // Apunta a estrategia/UX
    },
    service_integration: {
      title: "Integración & Medición",
      desc: "Conectamos CRM/ERP para que tus decisiones se basen en datos confiables.",
      href: "/servicios/consultoria-crm" // Apunta a datos/CRM
    },
    service_delivery: {
      title: "Delivery Web & Product",
      desc: "Diseñamos y construimos flujos que reducen fricción y aceleran la decisión.",
      href: "/servicios/desarrollo-web" // Apunta a desarrollo
    },
    link_contact: "/contacto"
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    our_services_title: "Engagement Models",
    service_diag: {
      title: "Diagnosis (Snapshot)",
      desc: "We identify friction and conversion opportunities with clear priorities.",
      href: "/en/services/bi-ai-reporting"
    },
    service_sprint: {
      title: "Optimization Sprint",
      desc: "Instrumentation + hypotheses + experiments in short 2-week cycles.",
      href: "/en/services/content-strategy"
    },
    service_integration: {
      title: "Integration & Measurement",
      desc: "We connect CRM/ERP so your decisions are based on reliable data.",
      href: "/en/services/crm-consulting"
    },
    service_delivery: {
      title: "Web & Product Delivery",
      desc: "We design and build flows that reduce friction and accelerate decisions.",
      href: "/en/services/web-development"
    },
    link_contact: "/en/contact"
  },
  fr: {
    home: "Accueil",
    services: "Services",
    contact: "Contact",
    our_services_title: "Modèles d'Engagement",
    service_diag: {
      title: "Diagnostic (Snapshot)",
      desc: "Nous identifions les frictions et opportunités avec des priorités claires.",
      href: "/fr/services/rapports-bi-ia"
    },
    service_sprint: {
      title: "Sprint d'Optimisation",
      desc: "Instrumentation + hypothèses + expériences en cycles courts de 2 semaines.",
      href: "/fr/services/strategie-contenu"
    },
    service_integration: {
      title: "Intégration & Mesure",
      desc: "Nous connectons CRM/ERP pour des décisions basées sur des données fiables.",
      href: "/fr/services/conseil-crm"
    },
    service_delivery: {
      title: "Delivery Web & Produit",
      desc: "Nous concevons des flux qui réduisent les frictions et accélèrent la décision.",
      href: "/fr/services/developpement-web"
    },
    link_contact: "/fr/contact"
  }
};

export function MegaMenu() {
  const pathname = usePathname();
  
  type LangCode = 'es' | 'en' | 'fr';
  const currentLangCode: LangCode = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/fr') ? 'fr' : 'es';
  
  const t = MENU_CONTENT[currentLangCode];

  const handleLanguageChange = (lang: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    const targetUrl = lang === 'es' ? '/' : `/${lang}`;
    // eslint-disable-next-line
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
      
      {/* 1. Home Link */}
      <Link href={homeLink} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
        {t.home}
      </Link>

      {/* 2. MEGA MENU (Services) */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="group flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors focus:outline-none">
            {t.services}
            <ChevronDown size={16} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </button>
        </Popover.Trigger>
        
        <Popover.Portal>
          <Popover.Content 
            sideOffset={20}
            align="center"
            className="z-50 outline-none"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-screen max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-xl shadow-2xl"
            >
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {t.our_services_title}
                  </span>
                </div>
                
                {/* GRID 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Item 1: Diagnóstico (Ámbar - Foco en luz/claridad) */}
                  <ServiceItem 
                    href={t.service_diag.href}
                    title={t.service_diag.title}
                    desc={t.service_diag.desc}
                    icon={Search}
                    colorClass="text-amber-400"
                    bgClass="bg-amber-500/10"
                  />

                  {/* Item 2: Sprint (Rayo/Zap - Velocidad/Acción - Azul Eléctrico) */}
                  <ServiceItem 
                    href={t.service_sprint.href}
                    title={t.service_sprint.title}
                    desc={t.service_sprint.desc}
                    icon={Zap}
                    colorClass="text-blue-400"
                    bgClass="bg-blue-500/10"
                  />

                  {/* Item 3: Integración (Cable/Conexión - Violeta/Tech) */}
                  <ServiceItem 
                    href={t.service_integration.href}
                    title={t.service_integration.title}
                    desc={t.service_integration.desc}
                    icon={Cable}
                    colorClass="text-purple-400"
                    bgClass="bg-purple-500/10"
                  />

                  {/* Item 4: Delivery (Layout - Esmeralda/Construcción) */}
                  <ServiceItem 
                    href={t.service_delivery.href}
                    title={t.service_delivery.title}
                    desc={t.service_delivery.desc}
                    icon={LayoutTemplate}
                    colorClass="text-emerald-400"
                    bgClass="bg-emerald-500/10"
                  />

                </div>
              </div>
              
              {/* Footer del Mega Menu */}
              <div className="bg-white/5 p-4 text-center">
                <Link href={t.link_contact} className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1 group">
                  {t.contact} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      
      {/* 3. Contact Link */}
      <Link href={t.link_contact} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
        {t.contact}
      </Link>

      {/* 4. Language Selector */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all focus:outline-none">
            <Globe size={14} />
            <span>{activeLanguageName}</span>
            <ChevronDown size={14} className="transition-transform group-data-[state=open]:rotate-180" />
          </button>
        </Popover.Trigger>
        
        <Popover.Portal>
          <Popover.Content 
            sideOffset={8}
            align="end"
            className="z-50 w-32 overflow-hidden rounded-lg border border-white/10 bg-slate-950 p-1 shadow-xl"
          >
            <div className="flex flex-col gap-0.5">
              {languages.map((lang) => (
                <button 
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-xs font-medium transition-colors
                    ${lang.code === currentLangCode 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

// --- SUBCOMPONENTE REUTILIZABLE ---
interface ServiceItemProps {
  href: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
}

function ServiceItem({ href, title, desc, icon: Icon, colorClass, bgClass }: ServiceItemProps) {
  return (
    <Link href={href} className="group relative flex gap-4 rounded-lg p-3 transition-all hover:bg-white/5">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 ${bgClass} ${colorClass}`}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white">
          {title}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-500 group-hover:text-slate-400">
          {desc}
        </p>
      </div>
    </Link>
  );
}