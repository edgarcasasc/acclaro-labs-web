// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import SchemaOrg from '@/components/SchemaOrg'; // Importamos el nuevo componente modular
import { Suspense } from 'react';
import "./globals.css";

// 1. CONFIGURACIÓN DE FUENTES (Optimización de CLS)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair', 
  weight: ['700', '900'] 
});

// 2. METADATOS MAESTROS UNIFICADOS (Solución P0 y P1)
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://acclarolabs.com"),
  
  title: {
    default: "Acclaro Labs | UX, Analítica & Integración CRM para Escalar",
    template: "%s | Acclaro Labs"
  },
  description: "Integramos CRM, Salesforce y Desarrollo Web con estrategias de IA. Optimizamos UX y experimentación para aumentar tu conversión con evidencia.",
  
  alternates: {
    canonical: "/",
    languages: {
      'es-MX': '/',
      'en-US': '/en/',
      'fr-FR': '/fr/',
      'x-default': '/en/', 
    },
  },

  openGraph: {
    title: "Acclaro Labs | UX, Analítica & Integración CRM para Escalar",
    description: "Deja de adivinar: conecta datos, UX y Salesforce para medir el impacto real en tus ingresos.",
    url: "https://acclarolabs.com/",
    siteName: "Acclaro Labs",
    locale: "es_MX",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
    images: [{
      url: '/og-image-es.png',
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Estrategia Digital y Auditoría Forense',
    }],
  },

  twitter: {
    card: "summary_large_image",
    site: "@acclarolabs",
    creator: "@acclarolabs",
    title: "Acclaro Labs | Auditoría Forense Digital & CRM",
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

// 3. ROOT LAYOUT DINÁMICO (Next.js 15 / React 19)
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  
  // Await params es obligatorio en Next.js 15
  const resolvedParams = await params;
  const lang = (resolvedParams.lang as 'es' | 'en' | 'fr') || "es";

  return (
    <html lang={lang === 'es' ? 'es-MX' : lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-blue-500/30`}>
        
        {/* INYECCIÓN DE GRAFO DE ENTIDAD (Modularizado) */}
        <SchemaOrg lang={lang} />

        {/* NAVEGACIÓN GLOBAL CON SUSPENSE (Protección de Hidratación) */}
        <Suspense fallback={<div className="h-16 bg-transparent" />}>
          <GlobalNav />
        </Suspense>

        {/* CAPA DE CONTENIDO SCROLLABLE */}
        <div className="relative pt-16 md:pt-20">
          {children}
        </div>
        
      </body>
    </html>
  );
}