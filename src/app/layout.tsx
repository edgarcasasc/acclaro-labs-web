// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import SchemaOrg from '@/components/SchemaOrg';
import { Suspense } from 'react';
import Script from 'next/script'; // <--- 1. IMPORTAMOS SCRIPT
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700', '900']
});

// CONSTANTES GLOBALES (Single Source of Truth)
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://acclarolabs.com";

const SITE_CONFIG = {
  // Alineación P0.B: Mismo título para H1, Title, OG y Twitter
  title: "Acclaro Labs | Auditoría UX + Integración CRM para Escalar",
  description: "Auditoría UX, instrumentación analítica y CRM (Salesforce). Conectamos datos y estrategia para crecer con evidencia.",
  siteName: "Acclaro Labs",
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.siteName}`
  },
  description: SITE_CONFIG.description,

  // SOLUCIÓN P1.B y P1.C: Consistencia de Slash y Hreflang Recíproco
  alternates: {
    canonical: "/", // Next.js resolverá a https://acclarolabs.com/
    languages: {
      'es-MX': '/',
      'en-US': '/en/',
      'fr-FR': '/fr/',
      'x-default': '/en/', // Fallback global explícito
    },
  },

  // SOLUCIÓN P1.A y P2.A: OpenGraph Completo y Consistente
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: "/",
    siteName: SITE_CONFIG.siteName,
    locale: "es_MX",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
    images: [{
      url: '/og-image-es.png',
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Auditoría UX e Integración CRM',
    }],
  },

  // Twitter alineado
  twitter: {
    card: "summary_large_image",
    site: "@acclarolabs",
    creator: "@acclarolabs",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/og-image-es.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {

  const resolvedParams = await params;
  const lang = (resolvedParams.lang as 'es' | 'en' | 'fr') || "es";

  return (
    // Forzamos el idioma completo para accesibilidad
    <html lang={lang === 'es' ? 'es-MX' : lang} suppressHydrationWarning>

      {/* 2. GTM SCRIPT LOGIC (Optimizado para Next.js) */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5Q3HMN42');
        `}
      </Script>

      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-blue-500/30 bg-slate-950`}>

        {/* 3. GTM NOSCRIPT (Fallback para browsers sin JS) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Q3HMN42"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Schema Graph JSON-LD */}
        <SchemaOrg lang={lang} />

        {/* SOLUCIÓN RIESGO #1 (CSR Bailout) */}
        <Suspense fallback={<div className="h-16 w-full fixed top-0 z-50 bg-slate-950/80 backdrop-blur-md" />}>
          <GlobalNav />
        </Suspense>

        {/* Contenido Principal */}
        <div className="relative pt-16 md:pt-20 min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}