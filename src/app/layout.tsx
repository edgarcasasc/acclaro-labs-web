// src/app/layout.tsx
import type { Metadata, Viewport } from "next"; // Importamos Viewport para control móvil
import { Inter, Playfair_Display } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import SchemaOrg from '@/components/SchemaOrg'; 
import { Suspense } from 'react';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair', 
  weight: ['700', '900'] 
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

  // SOLUCIÓN P2.C: Eliminación de 'keywords' (Legacy code eliminado)

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
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-blue-500/30 bg-slate-950`}>
        
        {/* Schema Graph JSON-LD */}
        <SchemaOrg lang={lang} />

        {/* SOLUCIÓN RIESGO #1 (CSR Bailout): 
            Envolvemos componentes cliente (Navbar) en Suspense.
            Esto permite que Next.js haga streaming del HTML estático mientras
            el JS del navbar se hidrata, evitando el "Bailout" total.
        */}
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