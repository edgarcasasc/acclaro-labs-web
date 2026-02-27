import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { AcclaroBadge } from "./logos/AcclaroBadge";
// CORRECCIÓN 1: Import por defecto (sin llaves)
import LogoAcclaro from "./logos/LogoAcclaro";

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
    system_status: "Systems Normal"
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
    <footer className="relative z-10 w-full border-t border-white/10 bg-slate-950/80 backdrop-blur-xl pt-20 pb-10 overflow-hidden">

      {/* Efecto de luz superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-azul-zafiro/50 to-transparent opacity-80" />

      {/* Glows de fondo */}
      <div className="absolute -top-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-azul-zafiro/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-rojo-lacre/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* COLUMNA 1: Identidad */}
          <div className="space-y-6">

            <Link href="/" className="inline-block" aria-label="Acclaro Labs">
              {/* USO CORRECTO DEL LOGO: h-8 define altura, w-auto evita deformación */}
              <LogoAcclaro className="h-8 w-auto text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300" />
            </Link>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-400 max-w-sm font-light">
                {t.tagline}
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 hover:from-white hover:to-blue-300 transition-all duration-300 group"
              >
                {t.cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 text-blue-400 group-hover:text-white transition-transform" />
              </Link>
            </div>

            {/* Badge AI */}
            <div className="py-2">
              <div className="relative inline-block group cursor-default">
                <div className="absolute -inset-1 bg-gradient-to-r from-azul-zafiro/40 to-rojo-lacre/40 rounded-lg blur-lg opacity-40 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-md rounded-lg p-1 border border-white/10 group-hover:border-white/20 transition-colors">
                  <AcclaroBadge className="relative w-48 h-auto mix-blend-screen opacity-90 group-hover:opacity-100" />
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-5 pt-2">
              <SocialLink href="https://github.com/acclarolabs" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/company/acclarolabs/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://x.com/Acclarolabs" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            </div>
          </div>

          {/* COLUMNA 2: Soluciones */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6 flex items-center gap-2">
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

// CORRECCIÓN 2: Usar <a> para enlaces externos
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="text-slate-400 hover:text-amber-400 transition-colors duration-200 transform hover:scale-110"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
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