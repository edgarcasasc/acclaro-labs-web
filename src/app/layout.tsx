// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import SchemaOrg from '@/components/SchemaOrg'; 
import { Suspense } from 'react';
import "./globals.css";

// 1. CONFIGURACIÓN DE FUENTES
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair', 
  weight: ['700', '900'] 
});

// 2. CONSTANTES DE MARCA (Mensaje Unificado)
const SITE_CONFIG = {
  title: "Acclaro Labs | UX, Analítica & Integración CRM para Escalar",
  description: "Auditoría UX, instrumentación analítica y CRM (Salesforce). Conectamos datos y estrategia para crecer con evidencia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://acclarolabs.com"
};

// 3. METADATOS MAESTROS (Limpios de 'keywords')
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  
  title: {
    default: SITE_CONFIG.title,
    template: "%s | Acclaro Labs"
  },
  description: SITE_CONFIG.description,
  
  // SEO TÉCNICO: Canonicalización y Hreflang Recíproco
  alternates: {
    canonical: "/", 
    languages: {
      'es-MX': '/',
      'en-US': '/en/',
      'fr-FR': '/fr/',
      'x-default': '/en/', 
    },
  },

  // OpenGraph (Social Sharing)
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: "/",
    siteName: "Acclaro Labs",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@acclarolabs",
    creator: "@acclarolabs",
    title: "Auditoría Forense Digital & CRM | Acclaro Labs", 
    description: "Detectamos fricción y fugas de dinero en tu ecosistema digital con evidencia técnica.",
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

// 4. ROOT LAYOUT (Async para Next.js 15)
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
    <html lang={lang === 'es' ? 'es-MX' : lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-blue-500/30`}>
        
        {/* CEREBRO SEMÁNTICO (JSON-LD) */}
        <SchemaOrg lang={lang} />

        {/* NAVEGACIÓN GLOBAL */}
        <Suspense fallback={<div className="h-16 bg-transparent" />}>
          <GlobalNav />
        </Suspense>

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative pt-16 md:pt-20">
          {children}
        </div>
        
      </body>
    </html>
  );
}