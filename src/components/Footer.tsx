import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { AcclaroBadge } from "./logos/AcclaroBadge";
import { LogoAcclaro } from "./logos/LogoAcclaro";

// --- 1. DICCIONARIO DE TRADUCCIONES ---
const CONTENT = {
  es: {
    tagline: "Optimizamos el negocio digital con UX, analítica y experimentación, conectando tus sistemas para medir impacto y escalar con automatización/IA cuando conviene.",
    cta: "Solicitar diagnóstico",
    columns: {
      solutions: "Soluciones",
      company: "Compañía",
      legal: "Legal"
    },
    links: {
      audit: "Diagnóstico (Snapshot)",
      web: "Implementación Web",
      automation: "Automatización & IA Aplicada",
      team: "Nuestro Equipo",
      portfolio: "Portafolio & Casos",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    },
    copyright: "Todos los derechos reservados.",
    system_status: "Systems Normal" // Se suele dejar en inglés por estética tech, o "Sistemas Operativos"
  },
  en: {
    tagline: "We optimize digital business with UX, analytics, and experimentation, connecting your systems to measure impact and scale with automation/AI when appropriate.",
    cta: "Request Diagnosis",
    columns: {
      solutions: "Solutions",
      company: "Company",
      legal: "Legal"
    },
    links: {
      audit: "Diagnosis (Snapshot)",
      web: "Web Implementation",
      automation: "Automation & Applied AI",
      team: "Our Team",
      portfolio: "Portfolio & Cases",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    copyright: "All rights reserved.",
    system_status: "Systems Normal"
  },
  fr: {
    tagline: "Nous optimisons l'activité numérique avec UX, analytique et expérimentation, en connectant vos systèmes pour mesurer l'impact et évoluer avec l'automatisation/IA.",
    cta: "Demander un diagnostic",
    columns: {
      solutions: "Solutions",
      company: "Entreprise",
      legal: "Légal"
    },
    links: {
      audit: "Diagnostic (Snapshot)",
      web: "Mise en œuvre Web",
      automation: "Automatisation & IA Appliquée",
      team: "Notre Équipe",
      portfolio: "Portfolio & Cas",
      contact: "Contact",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation"
    },
    copyright: "Tous droits réservés.",
    system_status: "Systèmes Normaux"
  }
};

interface FooterProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function Footer({ lang = 'es' }: FooterProps) {
  const t = CONTENT[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-slate-800 bg-slate-950 pt-16 pb-8">
      
      {/* Efecto de luz superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMNA 1: Identidad */}
          <div className="space-y-6">
            
            <Link href="/" className="inline-block" aria-label="Acclaro Labs">
              <LogoAcclaro className="h-8 w-auto text-slate-100 hover:opacity-90 transition-opacity" />
            </Link>
            
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                {t.tagline}
              </p>
              
              <Link 
                href="/contacto" 
                className="inline-flex items-center gap-1.5 text-sm font-bold text-oro-antiguo hover:text-white transition-colors group"
              >
                {t.cta} 
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Badge AI */}
            <div className="py-2">
              <div className="relative inline-block group cursor-default">
                <div className="absolute -inset-1 bg-amber-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <AcclaroBadge className="relative w-48 h-auto" />
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-5">
              <SocialLink href="https://github.com" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            </div>
          </div>

          {/* COLUMNA 2: Soluciones */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-semibold leading-6 text-white mb-6 flex items-center gap-2">
              {t.columns.solutions}
            </h3>
            <ul role="list" className="space-y-4">
              <FooterLink href="/servicios/informes-ia" text={t.links.audit} />
              <FooterLink href="/servicios/desarrollo-web" text={t.links.web} />
              <FooterLink href="/servicios/consultoria-crm" text={t.links.automation} />
            </ul>
          </div>

          {/* COLUMNA 3: Compañía */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-6">
              {t.columns.company}
            </h3>
            <ul role="list" className="space-y-4">
              <FooterLink href="/#team" text={t.links.team} />
              <FooterLink href="/blog" text={t.links.portfolio} />
              <FooterLink href="/contacto" text={t.links.contact} />
            </ul>
          </div>
          
          {/* COLUMNA 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-6">
              {t.columns.legal}
            </h3>
            <ul role="list" className="space-y-4">
              <FooterLink href="/privacy" text={t.links.privacy} />
              <FooterLink href="/terms" text={t.links.terms} />
            </ul>
          </div>

        </div>
        
        {/* --- COPYRIGHT --- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-slate-500 text-center md:text-left">
            &copy; {currentYear} Acclaro Labs. {t.copyright} Monterrey, N.L.
          </p>
          
          {/* Indicador de Estado */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-help group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase group-hover:text-slate-300">
              {t.system_status}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- COMPONENTES AUXILIARES ---

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      className="text-slate-400 hover:text-amber-400 transition-colors duration-200 transform hover:scale-110"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm leading-6 text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
      >
        {text}
      </Link>
    </li>
  );
}